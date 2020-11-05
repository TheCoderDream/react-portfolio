import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                <img src="https://i.ibb.co/QPDLG6v/T4-CCV1-V4-G-UQ4-KGNEQ1-d074b7ae683a-512.jpg" alt={type} />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Emre Baskan
                </div>
                <TypedText
                  dataText={
                      [
                          'Senior JavaScript Engineer',
                          'Frontend Development',
                          'Backend Development'
                      ]
                  }
                />
                <SocialLinks/>
                <Info icon="location">
                    KYIV / ISTANBUL
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                <a href="https://drive.google.com/file/d/1KS59x7gIOht-r6pZ3DaV5kDDxSsqXNML/view?usp=sharing" target="_blank" rel="noreferrer">
                        <span>
                            Download CV
                        </span>
                </a>
                <a href="mailto:3mr3baskan@gmail.com">
                        <span>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
