import React from 'react';
import './index.scss';
function range(start, end) {
    const ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}


const BgBubbles = () => {
    return (
        <div className='main'>
            <BgBubbles.Bubbles/>
        </div>
    );
};

BgBubbles.Bubbles = () => {
    return range(1, 30).map(
         n => <div className={`bubble bubble-${n}`}/>
    )
}

export default BgBubbles;
