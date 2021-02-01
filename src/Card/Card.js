import React from 'react';
import { useEffect, useState } from 'react';
const Card = ({
    name='',
    type='',
    weight='',
    hiddenAbility='',
    baseStats=[],
    sprite='',
    Expand=false,
    extendCardCallback }) => {
    const [CardStyles, setCardStyles] = useState({});
    const [cardButton, setCardButton] = useState({});
    const [infoTextStyle, setInfoTextStyle] = useState(null);
    const textColors = ['green','blue','darkPurple','darkBlue','purple','yellow'];

    function changeLayout() {
        if(!Expand) {
            defualtCard();
        } else {
            expandCard();
        }
    }

    // Sets the card styles to defualt
    function defualtCard() {
        setCardContentStyles('Card', 'pokemonIcon-ShiftCenter', 'extendCardButton', 'More..');
        setInfoTextStyle(
            <div className='ma1 infotext textShadow'>
                <h4>{`Type: ${type}`}</h4>
                <h4>{`Weight: ${weight}kg`}</h4>
                <h4>{`HA: ${hiddenAbility}`}</h4>
            </div>
        );
    }

    // Sets the card styles to expanded mode so more info can be displayed.
    function expandCard() {
        setCardContentStyles('Card-Expand', 'pokemonIcon-ShiftLeft', 'extendCardButton', '');
        setInfoTextStyle(null);

        setTimeout(() => {
            setCardButton({cardButtonStyle: 'extendCardButton extendCardButton-Expand', cardButtonText: 'Less..'});
            let stats = baseStats.map((stat, index) => 
                <h4 className={textColors[index]} key={index}>{stat.stat.name}: {stat.base_stat}</h4>);

                setInfoTextStyle(
                    <div className="infoText-Expand textShadow">
                        <h4>{`Type: ${type}`}</h4>
                        <h4>{`Weight: ${weight}kg`}</h4>
                        <h4>{`HA: ${hiddenAbility}`}</h4>
                        {stats}
                    </div>);
        }, 350);
    }

    function setCardContentStyles(cardClass, cardIcon, cardButtonClass, cardButtonText) {
        setCardStyles({Card: cardClass, Icon: cardIcon});
        setCardButton({cardButtonStyle: cardButtonClass, cardButtonText: cardButtonText});
    }

    useEffect(changeLayout,[Expand, baseStats]);

    return (
        <div className={`tc br ba bw2 br3 dib Enlarge pa3 shadow-5 f4 redwhiteGradient ${CardStyles.Card}`}>
            <div>
                <div className={CardStyles.Icon}>
                    <h4 className="ma0 mb3">{name}</h4>
                    <img className='pokemonIcon'
                        src={sprite}
                        alt="icon" 
                    />
                </div>
                {infoTextStyle}
                <button onClick={extendCardCallback} className={cardButton.cardButtonStyle}>{cardButton.cardButtonText}</button>
            </div>
        </div>
    );
}

export default Card;