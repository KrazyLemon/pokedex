import { PokemonList } from "../components/PokemonList";
import { IconParkFilter } from "../components/icons/IconParkFilter";
import { FilterBar } from "../components/FilterBar";
import { DetailPokemonCard } from "../components/DetailPokemonCard";


export default function HomePage() {
    return (
        <>
            <div className="flex m-auto w-11/12">
                <img className='h-24 m-0 p-0' src='/pokemon_logo.png' alt='pokeball'  /> 
            </div>
            <div className="grid grid-cols-7 w-11/12 m-auto mt-4 ">
                <aside className="col-start-1 col-end-2 h-fit shadow-md border rounded-md my-2 p-2">
                    <FilterBar />
                </aside>
                <section className='col-start-2 col-end-7'>
                    <PokemonList />    
                </section>
                <div className="col-start-7 col-end-8 border shadow-md h-fit">
                    <DetailPokemonCard />
                </div>
            </div>
        </>
);
}