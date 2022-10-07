import React, { FC } from 'react'
import "./Header.scss";

interface HeaderProps {
  setState: React.Dispatch<React.SetStateAction<string>>
}

const Header : FC<HeaderProps> = () => {
  return (
    <header className='header-container container'>
      <div className='header-container__text'>
        <h1 className='header-container__text__title'>ZUO</h1>
        <p className='header-container__text__subtitle'>Доставка грузов и товаров из Китая и ОАЭ</p>
      </div>
    </header>
  )
}

export default Header
