import React from 'react';
import { NavLink } from "react-router-dom";
import './index.scss';

const Menu = () => {
    return (
        <ul className="menu">
            <Menu.Item
                name={"person"}
                link="/"
            >
                About
            </Menu.Item>
            <Menu.Item
                name={"android-list"}
                link="/resume"
            >
                Resume
            </Menu.Item>
            <Menu.Item
                name={'paintbrush'}
                link="/works"
            >
                Works
            </Menu.Item>
            <Menu.Item
                name={'at'}
                link="/contact"
            >
                Contact
            </Menu.Item>
        </ul>
    );
};

Menu.Item = ({link = '#', children, name }) =>
    <li>
        <NavLink to={link} activeClassName={'active'}>
            <span className={`icon ion-${name}`} />
            {children}
        </NavLink>
    </li>;

export default Menu;
