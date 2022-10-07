import React, { FC } from 'react'
import './Description.scss'

interface DescriptionProps {
  state: string,
  setState:  React.Dispatch<React.SetStateAction<string>>
}


const Description: FC<DescriptionProps> = ({setState}) => {
  return (
    <section className='description-container container' >
        <div className="description-container__buttons">
          <p className='description-container__buttons__text'>Вид перевозки</p>
            <button onClick={()=> setState("Авиа (самое быстрое)")}> Авиа (самое быстрое)</button>
            <button onClick={()=> setState("Прямое ЖД")}>Прямое ЖД</button>
            <button onClick={()=> setState("Контейнеры")}>Контейнеры</button>
            <button onClick={()=> setState("Автоперевозки")}>Автоперевозки</button>
        </div>
        <div className="description-container__countries">
          <h3>Доступные страны</h3>
            <p>Россия</p>
            <p>Казахстан</p>
            <p>Беларусь</p>
            <p>Узбекистан</p>
        </div>
    </section>
  )
}

export default Description