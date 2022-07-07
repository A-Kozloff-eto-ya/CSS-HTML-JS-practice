import React from "react";
import {useState} from "react";

function App() {

    const [gain, setGain] = useState(1)
    const [clicks, setClicks] = useState(0)

    function getClicks() {
        setClicks(clicks + gain)
    }

    function gainClick1() {
        setGain(gain + 1)
    }

    function gainClick10() {
        setGain(gain + 10)
    }

    function gainClick100() {
        setGain(gain + 100)
    }
    return (

        <div>
            <h1> ТВОИ КЛИКИ:{clicks}!!! <br/> СИЛА ТВОЕГО КЛИКА:{gain}!!!</h1>
            <button className={"getClicksButton"} onClick={getClicks}>ЖМИ НА МЕНЯ!!!</button> <br/>
            <button className={"gainClicksButton"} onClick={gainClick1}>УСИЛЬ СВОЙ КЛИК НА 1!!!</button>
            <button className={"gainClicksButton"} onClick={gainClick10}>УСИЛЬ СВОЙ КЛИК НА 10!!!</button>
            <button className={"gainClicksButton"} onClick={gainClick100}>УСИЛЬ СВОЙ КЛИК НА 100!!!</button>
            <h2>Откуда у тебя столько столько свободного времени?</h2>
        </div>
    );
}

export default App;
