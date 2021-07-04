import React from 'react';

const Modal = () => {
  return (
    <div className="modal" style={{display: "none"}}>
      <form className="modal__form" action="" method="post">
        <div className="modal__container">
          <h2 className="modal__title">Оставить отзыв</h2>
          <button className="modal__button modal__button--close" type="button"></button>
        </div>
        <div className="modal__form-container">
          <div className="modal__form-container-input">
            <label>
              <input className="modal__input" id="name" type="text" required placeholder="Имя"/>
            </label>
            <label>
              <input className="modal__input" id="dignity" type="text" placeholder="Достоинства"/>
            </label>
            <label>
              <input className="modal__input" id="limitations" type="text" placeholder="Недостатки"/>
            </label>
          </div>
          <div>
            <div className="modal__rating">
              <h3 className="modal__rating-title">Оцените товар:</h3>
              <div className="modal__rating-container">
                <input className="modal__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                <label htmlFor="5-stars" className="modal__rating-label" title="perfect">
                  <svg className="modal__rating-image" width="27" height="27">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="modal__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                <label htmlFor="4-stars" className="modal__rating-label" title="good">
                  <svg className="modal__rating-image" width="27" height="27">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="modal__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                <label htmlFor="3-stars" className="modal__rating-label" title="not bad">
                  <svg className="modal__rating-image" width="27" height="27">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="fmodal__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                <label htmlFor="2-stars" className="modal__rating-label" title="badly">
                  <svg className="modal__rating-image" width="27" height="27">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="modal__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                <label htmlFor="1-star" className="modal__rating-label" title="terribly">
                  <svg className="modal__rating-image" width="27" height="27">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
                </div>
            </div>
            <textarea className="modal__input" name="comment" id="comment" cols="30" rows="5" placeholder="Комментарий" required></textarea>
          </div>
        </div>
        <button className="modal__button button button--active" type="submit">Оставить отзыв</button>
      </form>
    </div>
  );
};

export default Modal;