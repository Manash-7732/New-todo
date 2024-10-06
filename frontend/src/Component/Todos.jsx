function Todos({ todos }) {

    if (!todos || todos.length === 0) {
        return <p>No todos available</p>;
    }

    return (
        <>
            {todos.map((todo) => {
              return  <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>
                        {todo.completed ? "Completed" : "Not Completed"}
                    </button>
                </div>
})}
        </>
    );
}

export default Todos;
