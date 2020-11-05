import React from 'react';
import Title from "../common/Title";
import WorkItem from "./Item";

const Works = () => {
    return (
        <div className="page">
            <Title>
                Works
            </Title>
            <div className="row">
                <div className="column">
                    <WorkItem
                        img={'https://github.com/TheCodersDream/React-Ecommerce-App-with-Redux/raw/master/ecm1-1.png'}
                        title={'React Ecommerce App With Redux'}
                        sourceCode={'https://github.com/TheCoderDream/React-Ecommerce-App-with-Redux'}
                        demo={'http://numberless-leg.surge.sh/'}
                    />
                </div>
                <div className="column">
                    <WorkItem
                        img={'https://github.com/TheCodersDream/React-Ecommerce-App-with-Redux/raw/master/ecm1-1.png'}
                        title={'React Ecommerce App With Redux'}
                        sourceCode={'https://github.com/TheCoderDream/React-Ecommerce-App-with-Redux'}
                        demo={'http://numberless-leg.surge.sh/'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Works;
