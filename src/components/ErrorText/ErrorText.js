import React from 'react';

const ErrorText = ({ error }) => {
    return (
        <h3 className="black center">{error}</h3>
    );
}

export default ErrorText;