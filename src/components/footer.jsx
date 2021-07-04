import React from 'react';

const Footer = () => {
  return (
    <footer className="page__footer">
      <ul className="navigation navigation--footer">
        <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="/">Корпоративным клиентам</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="/">Клиентам</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="/">Аренда авто</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="/">Каршеринг</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="/">Как продать авто</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="/">Trade-in</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="/">Test drive</a>
          </li>
      </ul>
    </footer>
  );
};

export default Footer;