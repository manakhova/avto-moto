import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import CarInfo from './car-info';
import Features from './features';
import Reviews from './reviews';
import Address from './address';
import {useEffect} from "react";
import {FIRST_PHOTO_ID ,LAST_PHOTO_ID} from '../const.js'

const Main = (props) => {
  const {photo, setNewPhoto, currentSection, setNewSection, reviews} = props;

  useEffect(() => {
    const prevButton = document.querySelector(`#prev-button`);
    const nextButton = document.querySelector(`#next-button`);

    photo === 1 ? prevButton.setAttribute("disabled", "disabled") : prevButton.removeAttribute("disabled", "disabled");
    photo === 3 ? nextButton.setAttribute("disabled", "disabled") : nextButton.removeAttribute("disabled", "disabled");
  }, [photo]);

  const handlePrevButtonClick = (photo) => (evt) => {
    evt.preventDefault();
    if (photo === FIRST_PHOTO_ID) {
      return;
    }
    setNewPhoto(--photo);
  };

  const handleNextButtonClick = (photo) => (evt) => { 
    evt.preventDefault();
    if (photo === LAST_PHOTO_ID) {
      return;
    }
    setNewPhoto(++photo);
  };

  useEffect(() => {
    const sections = document.querySelectorAll(`.main-info__section`);
    const buttons = document.querySelectorAll(`.main-info__button`);
    
    sections.forEach((element) => {
      if (!element.classList.contains(`${currentSection}`)) {
        element.style.display = `none`
      } else {
        if (!element.classList.contains(`address`)) {
          element.style.display = `block`
        } else {
          element.style.display = `flex`
        }
      }  
    });

    buttons.forEach((element) => {
      if (element.id !== currentSection) {
        element.classList.remove('button--active');
      } else {
        element.classList.add('button--active');
      }  
    });

  }, [currentSection]);

  const handleSectionButtonChange = (evt) => {
    setNewSection(evt.target.id); 
  };



  return (
    <main className="page__main">
      <div className="page__main-container">
        <CarInfo 
          photo={photo}
          onPrevButtonClick={handlePrevButtonClick}
          onNextButtonClick={handleNextButtonClick}
        />
        <section className="main-info">
          <div className="main-info__tabs">
            <button className="main-info__button button button--tab" type="button" id="features" onClick={handleSectionButtonChange} onFocus={handleSectionButtonChange}>Характеристики</button>
            <button className="main-info__button button button--tab" type="button" id="reviews" onClick={handleSectionButtonChange} onFocus={handleSectionButtonChange}>Отзывы</button>
            <button className="main-info__button button button--tab" type="button" id="address" onClick={handleSectionButtonChange} onFocus={handleSectionButtonChange}>Контакты</button>
          </div>
          <Features/>
          <Reviews reviews={reviews}/>
          <Address/>
        </section>
      </div>
    </main>
  );
};

Main.propTypes = {
  photo: PropTypes.number.isRequired,
  setNewPhoto: PropTypes.func.isRequired,
  currentSection: PropTypes.string.isRequired,
  setNewSection: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
  setNewReview: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    photo: state.photo,
    currentSection: state.currentSection,
    reviews: state.reviews
  };
};

const mapDispatchToProps = (dispatch) => ({
  setNewPhoto(photo) {
    dispatch(ActionCreator.setNewPhoto(photo));
  },
  setNewSection(currentSection) {
    dispatch(ActionCreator.setNewSection(currentSection));
  },
  setNewReview(review) {
    dispatch(ActionCreator.setNewReview(review));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);