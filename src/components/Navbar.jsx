import { Outlet } from "react-router-dom";
import { useContext } from "react";

import { IconParkSearch } from "./icons/IconParkSearch";
import { PokemonContext } from "../context/PokemonContext";

export default function Navbar() {

    const {} = useContext(PokemonContext);

    return (
        <>
        <div className='w-full bg-red-500'>
            <header className='flex justify-around align-middle w-3/4 h-16  mx-auto '>
                <div className='p-0 m-0'>
                    <a className=' text-white hover:bg-red-600' href='/'>
                        <img className='hover:bg-red-600 h-full m-0 p-0' src='/logo.png' alt='pokeball'  />
                    </a>
                </div>
                
                <div className='flex justify-center my-3  w-1/3'> 
                    <input className='w-11/12 bg-white rounded-s-md px-2' type="text" placeholder="Buscar Pokemon" />
                    <button className='bg-yellow-300 rounded-e-md px-2 ' ><IconParkSearch className=' size-8' /></button>
                </div>

                <nav className='flex justify-center'>
                   
                    <a className='flex items-center px-3 text-white hover:bg-red-600' href='/pokemon/'>Pokemones</a>
                </nav>

            </header>
        </div>
            <Outlet />
        </> 
    );
}