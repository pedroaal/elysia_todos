import { Elysia } from 'elysia'

import { create, destroy, findAll, findById, update } from '../services/todos.service'

const todos = new Elysia({ prefix: '/todos' })
  .get('/', (ctx) => {
    const {db} = ctx

    return findAll(db.todo)
  })
  .post('/', (ctx) => {
    const {db, body} = ctx

    return create(db.todo, body)
  })
  .get('/:id', (ctx) => {
    const {db, params} = ctx

    return findById(db.todo, Number(params.id))
  })
  .patch('/:id', (ctx) => {
    const {db, params, body} = ctx

    return update(db.todo, Number(params.id), body)
  })
  .delete('/:id', (ctx) => {
    const {db, params} = ctx

    return destroy(db.todo, Number(params.id))
  })

export default todos