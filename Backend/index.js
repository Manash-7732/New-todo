const express = require('express');
const { Valid } = require('./zod');
const port = 5000;


app.use(express.json());


app.post('/post', function (req, res) {
    const createPayLoad = req.body;
    const parsePayLoad = Valid.safeParse(createPayLoad);

    if (!parsePayLoad.success) {
        return res.status(400).json({
            message: "You are sending the wrong input",
           
        });
        return;
    }
});


app.get('/show', function (req, res) {
    res.send("Hello world");
});


app.put('/update', function (req, res) {
    const createPayLoad = req.body;
    const parsePayLoad = Valid.safeParse(createPayLoad);

    if (!parsePayLoad.success) {
        return res.status(400).json({
            message: "You are sending the wrong input",
           
        });
        return;
    }
});


app.listen(port, function () {
    console.log(`Process is running on port ${port}`);
});
