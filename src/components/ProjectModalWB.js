import React from 'react';
import './styling/modal.scss';
import box1 from '../photos/WoodeBoxCarousel/box1.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { currentLinkAction } from '../actions';
import { modalOpeningAction } from '../actions';
import { useDispatch } from 'react-redux';

const ProjectModalWB = () => {

  const dispatch = useDispatch();

  function updateAllState(){
    dispatch(currentLinkAction("findUs"));
    dispatch(modalOpeningAction(null));
  }

  function offModal(e){
    if(e.target.classList.contains('bigModalContainer')){
      dispatch(modalOpeningAction(null));
    }
  }

  return (
    <div className="bigModalContainer" onClick={offModal}>
      <div className="modalContainer">
        <img className="modalImage" alt="modalImage" src={box1} />
        <div className="modalDescCon">
          <p className="modalDesc">The <b>Woode Box</b> is everything you can wish for in a gift—Elegant, 
          intimate, memorable—but also affordable!
          <br />
          <br />
          Each Woode box gets their own <b>special colour and card</b> that you can choose from. 
          You can also customize your own <b>pictures and your personal message</b> inside the box ✨
          </p>
          <p className="modalPrice">Rp. 165,000</p>
          <Link to={'/findus'} className="linkModal">
            <button className="modalButton" onClick={updateAllState}>interested? click me!</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { openedModalState: state.openedModalState,
    currentLinkState: state.currentLinkState }
}

export default connect(mapStateToProps, { modalOpeningAction, currentLinkAction })(ProjectModalWB);