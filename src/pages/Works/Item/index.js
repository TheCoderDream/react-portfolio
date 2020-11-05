import React from 'react';
import './index.scss';

const WorkItem = ({img, title, sourceCode, demo}) => {
    return (
        <div className="work-item">
            <img src={img} alt={title}/>
            <h3>{title}</h3>
            <div className="work-item__links">
                <a href={sourceCode} className="work-item__source-code"><i className="fas fa-code"/>Source Code</a>
                <a href={demo} className="work-item__demo"><i className="fas fa-rocket" />Demo</a>
            </div>
        </div>
    );
};

export default WorkItem;
