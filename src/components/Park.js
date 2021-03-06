import DinoCard from "./DinoCard";

const Park = (props) => {
    const dinosToDisplay = props.dinos.map((dino, i) => <DinoCard key={i} dino={dino} />)
    
    return (
        <div className="dino-grid">
            {dinosToDisplay}
        </div>
    )
}

export default Park;