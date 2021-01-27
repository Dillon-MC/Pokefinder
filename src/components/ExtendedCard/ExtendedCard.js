import React from 'react';
import { CSSTransition  } from 'react-transition-group';

const Card = ({ in: inProp }) => {
    return (
        <CSSTransition in={inProp} timeout={500} unmountOnExit classNames='growComponent' appear className='extendedCard center'>
            <div>
                I am AWESOME
            </div>
        </CSSTransition>
    );
}

export default Card;