import './CreateTodoButton.css'

function CreateTodoButton(props) {
    return(
        <button className="CreateTodoButton"
        onClick={
            (event) => {
                console.log('Click')
                console.log(event)
                console.log(event.target)
            }
        }
        >+</button>
    );
}

export { CreateTodoButton };