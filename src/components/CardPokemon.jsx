
export const CardPokemon = ({pokemon}) => {
    return (
        <>
           <div className="flex flex-col rounded-md border shadow-sm m-2 p-2 hover:shadow-lg">
            <a href={`/pokemon/${pokemon.id}`}>
                <div>
                    <img className=" object-contain w-48 h-48  bg-slate-100"
                        src={pokemon.sprites.other.dream_world.front_default} 
                        alt={`Pokemon ${pokemon.name}`} 
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-sm font-light">N° {pokemon.id}</span>
                    <h3 className="text-2xl font-semibold mb-1">{pokemon.name}</h3>
                    <div className="flex">
                        {pokemon.types.map((type) => (
                                <span className={`rounded-md py-1 px-2 mr-1 text-white  ${type.type.name}`} key={type.type.name}>
                                    {type.type.name}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </a>
           </div>
        </>
    );
}