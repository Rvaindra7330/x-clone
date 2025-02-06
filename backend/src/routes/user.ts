import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signupInput } from "@rdevs/medium-common";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const user = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>();


user.post('/signup', async(c) => {
  
  const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

  const body= await c.req.json();
  const {success}=signupInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      message:"inputs are incorrect"
    })
  }

  try{
    const user= await prisma.muggle.create({
      data:{
        email:body.email,
        password:body.password
      }
    })
    const jwt=await sign({id:user.id},c.env.JWT_SECRET);
    return c.json({jwt})
  } catch(e){
    c.status(403)
    return c.json({error:"user exists"})
  }
})

user.post('/signin', async(c) => {
  const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

  const body= await c.req.json();
  const {success}=signupInput.safeParse(body)
  if(!success){
    c.status(411)
    return c.json({
      message:"inputs are incorrect"
    })
  }
  try{
    const user= await prisma.muggle.findUnique({
      where:{
        email:body.email,
        password:body.password
      }
    })
    if(!user){
      c.status(404)
      return c.json({error:"user not found"})
    }
    const jwt=await sign({id:user.id},c.env.JWT_SECRET);
    return c.json({jwt})
  } catch(e){
    c.status(403)
    return c.json({message:"error while signing in"})
  }
})

