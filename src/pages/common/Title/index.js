import React from 'react';
import './index.scss';

const Title = ({children}) => {
    return (
        <h3 className="title">
            {children}
        </h3>
    );
};

export default Title;
