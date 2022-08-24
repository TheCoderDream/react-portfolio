import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";
import whiz from '../../assets/companies/whiz.jpeg';
import digiturk from '../../assets/companies/digiturk.jpeg';
import beyn from '../../assets/companies/beyn.jpeg';
import firat from '../../assets/companies/firat.jpeg';

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Resume - Total Commercial Experience {moment().diff('09/01/2016', 'years', true).toFixed(2)} years
            </Title>
            <ResumeItem
                date={'Nov 2019 - Present'}
                title={'Senior JavaScript Engineer'}
                company={'Whiz.ai'}
                logo={whiz}
            >
                • Work on front-end with extensive use of Angular, React, High Chart JS and native JavaScript for developing SPA. <br/>
                • Develop CSS with SCSS and BEM from sketches.
                • Performed code review
                • Performed unit testing
                • Was one of key developer of the project
                <h4 className="text-center">Description</h4>
                <p>
                    It was the enterprise applications ecosystem and various scattered data sources for a pharma company. Its mission was to democratize enterprise data and insights via human-like conversations.
                    I developed features like graphical charts for presentation data with High chart js, multi-language support, onboarding-tour, tooltip, modal and much more.
                </p>
            </ResumeItem>
            <ResumeItem
                date={'Apr 2019 – Sep 2019'}
                title={'JavaScript Developer'}
                company={'Digiturk'}
                logo={digiturk}
            >
                • Develop clean, maintainable and highly interactive single page web applications using
                Javascript, Angular, React, HTML, SASS. <br/>
                • Responsible for design and development of the web pages from sketches.
                <h4 className="text-center">Description</h4>
                <p>
                    I worked in Digiturk for six months on six-month contracts. Digiturk is a Turkish satellite television provider. And It's like Netflix of turkey.  It also offers online streaming of a library of films and television programs like Netflix.
                    Their project was written in jquery and vanilla javascript. It was messy code. My job with my teammates is to develop the application from scratch with react js by the new design.
                </p>
            </ResumeItem>
            <ResumeItem
                date={'Mar 2017 – Apr 2019'}
                title={'JavaScript Developer'}
                company={'Beyn Technology'}
                logo={beyn}
            >
                • Developed clean, maintainable and highly interactive single page web applications using
                Javascript, TypeScript, Angular, React, HTML, SASS. <br/>
                • Responsible for design and development of the web pages from mock-ups (PSD). <br/>
                • Worked the backend by using Node JS, Express and Mongo DB <br/>
                <h4 className="text-center">Description</h4>
                <p>
                    I worked in Beyn Technology for more than two years. I worked with Angular, React.js, and Node.js, but I mainly focused on front-end development, but I also worked on the backend side with the knowledge of node.js. This company made casino games. My teammates and I develop User Interface for these games using React.js  and Angular. Our company also used to get jobs from customers. We made an e-commerce app for a customer using Angular and Node.js. I worked on both sides back-end and front-end, but mainly on the front-end side. I played a key role in these projects. I made the structure of codes for projects how they should be designed and how components should communicate with each other.

                    In addition to interface of these games, I developed a language editor panel in Angular for these games from beginning to end by myself which makes language properties very easy to edit. It had some cool features such as auto-suggestion for keywords, auto-saving just for changes, appearing keyboard by language alphabet, find and replace, and more.

                    And last but not least I developed a user interface for easily testing games for QA engineers and game developers.
                </p>
            </ResumeItem>
            <ResumeItem
                classNames={'not-last'}
                date={'Sep 2016 – Apr 2017'}
                title={'Java Developer'}
                company={'Aymet Yazilim'}
                logo={'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
            >
                • Involved in the implementation of the MVC arhitecture using spring. <br/>
                • Connected to Data Sources and performed operations using Spring Data framework features like
                Spring JDBC and Spring ORM. <br/>
                • Built RESTFul web services consume them using Angular JS. <br/>
            </ResumeItem>
            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2012 – 2016'}
                title={'Firat University'}
                company={'Turkey'}
                logo={firat}
            >
                Bachelor's Degree in Software Engineering
            </ResumeItem>
        </div>
    );
};

export default Resume;
