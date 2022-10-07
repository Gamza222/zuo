import React, {useEffect, useState} from 'react';
import Description from './components/Description/Description';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MakeOrder from './components/MakeOrder/MakeOrder';
import Order from './components/Order/Order';
import Rules from './components/Rules/Rules';
import './index.scss';
import {text} from './rules'
import splitbee from '@splitbee/web';

splitbee.init();

function App() {
  useEffect(() => {
    document.title = "zuo";
  })
  const [state, setState] = useState<string>("");
  return (
    <>
      {
        state === "Авиа (самое быстрое)" ? <Rules setState={setState} state={state} elements={text.avia.elements} title={text.avia.title} /> 
        : state === "Прямое ЖД" ? <Rules setState={setState} state={state} elements={text["Прямое ЖД"].elements} title={text["Прямое ЖД"].title} /> 
        : state === "Контейнеры" ? <Rules setState={setState} state={state} elements={text["Контейнеры"].elements} title={text["Контейнеры"].title} /> 
        : state === "Автоперевозки" ?  <Rules setState={setState} state={state} elements={text["Автоперевозки"].elements} title={text["Автоперевозки"].title} /> 
        : state === "order" ? <Order setState={setState} />
        :
        <>
          <Header setState={setState}/>
          <MakeOrder setState={setState}/>
          <Description state={state} setState={setState}/>
          <Footer state={state} setState={setState} />
        </>

      }
    </>
  );
}

export default App;
