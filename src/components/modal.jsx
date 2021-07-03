import React from 'react';

const Modal = () => {
  return (
    <div className="modal">
      <form className="modal__form" action="" method="post">
        <h2 className="modal__title">Оставить отзыв</h2>
        <label>
          <input className="modal__input" id="name" type="text" required placeholder="Имя"/>
        </label>
        <label>
          <input className="modal__input" id="dignity" type="text" placeholder="Достоинства"/>
        </label>
        <label>
          <input className="modal__input" id="limitations" type="text" placeholder="Недостатки"/>
        </label>
        <div className="modal__rating">
          <h3 className="modal__rating-title">Оцените товар:</h3>
          <div className="modal__rating form__rating">
            <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
            <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
            <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
            <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
            <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>

            <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
            <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
            </div>
        </div>
        <textarea className="modal__input" name="comment" id="comment" cols="30" rows="10" placeholder="Комментарий" required></textarea>
        <button className="modal__button button">Оставить отзыв</button>
      </form>
    </div>
  );
};

export default Modal;