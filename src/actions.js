import { 
    CHANGE_SEARCH_BOX,
    POKEMON_FETCH_PENDING,
    POKEMON_FETCH_SUCCESS,
    POKEMON_FETCH_FAILED
} from './constants.js';

export const setSearchBox = (input) => ({
    type: CHANGE_SEARCH_BOX,
    payload: input
});

export const setPokemon = (pokemon, currentPokemon) => (dispatch) => {
    if(pokemon === currentPokemon)
        return;
    dispatch({ type: POKEMON_FETCH_PENDING });
    fetch(fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(data => {
        if(data.name !== undefined) {
            dispatch({type: POKEMON_FETCH_SUCCESS, payload: data });
        } else {
            dispatch({type: POKEMON_FETCH_FAILED, payload: 'Invalid pokemon'});
        }
    })
    .catch(error => {
        console.log("pokemon fetch failed: ", error);
        dispatch({type: POKEMON_FETCH_FAILED, payload: 'Invalid pokemon'});
    }));
}

