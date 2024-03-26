import React, { useEffect,useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/ui/Loader';
import { PokemonContext } from '../context/PokemonContext';
import { primerMayuscula } from '../helper/helper';


export default function PokemonPage() {

    const { getPokemonById } = useContext(PokemonContext);

    const [ loading, setLoading ] = useState(true);
    const [ pokemon, setPokemon ] = useState({});
    
    const { id } = useParams();

    const fetchPokemon = async id => {
        const data = await getPokemonById(id);
        setPokemon(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchPokemon(id);
    }, []);

    return (
        <>
            <main className="flex flex-row m-auto justify-around align-middle">
                {loading ? (
                   <Loader />
                ) : (
                    <>
                        <div className='flex flex-col'>
                            <h2 className='font-extrabold text-7xl'>
                                {primerMayuscula(pokemon.name)}
                            </h2>
                            <span className='text-3xl font-light text-gray-500'>
                                N° {pokemon.id}
                            </span>
                        </div>
                        <div className='border shadow-lg rounded-lg h-4/5  '>
                            <img className=" w-96"
                                src={pokemon.sprites.other.dream_world.front_default} 
                                alt={`Pokemon ${pokemon.name}`} 
                            />
                        </div>
                    </>
                )}
            </main>


        </>
    );
}