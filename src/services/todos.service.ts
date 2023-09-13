export const findAll = async (todo) => await todo.findMany()

export const findById = async (todo, id) => await todo.findUnique({
  where: { id },
})

export const create = async (todo, body) => await todo.create({data: body})

export const update = async (todo, id, body) => await todo.update({
  where: { id },
  data: body,
})

export const destroy = async (todo, id) => await todo.delete({
  where: { id },
})