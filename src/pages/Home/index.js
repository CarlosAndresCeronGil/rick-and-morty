import React, { useEffect, useState } from "react";
import getCharacters from "../../services/getCharacters";
import ListOfCharacters from "../../components/ListOfCharacters";

export default function Home() {

    const [characters, setCharacters] = useState([])

    useEffect(function () {
        getCharacters()
            .then(characters => {
                setCharacters(characters)
            })
    }, [])

    return (
        <div>
            <h1>
                Home page
            </h1>
            <ListOfCharacters characters={characters}/>
        </div>
    )
}