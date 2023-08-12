import './PokemonList.css';
;
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';

const PokemonList = () => {

  const [pokemonListState,setPokemonListState] = usePokemonList(false)

  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-wrapper">
        {pokemonListState.isLoading
          ? 'Loading...'
          : pokemonListState.pokemonList.map((p) => (
              <Pokemon
                name={p.name}
                image={p.image}
                key={p.id}
                id={p.id}
              />
            ))}
      </div>
      <div className="controls">
        <button
          disabled={pokemonListState.prevUrl == null}
          onClick={() =>
            setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.prevUrl })
          }>
          Previous
        </button>
        <button
          disabled={pokemonListState.nexturl == null}
          onClick={() =>
            setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.nexturl })
          }>
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
