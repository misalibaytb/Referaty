import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Děkuji za pozornost!</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>K tomuto referátu jsem využil následující zdroje:</span></li>
                    <br />
                    <ul>
                        <li><p><a href="https://cs.wikipedia.org/wiki/Auschwitz" target="_blank">Wikipedie - Auschwitz</a></p></li>
                        <li><p><a href="https://cs.wikipedia.org/wiki/Osv%C4%9Btim" target="_blank">Wikipedie - Osvětim</a></p></li>
                        <li><p><a href="https://www.holocaust.cz/dejiny/koncentracni-tabory-a-ghetta/koncentracni-tabory/osvetim/" target="_blank">Holocaust.cz - Osvětim</a></p></li>
                        <li><p><a href="https://www.osvetim.info/" target="_blank">Osvetim.info</a></p></li>
                    </ul>

                </ul >
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





            </div >
        </div >
    </div >;
}