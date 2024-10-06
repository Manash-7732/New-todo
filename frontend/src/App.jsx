import { useState} from 'react';
import CreateTodo from './Component/CreateTodo';
import Todos from './Component/Todos';

function App() {
    const [todos, setTodos] = useState([]);

    
        fetch("http://localhost:5000/show")
            .then(async function (res) {
                const data = await res.json();
                setTodos(data.todos); 
            })
    return (
        <>
            <p>Hi there</p>
            <CreateTodo />
            <Todos todos={todos} />
        </>
    );
}

export default App;
