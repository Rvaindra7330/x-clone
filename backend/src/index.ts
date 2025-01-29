import { Prisma, PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono'
import { sign } from 'hono/jwt';

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>();


app.post('/signup', async(c) => {
  
  const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

  const body= await c.req.json();

  const user= await prisma.muggle.create({
    data:{
      email:body.email,
      password:body.password
    }
  })
  const jwt=await sign({id:user.id},c.env.JWT_SECRET);
  return c.json({jwt})
})

app.post('/signin', (c) => {
  return c.text('Hello Hono!')
})
app.post('/blog', (c) => {
  return c.text('Hello Hono!')
})
app.get('blog/bulk', (c) => {
  return c.text('Hello Hono!')
})
app.get('blog/:id', (c) => {
  return c.text('Hello Hono!')
})

export default app
