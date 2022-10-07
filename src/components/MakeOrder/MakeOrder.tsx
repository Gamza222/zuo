import React, { FC } from 'react'
import "./MakeOrder.scss"

interface MakeOrderProps {
    setState: React.Dispatch<React.SetStateAction<string>>
  }
  

const MakeOrder: FC<MakeOrderProps> = ({setState}) => {
  return (
    <section className='makeorder-container container'>
        <div className='makeorder-container__content'>
            <p className="makeorder-container__content__text">{`Кстати, 做 (Zuò) на китайском означает “делать”`}</p>
            <div className="makeorder-container__content__interaction">
                <div className="makeorder-container__content__interaction__img">
                    <button onClick={() => setState("order")}>Узнать стоимость или запросить список товаров</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MakeOrder
