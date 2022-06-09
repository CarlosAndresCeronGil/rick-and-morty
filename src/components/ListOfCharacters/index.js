import Character from "../Character"
import "./styles.css"

export default function ListOfCharacters({ characters }) {
    return (
        <div className="ListOfCharacters">
            {
                characters.map(singleCharacter => (
                    <div key={singleCharacter.id}>
                        <Character name={singleCharacter.name} status={singleCharacter.status} species={singleCharacter.species} image={singleCharacter.image} />
                    </div>
                ))
            }
        </div>
    )
}