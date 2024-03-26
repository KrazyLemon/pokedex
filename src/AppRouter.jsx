import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PokemonPage from "./pages/PokemonPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";


export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navbar />} >
                    <Route index element={<HomePage />} />
                    <Route path="pokemon/:id" element={<PokemonPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>               
            </Routes>
        </>
    );
}