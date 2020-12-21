import { 
    CHANGE_SEARCH_BOX,
    POKEMON_FETCH_PENDING,
    POKEMON_FETCH_SUCCESS,
    POKEMON_FETCH_FAILED
} from './constants.js';

const initialState = {
    searchBox: '',
}

export const searchPokemon = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_BOX:
            return Object.assign({}, state, { searchBox: action.payload });
        default:
            return state;
    }
}

const initialPokemonState = {
    name: '',
    type: '',
    weight: '',
    hiddenAbility: '',
    sprite: '',
    isPending: false,
    error: ''
}

export const getPokemon = (state=initialPokemonState, action={}) => {
    switch(action.type) {
        case POKEMON_FETCH_PENDING:
            return Object.assign({}, state, { isPending: true });
        case POKEMON_FETCH_SUCCESS:
            return Object.assign({}, state, { 
                name: action.payload.name,
                type: action.payload.types[0].type.name,
                weight: action.payload.weight,
                hiddenAbility: action.payload.abilities[action.payload.abilities.length-1].ability.name,
                sprite: action.payload.sprites.other.dream_world.front_default,
                error: '',
                isPending: false
            });
        case POKEMON_FETCH_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }
}

