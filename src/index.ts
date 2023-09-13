import { Elysia } from 'elysia'
import { PrismaClient } from '@prisma/client'

import todos from './routes/todos.route'

const setup = (app: Elysia) => app.decorate('db', new PrismaClient())

const app = new Elysia()
  .use(setup)
  .use(todos)
  .get('/', () => 'Hello from elysia')
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
