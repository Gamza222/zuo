import React, { FC } from 'react'
import "./Footer.scss"

interface FooterProps {
    state: string,
    setState:  React.Dispatch<React.SetStateAction<string>>
}

const Footer : FC<FooterProps> = ({state, setState}) => {

  return (
    <section className="footer-container container">
        <p className="footer-container__title">Преимущества</p>
        <div className="footer-container__content">
          <div className="footer-container__content__item1">
            <p>Товары для Wildberies, Ozon, Amazon</p>
          </div>
          <div className="footer-container__content__item2">
            <p>Подборка товаров по всему Китаю для Вас (байер)</p>
          </div>
          <div className="footer-container__content__item3">
            <p>Сложные заказы на оборудование и электронику</p>
          </div>
        </div>
        <a target="__blank" href="https://t.me/HaoDeliveryBot" className="footer-container__tg">Наш телеграм канал →</a>
        <p className="footer-container__copyright">上海市金山工业区广业路585号1幢328室 ， Room 328, 
        Building 1, No.585 Guangye Road, Jinshan Industrial Zone, 
        Shangha</p>
    </section>
  )
}

export default Footer