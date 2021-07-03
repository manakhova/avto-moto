import React from 'react';
import CarInfo from './car-info';
import Features from './features';
import Reviews from './reviews';
import Address from './address';

const Main = () => {
  return (
    <main className="page__main">
      <CarInfo/>
      <section className="main-info">
        <div className="main-info__tabs">
          <button className="main-info__button button" type="button">Характеристики</button>
          <button className="main-info__button button" type="button">Отзывы</button>
          <button className="main-info__button button" type="button">Контакты</button>
        </div>
        <Features/>
        <Reviews/>
        <Address/>
      </section>
    </main>
  );
};

export default Main;