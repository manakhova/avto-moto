import React from 'react';
import {closeKeydownPopup, closeLayoutPopup, MAX_STAR_COUNT} from '../const.js'

const Reviews = (props) => {
  const {reviews} = props;

  const handlePopupButtonClick = () => {
    const popup = document.querySelector('.modal');
    popup.style.display = `block`;
    popup.querySelector('#name').focus();
    document.querySelector(`body`).style.overflow = `hidden`;
    document.addEventListener('keydown', closeKeydownPopup);
    document.addEventListener('click', closeLayoutPopup);
  };

  const getCheckedStarsTemplate = (rating) => {
    const ratingStars = Array.apply(null, {length: rating}).map(Number.call, Number);
    
    return ratingStars.map((item) => <svg className="rating__stars-item rating__stars-item--checked" width="17" height="17" key={item}>
      <use xlinkHref="#icon-star-active"></use>
    </svg>)
  };

  const getOtherStarsTemplate = (rating) => {
    const otherStars = Array.apply(null, {length: MAX_STAR_COUNT - rating}).map(Number.call, Number);
    
    return otherStars.map((item) =><svg className="rating__stars-item" width="17" height="17" key={item}>
    <use xlinkHref="#icon-star"></use>
  </svg>)
  };

  const getRatingTemplate = (rating) => {
    return <div className="reviews__item-rating rating">
        {rating > MAX_STAR_COUNT / 2 ? <span className="rating__total">Советует</span> : ``}
        <div className="rating__stars">
          {getCheckedStarsTemplate(rating)}
          {getOtherStarsTemplate(rating)}
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
  }

  const getReviewTemplate = (review, i) => {
    return <li className="reviews__item" key={i}>
            <span className="reviews__item-author">{review.author}</span>
            <p className="reviews__item-dignity">
              <span className="reviews__item-dignity-title">Достоинства</span>
              <span className="reviews__item-dignity-list">{review.dignity}</span>
            </p>
            <p className="reviews__item-limitations">
              <span className="reviews__item-limitations-title">Недостатки</span>
              <span className="reviews__item-limitations-list">{review.limitations}</span>
            </p>
            <article className="reviews__item-comment">
              <span className="reviews__item-comment-title">Комментарий</span>
              <p className="reviews__item-comment-text">
                {review.comment}
              </p>
            </article>
            {getRatingTemplate(review.rating)}
            <div className="reviews__item-other">
              <span className="reviews__item-other-date">1 минуту назад</span>
              <button className="reviews__item-other-button button button--reply">Ответить</button>
            </div>
          </li>
  }

  const getReviewsTemplate = (reviews) => {
    return reviews.map((review, i) => {return getReviewTemplate(review, i)})
  }
  
  return (
    <div className="main-info__section main-info__reviews reviews">
    <button className="reviews__button button" onClick={handlePopupButtonClick}>Оставить отзыв</button>
      <ul className="reviews__list">
        {getReviewsTemplate(reviews)}
      </ul>
    </div>
  );
};
  
  export default Reviews;
