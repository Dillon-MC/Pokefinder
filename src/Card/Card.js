import React from 'react';
import { useEffect, useState } from 'react';
const Card = ({
    name='',
    type='',
    weight='',
    hiddenAbility='',
    baseStats=[],
    sprite='' }) => {
    const [CardStyles, setCardStyles] = useState({});
    const [cardButton, setCardButton] = useState({});
    const [infoTextStyle, setInfoTextStyle] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const textColors = ['green','blue','darkPurple','darkBlue','purple','yellow'];

    function changeLayout() {
        if(!isExpanded) {
            defualtCard();
        } else {
            expandCard();
        }
    }

    // Sets the card styles to defualt
    function defualtCard() {
        setCardContentStyles('Card', 'pokemonIcon-ShiftCenter', 'extendCardButton', 'More..');
        setInfoTextStyle(
            <div id="infotext" className='ma1 infotext textShadow'>
                <h4 id="stat">{`Type: ${type}`}</h4>
                <h4 id="stat">{`Weight: ${weight}kg`}</h4>
                <h4 id="stat">{`HA: ${hiddenAbility}`}</h4>
            </div>
        );
    }

    // Sets the card styles to expanded mode so more info can be displayed.
    function expandCard() {
        setCardContentStyles('Card-Expand', 'pokemonIcon-ShiftLeft', 'extendCardButton', '');
        setInfoTextStyle(null);
            setCardButton({cardButtonStyle: 'extendCardButton extendCardButton-Expand', cardButtonText: 'Less..'});
            const stats = baseStats.map((stat, index) => 
            <h4 id="stat" className={textColors[index]} key={index}>{stat.stat.name}: {stat.base_stat}</h4>);

            setInfoTextStyle(
                <div id="infotext" className="infoText-Expand textShadow">
                    <h4 id="stat">{`Type: ${type}`}</h4>
                    <h4 id="stat">{`Weight: ${weight}kg`}</h4>
                    <h4 id="stat">{`HA: ${hiddenAbility}`}</h4>
                    {stats}
                </div>);
    }

    function setCardContentStyles(cardClass, cardIcon, cardButtonClass, cardButtonText) {
        setCardStyles({Card: cardClass, Icon: cardIcon});
        setCardButton({cardButtonStyle: cardButtonClass, cardButtonText: cardButtonText});
    }

    useEffect(changeLayout,[isExpanded, baseStats]);

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
                <button onClick={() => { setIsExpanded(!isExpanded); }} className={cardButton.cardButtonStyle}>{cardButton.cardButtonText}</button>
            </div>
        </div>
    );
}

export default Card;