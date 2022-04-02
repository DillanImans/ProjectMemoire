import React from 'react';
import './styling/modal.scss';
import acrylic1 from '../photos/AcrylicCarousel/AcrylicFrame.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { currentLinkAction } from '../actions';
import { modalOpeningAction } from '../actions';
import { useDispatch } from 'react-redux';

const ProjectModalAI = () => {

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
        <img className="modalImage" alt="modalImage" src={acrylic1} />
        <div className="modalDescCon">
          <p className="modalDesc">This <b>double-sided acrylic frame</b> comes with an illustration at the front 
          and a custom letter at the back! 
        You can display an <b>illustration of your favorite picture</b> with a touch of <b>personalized words</b> as well 💗
          </p>
          <p className="modalPrice">Rp. 215,000</p>
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

export default connect(mapStateToProps, { modalOpeningAction, currentLinkAction })(ProjectModalAI);