import "./styles.css"

export default function Character({ name, status, species, image }) {
    return (
        <div className="card">
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            <h4>{status}</h4>
            <h4>{species}</h4>
        </div>
    )
}