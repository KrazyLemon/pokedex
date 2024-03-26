import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

export const FilterBar = () => {
	const { active, handleCheckbox } = useContext(PokemonContext);

	return (
		<div className={``}>
			<div className=''>
				<h3 className='flex justify-center w-full text-2xl font font-semibold'>Tipo</h3>
				<div className='space-x-2 px-1 my-2 rounded-lg grass shadow-md text-white'>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='grass'
						id='grass'
						
					/>
					<label className='text-xl font-light' htmlFor='grass'>Grass</label>
					<span></span>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 fire shadow-md text-white'>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='fire'
						id='fire'
					/>
					<label className='text-xl font-light' htmlFor='fire'>Fire</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md bug text-white '>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='bug'
						id='bug'
					/>
					<label className='text-xl font-light' htmlFor='bug'>Bug</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md fairy text-white '>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='fairy'
						id='fairy'
					/>
					<label className='text-xl font-light' htmlFor='fairy'>Fairy</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md dragon text-white'>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='dragon'
						id='dragon'
					/>
					<label className='text-xl font-light' htmlFor='dragon'>Dragon</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md shadow text-white '>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='shadow'
						id='shadow'
					/>
					<label className='text-xl font-light' htmlFor='shadow'>Shadow</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md text-white ground '>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='ground'
						id='ground'
					/>
					<label className='text-xl font-light' htmlFor='ground'>Ground</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md text-white normal '>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='normal'
						id='normal'
					/>
					<label className='text-xl font-light' htmlFor='normal'>Normal</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md text-white psychic '>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='psychic'
						id='psychic'
					/>
					<label className='text-xl font-light' htmlFor='psychic'>Psychic</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md text-white steel '>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='steel'
						id='steel'
					/>
					<label className='text-xl font-light' htmlFor='steel'>Steel</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md text-white dark '>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='dark'
						id='dark'
					/>
					<label className='text-xl font-light' htmlFor='dark'>Dark</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md text-white electric '>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='electric'
						id='electric'
					/>
					<label className='text-xl font-light' htmlFor='electric'>Electric</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md text-white fighting '>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='fighting'
						id='fighting'
					/>
					<label className='text-xl font-light' htmlFor='fighting'>Fighting</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md text-white flying'>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='flying'
						id='flying'
					/>
					<label className='text-xl font-light' htmlFor='flying'>Flying</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md text-white ice '>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='ice'
						id='ice'
					/>
					<label className='text-xl font-light' htmlFor='ice'>Ice</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md text-white poison '>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='poison'
						id='poison'
					/>
					<label className='text-xl font-light' htmlFor='poison'>Poison</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md text-white rock'>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='rock'
						id='rock'
					/>
					<label className='text-xl font-light' htmlFor='rock'>Rock</label>
				</div>
				<div className='space-x-2 px-1 rounded-lg my-2 shadow-md text-white water'>
					<input
						type='checkbox'
						// onChange={handleCheckbox}
						name='water'
						id='water'
					/>
					<label className='text-xl font-light' htmlFor='water'>Water</label>
				</div>
			</div>
		</div>
	);
};