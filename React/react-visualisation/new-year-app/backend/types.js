const zod = require("zod");

export const createTodo= zod.object({
    title: zod.string(),
    description: zod.string()
})

export const updateTodo = zod.object({
    id : zod.string()
})

// module.exports={
//     createTodo: createTodo,
//     updateTodo: updateTodo
// }