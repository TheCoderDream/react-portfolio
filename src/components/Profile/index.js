import React from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__content">
                <div className="profile__photo" />
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
                <div className="profile__contact">
                    <a href="">
                        <span>
                            Download CV
                        </span>
                    </a>
                    <a href="">
                        <span>
                            Contact Me
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
