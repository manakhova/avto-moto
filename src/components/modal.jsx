import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../store/action';
import {closePopup, changeRequiredFieldStyle} from '../const.js'

const Modal = (props) => {
  const {setNewReview} = props;

  const handleCloseButtonClick = () => {
    closePopup();
  };

  const handleSaveReviewClick = (evt) => {
    evt.preventDefault();

    const nameInput = document.querySelector(`#name`);
    const dignityInput = document.querySelector(`#dignity`);
    const limitationsInput = document.querySelector(`#limitations`);
    const commentTextarea = document.querySelector(`#comment`);
    const checkedStar = document.querySelector(`.modal__rating-input:checked`);
    const rating = document.querySelector(`.modal__rating-container`);

    if (nameInput.value === `` || commentTextarea.value === `` || checkedStar === null) {
      changeRequiredFieldStyle(nameInput, commentTextarea, checkedStar, rating)
    } else {
      const newReview = {
        author: `${nameInput.value}`,
        dignity: `${dignityInput.value}`,
        limitations: `${limitationsInput.value}`,
        comment: `${commentTextarea.value}`,
        rating: Number(checkedStar.value)
    }

    localStorage['userData'] = JSON.stringify(newReview);
    
    setNewReview(newReview);
    closePopup();
    }
  }

  return (
    <div className="modal" style={{display: "none"}}>
      <form className="modal__form" action="https://echo.htmlacademy.ru/" method="post">
        <div className="modal__container">
          <h2 className="modal__title">Оставить отзыв</h2>
          <button className="modal__button modal__button--close" type="button" tabindex="7" onClick={handleCloseButtonClick}></button>
        </div>
        <div className="modal__form-container">
          <div className="modal__form-container-input">
            <label className="modal__label">
              <input className="modal__input" id="name" type="text" placeholder="Имя" tabindex="1" required/>
            </label>
            <label className="modal__label">
              <input className="modal__input" id="dignity" type="text" tabindex="2" placeholder="Достоинства"/>
            </label>
            <label className="modal__label">
              <input className="modal__input" id="limitations" type="text" tabindex="3" placeholder="Недостатки"/>
            </label>
          </div>
          <div>
            <div className="modal__rating">
              <h3 className="modal__rating-title">Оцените товар:</h3>
              <div className="modal__rating-container" tabindex="4">
                <input className="modal__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                <label htmlFor="5-stars" className="modal__rating-label" title="perfect">
                  <svg className="modal__rating-image" width="27" height="27">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="modal__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                <label htmlFor="4-stars" className="modal__rating-label" title="good">
                  <svg className="modal__rating-image" width="27" height="27">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="modal__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                <label htmlFor="3-stars" className="modal__rating-label" title="not bad">
                  <svg className="modal__rating-image" width="27" height="27">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="modal__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                <label htmlFor="2-stars" className="modal__rating-label" title="badly">
                  <svg className="modal__rating-image" width="27" height="27">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="modal__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                <label htmlFor="1-star" className="modal__rating-label" title="terribly">
                  <svg className="modal__rating-image" width="27" height="27">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
                </div>
            </div>
            <div className="modal__label">
              <textarea className="modal__input" tabindex="5" name="comment" id="comment" cols="30" rows="5" placeholder="Комментарий" required></textarea>
            </div>
          </div>
        </div>
        <button className="modal__button button button--active" type="submit" onClick={handleSaveReviewClick} tabindex="6">Оставить отзыв</button>
      </form>
    </div>
  );
};

Modal.propTypes = {
  setNewReview: PropTypes.func.isRequired,
}

// const mapStateToProps = (state) => {
//   return {
//     photo: state.photo,
//     currentSection: state.currentSection,
//     reviews: state.reviews
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  setNewReview(review) {
    dispatch(ActionCreator.setNewReview(review));
  },
});

export {Modal};
export default connect(null, mapDispatchToProps)(Modal);