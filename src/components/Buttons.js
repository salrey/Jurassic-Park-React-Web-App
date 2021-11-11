const Buttons = (props) => {
    return (
        <>
            <button onClick={props.getRandomSpecies}>Research New Species</button>
            <button onClick={props.addDinos}>Add New Dinosaur</button>
            <button onClick={props.reset}>Destroy Park</button>
        </>
    )
}

export default Buttons;