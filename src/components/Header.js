import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { currentLinkAction } from '../actions';

import './styling/header.scss';
import Logo from '../photos/Logo.png';

class Header extends React.Component {

  componentDidMount() {
    // Not dynamic. Need to change every URL change.
    if (window.location.href === "http://localhost:3000/"){
      this.props.currentLinkAction("mainPage");
    } else if (window.location.href === "http://localhost:3000/ourstory"){
      this.props.currentLinkAction("ourStory");
    } else if (window.location.href === "http://localhost:3000/findus"){
      this.props.currentLinkAction("findUs");
    }
  }

  updateOSLinkState = () => {
    this.props.currentLinkAction("ourStory");
  }

  updateMPLinkState = () => {
    this.props.currentLinkAction("mainPage");
  }

  updateFSLinkState = () => {
    this.props.currentLinkAction("findUs");
  }

  componentDidUpdate(){
    if (this.props.currentLinkState === "ourStory"){
      document.getElementById('ourStory').classList.add('boldedHeader')
      document.getElementById('mainPage').classList.remove('boldedHeader');
      document.getElementById('findUs').classList.remove('boldedHeader');
    } else if (this.props.currentLinkState === "mainPage"){
      document.getElementById('ourStory').classList.remove('boldedHeader')
      document.getElementById('mainPage').classList.add('boldedHeader');
      document.getElementById('findUs').classList.remove('boldedHeader');
    } else if (this.props.currentLinkState === "findUs"){
      document.getElementById('ourStory').classList.remove('boldedHeader')
      document.getElementById('mainPage').classList.remove('boldedHeader');
      document.getElementById('findUs').classList.add('boldedHeader');
    }
  }

  // ngl the currentLink state can just be written locally. But I suppose its okay for a redux reference (learning purposes).

  render(){
    return (
      <div className="headerContainer">
        <div className="header">
          <Link to={`/ourstory`} className="headerText" id="ourStory" onClick={this.updateOSLinkState} >
            <p>our story</p>
          </Link>
          <Link to="/" className="headerLogoContainer boldedHeader" id="mainPage" onClick={this.updateMPLinkState}>
            <p>project</p>
            <img src={Logo} alt="Logo here" className="headerLogo" />
            <p>memoire</p>
          </Link>
          <Link to={`/findus`} className="headerText" id="findUs" onClick={this.updateFSLinkState}>
            <p>find us</p>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentLinkState: state.currentLinkState};
}

export default connect(mapStateToProps, { currentLinkAction })(Header);
