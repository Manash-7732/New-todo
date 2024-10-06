function Todos({ todos }) {
    if (!todos || todos.length === 0) {
        return <p>No todos available</p>;
    }

    return (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Title</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Description</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Status</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => (
                    <tr key={index}>
                        <td style={{ border: "1px solid black", padding: "8px" }}>{todo.title}</td>
                        <td style={{ border: "1px solid black", padding: "8px" }}>{todo.description}</td>
                        <td style={{ border: "1px solid black", padding: "8px" }}>
                            {todo.completed ? "Completed" : "Not Completed"}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Todos;
