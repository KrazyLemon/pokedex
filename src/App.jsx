import AppRouter from "./AppRouter";
import { PokemonProvider } from "./context/PokemonProvider";
import './index.css'


export default function App() {
  
  return (
    <>
      <PokemonProvider>
        <AppRouter />
      </PokemonProvider>
    </>
  )
}

