import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideTitle">Úvod</div>
            <div className="slideText">
                <p><span>Pracovali:</span></p>
                <ul>
                    <li><span>Michal Líbal ( Naprogramování a Informace )</span> </li>
                    <li><span>Antonín Šulc ( Informace a jejích zpracování )</span> </li>
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