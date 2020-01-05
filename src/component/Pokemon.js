import React from 'react';
import * as PokemonAPI from '../api/PokemonAPI';

class Pokemon extends React.Component {

    state = {
        pokemonList: null
    }

    componentDidMount() {
        PokemonAPI.getPokemonList()
            .then((pokemonList) => {
                this.setState(() => ({
                    pokemonList: pokemonList
                }));
            });
    }

    render() {
        if (this.state.pokemonList === null) {
            return (<div>Loading...</div>);
        }

        return (
            <div>
                {
                    this.state.pokemonList.results.map((pokemon) => {
                        return (
                            <div key={pokemon.name}>{pokemon.name}</div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Pokemon;