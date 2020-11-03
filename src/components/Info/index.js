import React from 'react';
import './index.scss';

const Info = ({icon, children}) => {
    return (
        <div className="info">
            <div className="property">
                <i className={`ion-ios-${icon}`}/>
                <strong>
                    {icon}:
                </strong>
            </div>
            <span>{children}</span>
        </div>
    );
};

export default Info;
