import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Ničivá Síla Tsunami</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Tsunami mohou mít devastující dopady na pobřežní oblasti. </span></li>
                    <li><span>Tyto vlny mohou dosahovat výšek několika metrů a proniknout až několik kilometrů do vnitrozemí. </span></li>
                    <li><span>Přináší s sebou ničivou sílu, která může způsobit ztráty na životech, zničení infrastruktury a trvalé změny v krajině.</span></li>
                </ul>
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
            `}</style>

    </div>;
}