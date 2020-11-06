import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";

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
                logo={'https://media-exp1.licdn.com/dms/image/C510BAQE9E2q8pBQRQA/company-logo_200_200/0?e=1612396800&v=beta&t=5WOqSFuKuclqm95UWbyPH2mBHjS4trCZDeJZJ4zNkZg'}
            >
                • Work on front-end with extensive use of Angular and native JavaScript for developing SPA. <br/>
                • Develop CSS with SCSS and BEM from sketchs.
            </ResumeItem>
            <ResumeItem
                date={'Apr 2019 – Sep 2019'}
                title={'JavaScript Developer'}
                company={'Digiturk'}
                logo={'https://media-exp1.licdn.com/dms/image/C4D0BAQG3PHtpLchi8A/company-logo_100_100/0?e=1612396800&v=beta&t=yKG1oC59MovpZSDKOO3q9LtgtkNEAFNqreDdam9XFuQ'}
            >
                • Develop clean, maintainable and highly interactive single page web applications using
                Javascript, Angular, React, HTML, SASS. <br/>
                • Responsible for design and development of the web pages from sketchs.
            </ResumeItem>
            <ResumeItem
                date={'Mar 2017 – Apr 2019'}
                title={'JavaScript Developer'}
                company={'Beyn Technology'}
                logo={'https://media-exp1.licdn.com/dms/image/C4D0BAQGCja_0_IGhiA/company-logo_100_100/0?e=1612396800&v=beta&t=mYjWahrtMQiY2D4qgYX-pifsRkjENdc0huOwCfbnFlE'}
            >
                • Developed clean, maintainable and highly interactive single page web applications using
                Javascript, TypeScript, Angular, React, HTML, SASS. <br/>
                • Responsible for design and development of the web pages from mock-ups (PSD). <br/>
                • Worked the backend by using Node JS, Express and Mongo DB <br/>
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
                logo={'https://media-exp1.licdn.com/dms/image/C510BAQE3p1j1WWn1Fg/company-logo_100_100/0?e=1612396800&v=beta&t=TPDysSQsDB8h-UUybls55tpUvFfzxzUpSBW3wD1qqoM'}
            >
                Bachelor's Degree in Software Engineering
            </ResumeItem>
        </div>
    );
};

export default Resume;
