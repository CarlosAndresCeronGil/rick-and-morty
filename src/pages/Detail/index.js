import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getSingleCharacter from "../../services/getSingleCharacter"
import "./styles.css"

export default function Detail() {
    const [singleCharacter, setSingleCharacter] = useState([])

    let params = useParams()

    useEffect(function () {
        getSingleCharacter({id: params.id})
        .then(response => {
            setSingleCharacter(response)
        })
    }, [params.id])

    return (
        <div className="DetailCharacter">
            <h1>This is the detail character's page</h1>

            <img src={singleCharacter.image} alt={singleCharacter.id}/>

            <h2>Id of the character</h2>
            <p>{singleCharacter.id}</p>

            <h2>Name of the character</h2>
            <p>{singleCharacter.name}</p>

            <h2>Status of the character</h2>
            <p>{singleCharacter.status}</p>

            <h2>Species of the character</h2>
            <p>{singleCharacter.species}</p>
        </div>
    )
}