import { Prisma, PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono'
import { sign } from 'hono/jwt';
import { user } from './routes/user';
import { post } from './routes/post';
import { cors } from 'hono/cors';

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>();

app.use('/*', cors({
  origin:'*',
  allowMethods:['GET','POST','PUT','DELETE']
}))
app.route('api/v1/user',user)
app.route('api/v1/post',post)



export default app
