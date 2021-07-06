import React from 'react';

const Features = () => {
  return (
    <ul className="main-info__section main-info__features features">
      <li className="features__item">
        <span className="features__item-title">Трансмиссия</span>
        <span className="features__item-value">Роботизированная</span>
      </li>
      <li className="features__item">
        <span className="features__item-title">Мощность двигателя, л.с.</span>
        <span className="features__item-value">249</span>
      </li>
      <li className="features__item">
        <span className="features__item-title">Тип двигателя</span>
        <span className="features__item-value">Бензиновый</span>
      </li>
      <li className="features__item">
        <span className="features__item-title">Привод</span>
        <span className="features__item-value">Полный</span>
      </li>
      <li className="features__item">
        <span className="features__item-title">Объем двигателя, л</span>
        <span className="features__item-value">2.4</span>
      </li>
      <li className="features__item">
        <span className="features__item-title">Макс. крутящий момент</span>
        <span className="features__item-value">370/4500</span>
      </li>
      <li className="features__item">
        <span className="features__item-title">Количество цилиндров</span>
        <span className="features__item-value">4</span>
      </li>
      
    </ul>
  );
};

export default Features;