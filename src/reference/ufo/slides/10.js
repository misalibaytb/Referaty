import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import VoyagerMp3 from "../assets/voyager.mp3";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Děkuji za pozornost</span></div>
            <div className="slideContent__text">
                <span>Zdroje:</span>
                <ul>
                    <li><a href="https://cs.wikipedia.org/wiki/UFO" target="_blank">Wikipedia - UFO</a></li>
                    <li><a href="https://cs.wikipedia.org/wiki/Fermiho_paradox" target="_blank">Wikipedia - Fermiho Paradox</a></li>
                    <li><a href="https://cs.wikipedia.org/wiki/Drakeova_rovnice" target="_blank">Wikipedia - Drakeova rovnice</a></li>
                    <li><a href="https://cs.wikipedia.org/wiki/Voyager" target="_blank">Wikipedia - Voyager</a></li>
                    <li><a href="https://www.youtube.com/watch?v=glkRnKAfIQg" target="_blank">Jirka vysvětluje věci - Fermiho paradox: Jsme ve vesmíru sami?</a></li>
                    <li><a href="https://www.youtube.com/watch?v=S4lfLdg3ShQ" target="_blank">JurajVie - Existujú mimozemšťania?</a></li>
                    <li><a href="https://www.youtube.com/watch?v=Tk9ZrpQK99U" target="_blank">JurajVie - Kde sú mimozemšťania?</a></li>
                    <li><a href="https://www.youtube.com/watch?v=V8AuYmID4wc" target="_blank">Voyager's Golden Record -Dark was the night-Blind Willie Johnson</a></li>

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