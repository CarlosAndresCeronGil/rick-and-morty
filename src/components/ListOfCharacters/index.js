import Character from "../Character"
import React from "react"
import "./styles.css"

export default function ListOfCharacters({ characters }) {
    return (
        <div className="ListOfCharacters">
            {
                characters.map(singleCharacter => (
                    <div key={singleCharacter.id}>
                        <Character id={singleCharacter.id} name={singleCharacter.name} status={singleCharacter.status} species={singleCharacter.species} image={singleCharacter.image} />
                    </div>
                ))
            }
        </div>
    )
}