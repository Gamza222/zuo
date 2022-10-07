import React, { FC } from 'react'
import "./Rules.scss"
import arrow from "../assets/images/Rules/arrow.svg"
import {BsArrowLeftShort} from "react-icons/bs"

interface RulespProps {
  title: string
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
  elements?: { title: string; text: string; }[],
  text?: string,
  contacts?: { title: string; href: string; }[]
}

const Rules: FC<RulespProps> = ({setState, elements, text, state, title, contacts}) => {
  return (
    <div className="rules-container container">
        <button className="arrow" onClick={() => setState("")}>
          <BsArrowLeftShort  />
        </button>
        <div 
          className="rules-container__bg" 
          />
        <div className="rules-container__head">
          <h2>ZUO</h2>
          <h3>{title}</h3>
        </div>
        {
          elements ? <div className="rules-container__content">
                        {elements.map((elem, key) => {
                          return (
                            <div key={key} className="rules-container__content__block">
                              <h4>{elem.title}</h4>
                              <p>{elem.text}</p>
                            </div>
                          )
                        })}
                      </div> 
                  : ""
        }
        {
          text ? <p className='rules-container__text'>{text}</p> : ""
        }
        {
          contacts ?  <div className="rules-container__contacts">
                        {
                          contacts.map((item, key) => {
                              return (
                                <a key={key} href={item.href}>{item.title}</a>
                              )
                            })
                        }
                      </div>
          : ""
        }
        <div className="rules-container__image">
                    <button onClick={() => setState("order")}>Получить коммерческое предложение</button>
                </div>
        <div className="rules-container__footer">
            <p>上海市金山工业区广业路585号1幢328室 ， Room 328, 
            Building 1, No.585 Guangye Road, Jinshan Industrial Zone, 
            Shangha</p>
        </div>

    </div>
  )
}

export default Rules