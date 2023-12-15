import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Videa na shlednutí</span></div>
            <div className="slideContent__text">
                <p><a href="https://www.youtube.com/watch?v=qQNG4j201ys&ab_channel=V%C4%9Bdeck%C3%A9Kladivo" target="_blank">Vědecké kladivo - Proč musíme spát? - Vědecké kladivo (4:51)</a></p>
                <p><a href="https://www.youtube.com/watch?v=aBf8PWHnUSA&ab_channel=JurajVie" target="_blank">JurajVie - Prečo musíme SPAŤ? (3:33)</a></p>
                <p><a href="https://www.youtube.com/watch?v=CfFggCmOOVk&ab_channel=JurajVie" target="_blank">JurajVie - Spánková Paralýza - Najhoršia nočná mora (4:30)</a></p>
                <p><a href="https://www.youtube.com/watch?v=lKDzR4o6dhA&t=145s&ab_channel=BeWise" target="_blank">BeWise - Majú sny nejaký význam? (11:45)</a></p>
                
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