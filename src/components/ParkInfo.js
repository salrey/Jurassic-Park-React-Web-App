const ParkInfo = (props) => {
    return (
        <>
            <p>Current dinosaur species: {props.currentSpecies.name}</p>
            <p>Number of dinosaurs in park: {props.numberOfDinos}</p>
        </>
    )
}

export default ParkInfo;