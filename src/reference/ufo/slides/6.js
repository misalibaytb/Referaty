import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    const imageClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("activeImg");
    };   

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Kardašova škála</span></div>
            <div className="slideContent__text">
                <p><span>Tato škála představuje typy civilizace a řadí se tam podle toho kolik energie spotřebují.</span></p>
                <ul>
                    <li><span className="revealClick">Typ 1 - Civilizace, která spotřebuje veškerou energii na své planetě</span></li>
                    <li><span className="revealClick">Typ 2 - Civilizace, která spotřebuje veškerou energii ve své hvězdě</span></li>
                    <li><span className="revealClick">Typ 3 - Civilizace, která spotřebuje veškerou energii ve své galaxii</span></li>
                </ul>
                <p><span>Podle této škály jsme na stupnici 0,73</span></p>
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