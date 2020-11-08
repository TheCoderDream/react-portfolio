import React from 'react';
import './index.scss'
const Dots = (
    {
        len,
        activeItem,
        changeItem
    }
) => {
    const dots = [];
    for(let i = 0; i < len; i++) {
        let dotClass = 'owl-dot';

        if(activeItem === i) {
            dotClass += ' active';
        }

        dots.push(
            <button
                onClick={() => {changeItem(i)}}
                className={dotClass}>
                <span/>
            </button>)
    }

    return (
        <div className="owl-dots">
            {dots}
        </div>
    );
};

export default Dots;
