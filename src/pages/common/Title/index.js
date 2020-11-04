import React from 'react';
import './index.scss';

const Title = ({children, icon}) => {
    return (
        <div className="title">
            {icon && <i className={icon} />}
            <h3>
                {children}
            </h3>
        </div>
    );
};

export default Title;
