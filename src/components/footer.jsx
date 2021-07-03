import React from 'react';

const Footer = () => {
  return (
    <footer className="page__footer page-footer">
      <ul className="navigation navigation--footer">
        <li className="navigation__item">
            <a className="navigation__link" href="/">Корпоративным клиентам</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="/">Клиентам</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="/">Аренда авто</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="/">Каршеринг</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="/">Как продать авто</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="/">Trade-in</a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="/">Test drive</a>
          </li>
      </ul>
    </footer>
  );
};

export default Footer;