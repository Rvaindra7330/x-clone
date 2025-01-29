import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { auth } from "hono/utils/basic-auth";

export const post = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  },
  Variables:{
    userId:string
  }
}>();
//middleware
post.use('/*',async(c,next) => {
    const authHeader=c.req.header("authorization") || '';
    if(!authHeader){
        c.status(401)
        return c.json({error:"unauthorized"})
    }
    const payload=await verify(authHeader,c.env.JWT_SECRET);
    if(!payload){
        c.status(401)
        return c.json({error:"unauthorized"})
    }
    // @ts-ignore
    c.set('userId',payload.id)
    await next();
})

post.post('/', async (c) => {

    const userId=c.get('userId')
    const prisma= new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    
    const body= await c.req.json();
    const content= await prisma.blog.create({
        data:{
            content:body.content,
            authorId:userId,
            likeCount:"0"
        }
    })
    return c.json({id:content.id})
    
  })

post.get('/bulk', async(c) => {
    const prisma= new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const allPosts=await prisma.blog.findMany({
        select:{
            content:true,
            id:true
        }
    })
    return c.json({allPosts}) 
  })

post.get('/:id', async (c) => {
    const prisma= new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const id=c.req.param("id")
    const post=prisma.blog.findUnique({
        where:{
            id:id
        },
        select:{
            id:true,
            content:true,
            likeCount:true
        }
    })
    return c.json({post})
  })