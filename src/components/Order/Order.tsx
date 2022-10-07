import React, { FC, useState } from 'react'
import { Interface } from 'readline'
import arrow from "../assets/images/Rules/arrow.svg"
import './Order.scss'
import {BsArrowLeftShort} from "react-icons/bs"

interface OrderProps {
    setState: React.Dispatch<React.SetStateAction<string>>
}

const Order : FC<OrderProps> = ({setState}) => {

    const [name, setName] = useState<string | undefined>("");
    const [email, setEmail] = useState<string | undefined>("");
    const [telegram, setTg] = useState<string | undefined>("");
    const [company, setCompany] = useState<string | undefined>("");
    const [descr, setDescr] = useState<string | undefined>("");

    let tg = {
        token: "5725567041:AAGRSVQWgjq6u3dBGOC753HxHEj0srtUyF0", // Your bot's token that got from @BotFather
        chat_id: "-606535238" // The user's(that you want to send a message) telegram chat id
    }

    function sendMessage() {
        let message = `имя: ${name}, емейл: ${email}, тг: ${telegram}, кампания: ${company}, О запросе: ${descr}`
        const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${message}`; // The url to request
        const xht = new XMLHttpRequest();
        xht.open("GET", url);
        xht.send();
    }

  return (
    <div className='order-container container'>
         <button className="arrow" onClick={() => setState("")}>
          <BsArrowLeftShort  style={{color: "white"}}/>
        </button>
        <h2>ZUO</h2>
        <div className="order-container__text">
            <h3>Получить коммерческое предложение</h3>
            <p>Наши менеджеры свяжутся с вами в течении рабочего дня</p>
        </div>
        <form action="">
            <div>
                <input type="text" onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder='Имя и Фамилия' required/>
                <input type="text" onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder='Email' required/>
                <input type="text" onChange={(e) => setTg(e.target.value)} id="telegram" name="telegram" placeholder='Telegram' required/>
                <input type="text" onChange={(e) => setCompany(e.target.value)} id="Компания" name="Компания" placeholder='Компания' required/>
                <textarea onChange={(e) => setDescr(e.target.value)} id="Подробнее про Ваш запрос" name="Подробнее про Ваш запрос" placeholder='Подробнее про Ваш запрос' required/>
            </div>
            <a className='button' onClick={sendMessage} href="https://t.me/teterin323">Отправить заявку</a>
            <p className="footer-container__copyright">上海市金山工业区广业路585号1幢328室 ， Room 328, 
        Building 1, No.585 Guangye Road, Jinshan Industrial Zone, 
        Shangha</p>
        </form>
    </div>
  )
}

export default Order