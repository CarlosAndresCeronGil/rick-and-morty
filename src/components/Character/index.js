import React from "react"
import { Link } from "react-router-dom"
import "./styles.css"

export default function Character({ id, name, status, species, image }) {
    return (
        <Link to={`character/${id}`}>
            <div className="card">
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <h4>{status}</h4>
                <h4>{species}</h4>
            </div>
        </Link>
    )
}