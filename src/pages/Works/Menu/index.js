import React from 'react';
import './index.scss';

const WorksMenu = (
    {
        items,
        selected,
        clicked
    }
) => {
    return (
        <div className="works-menu">
            {
                items.map(
                    item => <button className={selected === item ? 'active': ''} key={item} onClick={() => clicked(item)}>{item}</button>
                )
            }
        </div>
    );
};

export default WorksMenu;
