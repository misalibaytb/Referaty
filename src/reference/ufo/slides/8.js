import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    const imageClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("activeImg");
    };   

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Velký Filter</span></div>
            <div className="slideContent__text">
                <p><span>Velký filter je paradox.</span></p>
                <p><span>Je to jaká si bariéra která nám může zabránit v tom abychom se vyvinuli do vyšších civilizací a nebo našli jiné civilizace.</span></p>
                <p><span>Jak by to s ním mohlo být?</span></p>
                <ul>
                    <li><span className="revealClick">Možná lidstvo je velmi vzácný případ a už jsme překonali velký filter</span></li>
                    <li><span className="revealClick">Možná překonání velkého filtru není tak vzácné ale jsme první kterým se to podařilo</span></li>
                    <li><span className="revealClick">Velký filter je ještě před námi</span></li>
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