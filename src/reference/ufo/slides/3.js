import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Ale co když je UFO jen zkatka?</span></div>
            <div className="slideContent__text">
            <p><span>Ano UFO je pouhá zkratka:</span></p>
                <ul>
                    <li><span>Tato zkratka znamená </span><strong>U</strong><span className="revealClick">nidentified </span><strong>F</strong><span className="revealClick">lying </span><strong>O</strong><span className="revealClick">bject</span></li>
                    <li><span>V našem překladu "Neidentifikovaný Letájící Objekt"</span></li>
                </ul>
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
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `}</style>





            </div>
        </div>
    </div>;
}