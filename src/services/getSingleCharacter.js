
export default function getSingleCharacter({ id }) {
    const API_URL = `https://rickandmortyapi.com/api/character/${id}`

    return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
        const { id, name, status, species, image, gender } = response

        return { id, name, status, species, image, gender }
    })
}