import React from 'react';
import pokeball from '../../containers/css/pokeball.png';
export const PageHeader = () => {
    return (
        <header className="bg-red h4 mt0 tc center">
            <h2 className="white f1 LondrinaOutline">Pokéfinder</h2>
            <img className="pt4 pl4" alt="pokeball" src={pokeball} width="70" height="70"/>
        </header>
    );
}