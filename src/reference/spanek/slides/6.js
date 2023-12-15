import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import SpankovaParaliza from "../assets/spankovaParalíza.png";

export default () => {
    const imageClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("activeImg");
    };   

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Co to je spánková paralíza?</span></div>
            <div className="slideContent__text">
                <p><span>Spánková paralýza je stav, který se zdá jako že je to realita a že se to děje, ale je to jen sen.</span></p>
                <p><span>Při tomto stavu se člověk může cítit jako by byl v nějakém nebezpečí, nemůže se pohnout</span></p>
                <p><span>Vlastně je to stav kdy se člověk cítí jako kdyby byl ochrnutý a nemohl se pohnout,<br></br>jediné svaly které může ovládat je Bránice, oční víčka</span></p>
                <p><span>Spánková paralýza se může jevit jako takový horror</span></p>
            </div>
            <div className="slideContent__text__graph" onClick={imageClick}>
                    <img src={SpankovaParaliza} alt="Graf spánku" />
                </div>
        </div>
        <style>{`
                .slideContent {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .slideContent__title {
                    font-size: 3em;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                .slideContent__text {
                    font-size: 1.5em;
                    text-align: center;
                }
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `}</style>

    </div>;
}