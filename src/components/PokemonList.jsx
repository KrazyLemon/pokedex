import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';

export const PokemonList = () => {
    
    const { pokemons } = useContext(PokemonContext);

    return (
        <>
           <div className='flex flex-wrap justify-center'>
                {pokemons.map((pokemon) => (
                    <CardPokemon key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </>
    );
}