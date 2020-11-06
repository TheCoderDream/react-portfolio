import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import BgBubbles from "./components/BgBubbles";
import Profile from "./components/Profile";

import Menu from "./components/Menu";
import About from "./pages/About";

import {
    HashRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";

const routes = [
    { path: '/', name: 'About', Component: About },
    { path: '/resume', name: 'Resume', Component: Resume }
]

function App() {
  return (
      <>
          <BackToTop />
        <div className="page-wrap">
            <BgBubbles />
            <Router>
                <div className="container">
                    <Menu/>
                    <Profile/>
                    <AnimatedRoutes />
                </div>
            </Router>
        </div>
      </>
  );
}

const  AnimatedRoutes = withRouter(({location}) =>
     <TransitionGroup className="transition-wrapper">
        <CSSTransition
            classNames="transition"
            timeout={1000}
            unmountOnExit
            key={location.pathname}
        >
            <Switch>
                <Route exact path="/">
                    <About/>
                </Route>
                <Route exact path="/resume">
                    <Resume/>
                </Route>
                <Route exact path="/works">
                    <Works/>
                </Route>
                <Route exact path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </CSSTransition>
    </TransitionGroup>
);

export default App;
