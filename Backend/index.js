const express = require('express');
const { Valid } = require('./zod'); 
const { Data_MB } = require('./Models/DB'); 

const app = express();
const port = 5000;

app.use(express.json());


app.post('/post', async (req, res) => {
    const createPayLoad = req.body;
    const parsePayLoad = Valid.safeParse(createPayLoad); // Validate input using Zod

    if (!parsePayLoad.success) {
        return res.status(400).json({
            message: "You are sending the wrong input"
        });
        return;
    }

   
        
        await Data_MB.create({
            title: createPayLoad.title,
            description: createPayLoad.description 
        });


        res.json({
            message:"Done!"
        })
});


app.get('/show', async function (req, res) {
    const todo=await Data_MB.find({});
    res,json({
        todo
    })
});


app.put('/update', async (req, res) => {
    const createPayLoad = req.body;
    const parsePayLoad = Valid.safeParse(createPayLoad); // Validate input using Zod

    if (!parsePayLoad.success) {
        return res.status(400).json({
            message: "You are sending the wrong input"
        });
        return;
    }
});





app.listen(port, function () {
    console.log(`Process is running on port ${port}`);
});
