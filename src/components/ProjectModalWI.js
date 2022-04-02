import React from 'react';
import './styling/modal.scss';
import willow1 from '../photos/WilloFrameCarousel/willo2.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { currentLinkAction } from '../actions';
import { modalOpeningAction } from '../actions';
import { useDispatch } from 'react-redux';

const ProjectModalWI = () => {

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
         <img className="modalImage" alt="modalImage" src={willow1} />
          <div className="modalDescCon">
          <p className="modalDesc">With the <b>Willow frame</b>, you can display your <b>favorite 
          memories and pictures as an illustration</b> inside our <b>special white wooden frame</b>! 
          It's the perfect room decor idea, keepsake, and gift for you and your loved ones 💐
          </p>
          <p className="modalPrice">Rp. 135,000</p>
          <Link to={'/findus'} className="linkModal">
            <button className="modalButton" onClick={updateAllState}>interested? click me!</button>
          </Link>
        </div>
      </div>
    </div>  )
}

const mapStateToProps = (state) => {
  return { openedModalState: state.openedModalState }
}

export default connect(mapStateToProps, { modalOpeningAction, currentLinkAction })(ProjectModalWI);