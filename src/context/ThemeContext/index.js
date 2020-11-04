import React, { Component } from 'react';
import { THEMES } from "./data";

let Context;
const { Provider, Consumer } = Context = React.createContext();


class ThemeProvider extends Component {
    state = {
        ...THEMES.react,
        type: 'react'
    }

    componentDidMount() {
        this.setThemeColors(THEMES.react)
    }

    changeTheme = (type) => {
        if (THEMES[type]) {
            this.setState(state => {
                this.setThemeColors(THEMES[type]);
                if (state.type !== type ) {
                    return {
                        ...THEMES[type],
                        animate: true,
                        type
                    }
                }
                return state;
            });

        }
    }

    setThemeColors(theme) {
        document.documentElement.style.setProperty('--primary-color', theme.primaryColor );
        document.documentElement.style.setProperty('--secondary-color', theme.color );
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                changeTheme: this.changeTheme
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export {ThemeProvider, Consumer as ThemeConsumer, Context as ThemeContext };
