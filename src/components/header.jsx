import React from 'react';

const Header = () => {
  return (
    <header className="page__header page-header">
      <div className="page-header__container">
        <a href="index.html" className="page-header__logo">
          <img className="page-header__logo-image" src="./img/logo.svg" alt="Avto-Moto"/>
        </a>
        <nav className="page-header__navigation">
          <ul className="navigation navigation--header">
            <li className="navigation__item">
              <a className="navigation__link" href="/">Автомобили</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="/">Контакты</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="/">Услуги</a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="/">Вакансии</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;