const express = require("express");
const mongoose = require("mongoose");
const zod = require("./zod");
const User = require("./Models/DB");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());
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
    completed: createPayLoad.completed,
  });

  res.json({
    message: "Done!",
  });
});

app.get("/show", async function (req, res) {
  const todos = await User.find();

  res.json({
    todos,
  });
});

app.put("/update", async (req, res) => {
  const id = zod.updateId.safeParse(req.body);
  if (!id.success) {
    res.send("wrong input");
  }

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
