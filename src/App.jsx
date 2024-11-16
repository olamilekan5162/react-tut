import { useState } from 'react';

function App () {
    const [click, setClick] = useState([]);

    const addNumber = () => {
        setClick([
            {                "value": Math.ceil(Math.random() * 10),
                "id": click.length
            }
        ]);
    };

    return (
        <div>
            <ul>
                {click.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
            <button onClick={addNumber}>
                Click me
            </button>
        </div>
    );
}

export default App;