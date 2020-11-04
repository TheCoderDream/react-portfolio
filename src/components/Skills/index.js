import React, { useContext } from 'react';
import './index.scss';
import {ThemeContext} from "../../context/ThemeContext";

const Skills = () => {
    const { changeTheme } = useContext(ThemeContext);

    function handleMouseEnter(e) {
        const type = e.nativeEvent.target.id;
        if (type) {
            changeTheme(type)
        }
    }

    return (
        <div className="skills">
            <h6>Skills</h6>
            <ul onMouseOver={handleMouseEnter}>
                <li id="react" >React</li>
                <li id="angular">Angular</li>
                <li id="vue">Vue</li>
                <li id="rxjs">Rxjs</li>
                <li id="redux">Redux</li>
                <li id="node">Node</li>
                <li id="ngrx">Ngrx</li>
                <li id="javascript">JavaScript</li>
            </ul>
        </div>
    );
};

export default Skills;
