import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";
import me from '../../assets/me.png';

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{backgroundImage: `url(${backgroundImage})`}} />
                <img
                    src={me}
                    alt={type}
                />
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
                          'Backend Development',
                          'Mobile Development'
                      ]
                  }
                />
                <SocialLinks/>
                <Info icon="location">
                    ISTANBUL
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                <a href="https://drive.google.com/file/d/1mi7YArKevgkW1A2lPaMyrhJdMfm4hyPk/view?usp=sharing" target="_blank" rel="noreferrer">
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
