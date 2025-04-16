import Input from "../components/input";

function form(props) {
    return (
        <div className="form">
            <Input type="text"
                inputText={props.inputText}
                onChange={props.onInputChange}
            />
            <button onClick={props.onAddItem}>
                <span>Add</span>
            </button>
        </div>
    )
}
export default form;