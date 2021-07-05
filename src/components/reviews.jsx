import React from 'react';

const Reviews = () => {
    return (
        <div className="main-info__section main-info__reviews reviews">
        <button className="reviews__button button">Оставить отзыв</button>
        <ul className="reviews__list">
          <li className="reviews__item">
            <span className="reviews__item-author">Борис Иванов</span>
            <p className="reviews__item-dignity">
              <span className="reviews__item-dignity-title">Достоинства</span>
              <span className="reviews__item-dignity-list">мощность, внешний вид</span>
            </p>
            <p className="reviews__item-limitations">
              <span className="reviews__item-limitations-title">Недостатки</span>
              <span className="reviews__item-limitations-list">Слабые тормозные колодки (пришлось заменить)</span>
            </p>
            <article className="reviews__item-comment">
              <span className="reviews__item-comment-title">Комментарий</span>
              <p className="reviews__item-comment-text">
                Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. 
                Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.
              </p>
            </article>
            <div className="reviews__item-rating rating">
              <span className="rating__total">Советует</span>
              <div className="rating__stars">
                <svg className="rating__stars-item rating__stars-item--checked" width="17" height="17">
                  <use xlinkHref="#icon-star-active"></use>
                </svg>
                <svg className="rating__stars-item rating__stars-item--checked" width="17" height="17">
                  <use xlinkHref="#icon-star-active"></use>
                </svg>
                <svg className="rating__stars-item rating__stars-item--checked" width="17" height="17">
                  <use xlinkHref="#icon-star-active"></use>
                </svg>
                <svg className="rating__stars-item" width="17" height="17">
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <svg className="rating__stars-item" width="17" height="17">
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <div className="reviews__item-other">
              <span className="reviews__item-other-date">1 минуту назад</span>
              <button className="reviews__item-other-button button button--reply">Ответить</button>
            </div>
          </li>
          <li className="reviews__item">
            <span className="reviews__item-author">Марсель Исмагилов</span>
            <p className="reviews__item-dignity">
              <span className="reviews__item-dignity-title">Достоинства</span>
              <span className="reviews__item-dignity-list">Cтиль, комфорт, управляемость</span>
            </p>
            <p className="reviews__item-limitations">
              <span className="reviews__item-limitations-title">Недостатки</span>
              <span className="reviews__item-limitations-list">Дорогой ремонт и обслуживание</span>
            </p>
            <article className="reviews__item-comment">
              <span className="reviews__item-comment-title">Комментарий</span>
              <p className="reviews__item-comment-text">
              Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. 
              Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. 
              Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.
              
              </p>
            </article>
            <div className="reviews__item-rating rating">
              <span className="rating__total">Советует</span>
              <div className="rating__stars">
                <svg className="rating__stars-item rating__stars-item--checked" width="17" height="17">
                  <use xlinkHref="#icon-star-active"></use>
                </svg>
                <svg className="rating__stars-item rating__stars-item--checked" width="17" height="17">
                  <use xlinkHref="#icon-star-active"></use>
                </svg>
                <svg className="rating__stars-item rating__stars-item--checked" width="17" height="17">
                  <use xlinkHref="#icon-star-active"></use>
                </svg>
                <svg className="rating__stars-item" width="17" height="17">
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <svg className="rating__stars-item" width="17" height="17">
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <div className="reviews__item-other">
              <span className="reviews__item-other-date">1 минуту назад</span>
              <button className="reviews__item-other-button button button--reply">Ответить</button>
            </div>
          </li>
          
        </ul>
      </div>
    );
  };
  
  export default Reviews;
