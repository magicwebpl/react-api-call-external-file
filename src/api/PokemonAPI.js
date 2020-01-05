import axios from 'axios';

export const getPokemonList = () => {
    // In real life, API URL should be declared in another file :)
    return axios.get('https://pokeapi.co/api/v2/ability/')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
}