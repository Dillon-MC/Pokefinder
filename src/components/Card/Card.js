import React from 'react';

const Card = ({ name='', type='', weight='', hiddenAbility='', sprite=''}) => {
    return (
        <div className="tc br ba bw2 br3 dib mw5 grow pa3 shadow-5 redwhiteGradient f4">
            {console.log('sprite',sprite)}
            <h4 className="ma0 mb1">{name}</h4>
            <div>
                <img 
                    src={sprite} 
                    alt="icon" 
                    width="100px"
                    height="100px"
                />
                <p className="ma1">
                    {`Type: ${type}`}
                    <br/>
                    {`Weight: ${weight}kg`}
                    <br/>
                    {`HA: ${hiddenAbility}`}
                </p>
            </div>
        </div>
    );
}

export default Card;