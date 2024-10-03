const express = require("express");
const mongoose = require("mongoose");
const zod = require("./zod");
const User = require("./Models/DB");

const app = express();
const port = 5000;

app.use(express.json());

app.post("/post", async (req, res) => {
  const createPayLoad = req.body;
  const parsePayLoad = zod.schema.safeParse(createPayLoad);
  console.log(parsePayLoad);

  if (!parsePayLoad.success) {
    return res.status(400).json({
      message: "You are sending the wrong input",
    });
  }
  await User.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });

  return res.json({
    message: "Done!",
  });
});

app.get("/show", async function (req, res) {
  const todo = await User.find({});

  res.json({
    todo,
  });
});

app.put("/update", async (req, res) => {
  await User.findByIdAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  return res.json({
    message: "data got updated",
  });
});

mongoose
  .connect(
    "mongodb+srv://Manash_7732:zCVeBidWmpxjaS67@cluster0.ooomc.mongodb.net/myDatabaseName",
    {}
  )
  .then(function () {
    console.log("Mongoose server is connected");
  })
  .catch(function (error) {
    console.log("Server is not connected", error);
  });

app.listen(port, function () {
  console.log(`Process is running on port ${port}`);
});
