import React from 'react';

const Address = () => {
  return (
    <div className="main-info__section main-info__address address">
      <div className="address__info">
        <p className="address__info-address">
          <span className="address__info-address-title">Адрес</span>
          <span className="address__info-address-text">
          Санкт-Петербург, <br/>
          набережная реки Карповки, дом 5
          </span>
        </p>
        <p className="address__info-work">
          <span className="address__info-work-title">Режим работы</span>
          <span className="address__info-work-text">
          Ежедневно, с 10:00 до 21:00
          </span>
        </p>
        <p className="address__info-phone">
          <span className="address__info-phone-title">Телефон</span>
          <a className="address__info-phone-text" href="tel:88003335599">
          8 (800) 333-55-99
          </a>
        </p>
        <p className="address__info-email">
          <span className="address__info-email-title">E-mail</span>
          <a className="address__info-email-text" href="mailto:info@avto-moto.ru">
          info@avto-moto.ru
          </a>
        </p>
      </div>
      <div className="address__map">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1869.5762417877302!2d30.31518783424366!3d59.968144081239615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINC90LDQsdC10YDQtdC20L3QsNGPINGA0LXQutC4INCa0LDRgNC_0L7QstC60LgsINC00L7QvCA1!5e0!3m2!1sru!2sru!4v1625215365912!5m2!1sru!2sru" width="431" height="280" style={{border: "0"}} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Address;