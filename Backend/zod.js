const zod = require('zod');


const schema = zod.object({
    title: zod.string(),
    description: zod.string(), 
});

const updateId = zod.object({
    id: zod.string(),
});

module.exports = {
    schema: schema,
    updateId: updateId,
};
