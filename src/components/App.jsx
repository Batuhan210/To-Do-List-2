import { useState } from "react";
import Heading from "../components/heading";
import Form from "../components/form";
import List from "../components/list";


function App() {
    const [items, setItems] = useState({           /* complex state  */
        inputText: "",
        items: []
    });

    
    function handleChange(event) {
        const { name, value } = event.target;
        setItems((prevItem) => ({
            ...prevItem,
            [name]: value
        }));
    }

    function addItem() {
        setItems((prevItem) => ({
            inputText: "",
            items: [...prevItem.items, prevItem.inputText]
        }));
    }

    return (
        <div className="container">
            <Heading />
            <Form
                inputText={items.inputText}
                onInputChange={handleChange}
                onAddItem={addItem}
            />

            <List items={items.items} />
        </div>
    );
}
export default App