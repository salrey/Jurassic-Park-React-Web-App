const ParkInfo = (props) => {
    return (
        <>
            <p>Current dinosaur species: {props.currentSpeciesName}</p>
            <p>Number of dinosaurs in park: {props.numberOfDinos}</p>
        </>
    )
}

export default ParkInfo;