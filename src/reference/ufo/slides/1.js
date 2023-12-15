import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideTitle">UFO</div>
            <div className="slideText">
                <p><span>Pracovali:</span></p>
                <ul>
                    <li><span>Michal Líbal</span> </li>
                </ul>
                <p><span>Upozornění: Tato prezentace je více rozsáhlá a zasahuje do více oblastí, které jsou ať už jakým koliv způsobem spojeny s UFO.</span></p>
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
            .slideTitle {
                font-size: 3em;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .slideText {
                font-size: 1.5em;
                text-align: center;
            }
        `}</style>
    </div>;
}