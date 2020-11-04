import React from 'react';
import './index.scss';

const ResumeItem = ({date, title, company, children, logo, classNames = ''}) => {
    return (
        <div className={`resume-item ${classNames}`}>
            <div className="resume-item__experience">
                <div>
                    <div className="resume-item__date">
                        {date}
                    </div>
                    <div className="resume-item__company">
                        <p>
                            {title}
                        </p>
                        <h3>
                            {company}
                        </h3>
                    </div>
                </div>
                <img src={logo} alt=""/>
            </div>
            <p className="resume-item__desc">
                {children}
            </p>
        </div>
    );
};

export default ResumeItem;
