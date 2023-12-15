import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import SleepGraph from "../assets/grafSpánku.png";

export default () => {
    const imageClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("activeImg");
    };    
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>4. Fáze spánku</span></div>
            <div className="slideContent__text">
                <ol>
                    <li><span>Stádium 1 - Zpomalování srdečního a dýchacího rytmu</span></li>
                    <li><span>Stádium 2 - Zpomalení mozkové činnosti</span></li>
                    <li><span>Stádium 3 - dají se nám sny, které si po probuzení nepamatujeme</span></li>
                    <li><span>Stádium 4 (REM) - Rychlé pohyby očí, rychlé dýchání, rychlé srdeční tepy, aktivní mozek,<br></br> sny jsou v tomto stádiumu více realistické a pamatujeme si je po probuzení</span></li>
                </ol>
                {/*  graf spánku */}
                <div className="slideContent__text__graph" onClick={imageClick}>
                    <img src={SleepGraph} alt="Graf spánku" />
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
                    .slideContent__text ol {
                        display: inline-block;
                        text-align: left;
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





            </div>
        </div>
    </div>;
}