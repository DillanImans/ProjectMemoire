import React from 'react';
import { connect } from 'react-redux';

import './styling/mainPage.scss';
import CarouselTing from './CarouselTing';
import ProjectCatalogue from './ProjectCatalogue';
import ProjectModalAI from './ProjectModalAI';
import ProjectModalWI from './ProjectModalWI';
import ProjectModalWB from './ProjectModalWB';
import { modalOpeningAction } from '../actions';

import box from '../photos/WoodeBoxCarousel/box1.png';
import willo from '../photos/WilloFrameCarousel/willo2.png';
import acryl from '../photos/AcrylicCarousel/AcrylicFrame.png';
import arrow from '../photos/arrow.svg';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    window.addEventListener('scroll', this.arrowExistence, true);
    this.topRef = React.createRef();
    this.bottomRef = React.createRef();
    this.state = { topScreen: true, bottomScreen: false }
  }

  arrowExistence = () => {
    if(window.pageYOffset === 0){
      this.setState({ topScreen: true, bottomScreen: false })
    } else if (window.pageYOffset > 0 && window.pageYOffset < 927){
      this.setState({ topScreen: false, bottomScreen: false })
    } else if(window.pageYOffset === 927) {
      this.setState({ topScreen: false, bottomScreen: true })
    }
  }

  goUp = () => {
    this.topRef.current.scrollIntoView({ behavior: "smooth" });
    this.setState({ topScreen: true, bottomScreen: false })
  }

  goDown = () => {
    this.bottomRef.current.scrollIntoView({ behavior: "smooth" });
    this.setState({ topScreen: false, bottomScreen: true })
  }

  openWB = () => {
    this.props.modalOpeningAction('wbProj');
  }

  openIA = () => {
    this.props.modalOpeningAction('aiProj');
  }

  openIW = () => {
    this.props.modalOpeningAction('wiProj');
  }

  openModalChoice = () => {
    if (this.props.openedModalState === "wbProj"){
      return <ProjectModalWB />
    } else if(this.props.openedModalState === "aiProj"){
      return <ProjectModalAI />
    } else if(this.props.openedModalState === "wiProj"){
      return <ProjectModalWI />
    } else {
      return;
    }
  }

  render(){
    return (
      <div className="mainPageContainer" id="mainPageContainer" ref={this.topRef}>
        <img src={arrow} alt="Arrow Up" className={`mainPageArrow arrowUp ${this.state.topScreen ? "arrowGone" : ""}`} 
        onClick={this.goUp} />
        <img src={arrow} alt="Arrow Down" className={`mainPageArrow arrowDown ${this.state.bottomScreen ? "arrowGone" : ""}`} 
        onClick={this.goDown} />
        <div className="landingCarouselPage">
          <div className="carouselContainer">
            <CarouselTing />
          </div>
          <div className="carouselDesc">
            <p>your memories in gift box</p>
            <p>handcrafted with love</p>  
          </div>
        </div>
        <div className="projectCataloguePage">
          <div className="projectCatalogueHeader">
            project catalogue
          </div>
          <div className="projectCatalogueContainer">
            <div onClick={this.openWB}>
              <ProjectCatalogue imageSrc={box} imageTitle="★ woode box" 
              projectHeight="width70"/>
            </div>
            <div onClick={this.openIA}>
              <ProjectCatalogue imageSrc={acryl} imageTitle="illustration - acryl" 
              projectHeight="width70" />
            </div>
            <div onClick={this.openIW}>
              <ProjectCatalogue imageSrc={willo} imageTitle="illustration - willow" 
              projectHeight="width70" />
            </div>
          </div>
          <div className="projectCatalogueMCS" ref={this.bottomRef}>
            more coming soon!
          </div>
        </div>
        {this.openModalChoice()}
      </div>
    )
  }

  componentWillUnmount(){
    // What to put here?
    
  }
}

const mapStateToProps = (state) => {
  return { openedModalState: state.openedModalState }
}

export default connect(mapStateToProps, { modalOpeningAction })(MainPage);