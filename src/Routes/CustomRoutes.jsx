import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Pokedex from '../component/Pokedex/Pokedex';
import PokemonDetails from '../component/PokemonDetails/PokemonDetails';

const CustomRoutes = () => {
  return (
    <>
      <Link
        to="/"
        className="pokedex-heading">
        Pokedex
      </Link>
      <Routes>
        <Route
          path="/"
          element={<Pokedex />}
        />
        <Route
          path="/pokemon/:id"
          element={<PokemonDetails />}
        />
      </Routes>
    </>
  );
};

export default CustomRoutes;
