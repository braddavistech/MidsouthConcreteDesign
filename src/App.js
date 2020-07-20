import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
// import isMobile from './utils';
import './App.css';
import Navigation from './containers/Navbar';
import Home from './containers/Home';
import Photos from './containers/Photos';
import Contact from './containers/Contact';

const images = [
  require('./images/Work3.JPG'),
  require('./images/Work1.JPG'),
  require('./images/Work2.JPG'),
  require('./images/Work4.JPG'),
  require('./images/Work5.JPG'),
  require('./images/Work6.JPG'),
  require('./images/Work7.JPG'),
  require('./images/Work8.JPG'),
  require('./images/Work9.JPG'),
  require('./images/Work10.JPG'),
  require('./images/Work11.JPG'),
  require('./images/Work12.JPG'),
  require('./images/Work13.JPG'),
  require('./images/Work14.JPG'),
  require('./images/Work15.JPG'),
  require('./images/Work16.JPG'),
  require('./images/Work17.JPG'),
  require('./images/Work18.JPG'),
  require('./images/Work19.JPG'),
  require('./images/Work20.JPG'),
  require('./images/Work21.JPG'),
  require('./images/Work22.JPG'),
  require('./images/Work23.JPG'),
  require('./images/Work24.JPG'),
  require('./images/Work25.JPG')
];

const Logo = require('./images/logo.png');
const HomeImg = require('./images/ConcretePouring.JPG');



class App extends React.Component {
  state = { width: 0, height: 0 };
  // const [isMobile, setIsMobile] = useState(false)
  // useEffect(() => {
  //   setIsMobile(useMediaQuery({ query: '(max-width: 789px)' }));
  // });
  // const isMobile = useMediaQuery({ query: '(max-width: 789px)' })

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    const isMobile = () => this.state.width < 700;
    const isWider = () => this.state.width > this.state.height;
    const navProps = { Logo, isMobile: isMobile(), isWider: isWider() };
    const photoProps = { images, isMobile: isMobile(), isWider: isWider() };
    const homeProps = { HomeImg, isMobile: isMobile(), isWider: isWider() };

    return (
      <Router>
        <Navigation {...navProps} />
        < Switch >
          <Route path="/photos">
            <Photos {...photoProps} />
          </Route>
          <Route path="/contact-us">
            <Contact {...homeProps} />
          </Route>
          <Route path="/">
            <Home {...homeProps} />
          </Route>
        </Switch >
      </Router >
    );
  };
}

export default App;
