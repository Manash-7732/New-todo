import { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          const value = e.target.value;
          console.log(value);
          setTitle(value);
        }}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Description"
        onChange={(e) => {
          const value = e.target.value;
          console.log(value);
          setDescription(value);
        }}
      />
      <br />
      <button
        onClick={async () => {
          try {
            const res = await fetch("http://localhost:5000/post", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            });

            const data = await res.json();
            console.log(data);
            alert("Todo added");
          } catch (error) {
            console.error("Error adding todo:", error);
            alert("Failed to add todo");
          }
        }}
      >
        ADD a Todo
      </button>
    </>
  );
}

export default CreateTodo;
