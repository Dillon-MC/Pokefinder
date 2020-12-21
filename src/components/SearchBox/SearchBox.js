import React from 'react';

const SearchBox = ({ searchChange, getPokemon, text, currentPokemon }) => {
    return (
        <div className="tc mt6 center">
            <input
                className="tc searchBox bw2 bg-red white b--black br3 w-40 h3 f2 minWidth14 shadow-3 outline-0" 
                type="search"
                placeholder="Pokemon name.."
                autoComplete="on" 
                onChange={searchChange}/>
            <button 
                className="w-10 grow f4 pv2 dib red f4 b bg-white-80 ml1 br3 bw2 b--black minWidth5 shadow-3 outline-0" 
                onClick={()=>getPokemon(text.toLowerCase(), currentPokemon)}>
                    Go!
            </button>
        </div>
    );
}

export default SearchBox;