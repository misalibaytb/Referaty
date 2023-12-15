import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    const imageClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("activeImg");
    };   

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Proč jsme je ještě nepodkali?</span></div>
            <div className="slideContent__text">
                <p><span>Je tu několik možnosti:</span></p>
                <ul>
                    <li><span className="revealClick">Alternativa 1: Možná jsou všude okolo nás a jsme moc primitivní<br/> aby jsme si jich všimli.</span></li>
                    <li><span className="revealClick">Alternativa 2: Jiné civilizace nepotřebují tak zvaně "vystrkovat růžky" a v klidu si žijou</span></li>
                    <li><span className="revealClick">Alternativa 3: Vyspělé Civilizace někde jsou a asi si uvědomují že není nejlepší nápad vysílat rádiové signáli</span></li>
                    <li><span className="revealClick">Alternativa 4: Je jedna super civilizace která níčí všechny ostatní civilizace</span></li>
                    <li><span className="revealClick">Alternativa 5: Žijeme v tiché části vesmíru či galaxie</span></li>
                    <li><span className="revealClick">Alternativa 6: Prostě žijou mezi námi a nedávají to najevo</span></li>
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