import { PokemonContext } from "./PokemonContext";
import { useState , useEffect } from "react";
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({ children }) => {

    const [offset, setOffset] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const [globalPokemons, setGlobalPokemons] = useState([]);
    
    //Estados para la aplicacion
    const [loading , setLoading] = useState(true);
    const [active, setActive] = useState(false);

    //Utilizar Custom Hook --Use Form 
    const { valueSearch, onInputSearch, onResetForm } = useForm({
        valueSearch: ''
    });

    //Lamar a la API 50 pokemones
    const getAllpokemons = async (limit = 50) => {

        const baseurl = `https://pokeapi.co/api/v2/`;

        const res = await fetch(`${baseurl}pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();

        const promises  = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
            }
        );

        const results = await Promise.all(promises);
        setPokemons([...pokemons, ...results]);
        setLoading(false);
    }

    //LLamar a todos los pokemones
    const getGlobalpokemons = async () => {

        const baseurl = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;

        const res = await fetch(baseurl);
        const data = await res.json();

        const promises  = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
            }
        );

        const results = await Promise.all(promises);
        setGlobalPokemons(results);
        setLoading(false);
    
    }

    //llamar a un pokemon por su id
    const getPokemonById = async id => {
		const baseURL = 'https://pokeapi.co/api/v2/';
		const res = await fetch(`${baseURL}pokemon/${id}`);
		const data = await res.json();
		return data;
	};

    useEffect(() => {      
        getAllpokemons();
    }, []);

    useEffect(() => {
        getGlobalpokemons();
    }, []);


    return (
        <PokemonContext.Provider 
            value={{
                valueSearch,
                onInputSearch,
                onResetForm,
                pokemons,
                globalPokemons,
                getPokemonById,
        }}>
            {children}
        </PokemonContext.Provider>
    );
}