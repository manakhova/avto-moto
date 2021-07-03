import React from 'react';

const CarInfo = () => {
  return (
    <section className="car-info">
      <h1 className="car-info__title visually-hidden">Информация об автомобиле</h1>
        <div className="car-info__container">
          <img className="car-info__photo" src="./img/1.jpg" alt="Фото автомобиля 1"/>
          <div className="car-info__text-container">
            <h2 className="car-info__title">Марпех 11</h2>
            <ul className="car-info__features">
              <li className="car-info__feature">
                <svg className="car-info__feature-icon" width="22" height="22">
                  <use xlinkHref="#gasoline"></use>
                </svg>
                <span className="car-info__feature-title">бензин</span>
              </li>
              <li className="car-info__feature">
                <svg className="car-info__feature-icon" width="22" height="22">
                  <use xlinkHref="#mechanics"></use>
                </svg>
                <span className="car-info__feature-title">механика</span>
              </li>
              <li className="car-info__feature">
                <svg className="car-info__feature-icon" width="30" height="20">
                  <use xlinkHref="#horsepower"></use>
                </svg>
                <span className="car-info__feature-title">100 л.с.</span>
              </li>
              <li className="car-info__feature">
                <svg className="car-info__feature-icon" width="29" height="22">
                  <use xlinkHref="#volume"></use>
                </svg>
                <span className="car-info__feature-title">1.4 л</span>
              </li>
            </ul>
            <div className="car-info__prices">
              <p className="car-info__price-current">
                2 300 000  ₽
              </p>
              <p className="car-info__price-prev">
                2 400 000  ₽
              </p>
            </div>
            <button className="car-info__button button button--active" type="button">Оставить заявку</button>
            <button className="car-info__button button" type="button">В кредит от 11 000 ₽</button>
          </div>
        </div>
        <ul className="car-info__slider slider">
          <li className="slider__item">
            <img className="slider__photo" width="128px" height="80px" src="./img/1.jpg" alt="Фото автомобиля 1"/>
          </li>
          <li className="slider__item">
            <img className="slider__photo" width="128px" height="80px" src="./img/2.jpg" alt="Фото автомобиля 2"/>
          </li>
          <li className="slider__item">
            <img className="slider__photo" width="128px" height="80px" src="./img/3.jpg" alt="Фото автомобиля 3"/>
          </li>
        </ul>
      </section>
  );
};

export default CarInfo;