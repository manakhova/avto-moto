import React from 'react';
import CarInfo from './car-info';
import Features from './features';
import Reviews from './reviews';
import Address from './address';

const Main = () => {
  return (
    <main className="page__main">
      <div className="page__main-container">
        <CarInfo/>
        <section className="main-info">
          <div className="main-info__tabs">
            <button className="main-info__button button  button--active button--tab" type="button">Характеристики</button>
            <button className="main-info__button button button--tab" type="button">Отзывы</button>
            <button className="main-info__button button button--tab" type="button">Контакты</button>
          </div>
          <Features/>
          <Reviews/>
          <Address/>
        </section>
      </div>
    </main>
  );
};

export default Main;