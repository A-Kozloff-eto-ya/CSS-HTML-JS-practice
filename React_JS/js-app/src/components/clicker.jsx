import React from 'react';
import {useState} from "react";

const Counter = () => {

    const [clicks, setClicks] = useState(0)
    const [gain, setGain] = useState(1)
    const [money, setMoney] = useState(100)

    // Копить клики
    function getClicks() {

        setClicks(clicks + gain)
    }
    // Улучшить клики
    function getGainClick1() {
        if (money >= 10) {
            setGain(gain + 1)
            setMoney(money - 10)
        }
    }

    function getGainClick10() {
        if (money >= 10) {
            setGain(gain + 10)
            setMoney(money - 90)
        }
    }

    function getGainClick100() {
        if (money >= 10) {
            setGain(gain + 100)
            setMoney(money - 900)
        }
    }
// Продать клики
    function sellClicks100() {
        if (clicks >= 100) {
            setMoney(money + 10)
            setClicks(clicks - 100)
        }
    }

    function sellClicks1000() {
        if (clicks >= 1000) {
            setMoney(money + 100)
            setClicks(clicks - 1000)
        }
    }

    return (
        <div>
            <h1 className={"tablo"}> ТВОИ КЛИКИ:{clicks}!!!</h1>
            <button className={"getClicksButton"} onClick={getClicks}>ЖМИ НА МЕНЯ!!!</button>
                <br/>
                <h2>СИЛА ТВОЕГО КЛИКА:{gain}!!!</h2>
                <button className={"gainClicksButton1"} onClick={getGainClick1}>+1 КЛИК ЗА 10 ДЕНЕГ!!!</button>
                <button className={"gainClicksButton10"} onClick={getGainClick10}>+10 КЛИКОВ ЗА 90 ДЕНЕГ!!!</button>
                <button className={"gainClicksButton100"} onClick={getGainClick100}>+100 КЛИКОВ ЗА 900 ДЕНЕГ!!!</button>
                    <h2 className={"moneyTab"}>ТВОИ ДЕНЬГИ: {money}</h2>
                    <h2 className={"getMoney"}>ЗАРАБОТАТЬ ДЕНЬГИ!!!</h2>
                    <button className={"sellClicks100"} onClick={sellClicks100}>ПРОДАТЬ 100 КЛИКОВ!!!</button>
                    <button className={"sellClicks1000"} onClick={sellClicks1000}>ПРОДАТЬ 1000 КЛИКОВ!!!</button>
        </div>
    );
};

export default Counter;