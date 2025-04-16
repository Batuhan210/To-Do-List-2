function input(props) {
    return (
        <input
            type={props.type}
            name="inputText"
            value={props.inputText}
            onChange={props.onChange}
        />
    )
}
export default input;