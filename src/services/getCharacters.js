
export default function getCharacters() {
    const API_URL = 'https://rickandmortyapi.com/api/character'

    return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
        console.log(response)
        const { results } = response

        const characters = results.map(results => {
            const { id, name, status, species, image } = results
            return { id, name, status, species, image }
        })

        return characters
    })
}