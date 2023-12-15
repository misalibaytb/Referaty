import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    const imageClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("activeImg");
    };    
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Oficiální Zpráva Z Ameriky</span></div>
            <div className="slideContent__text">
                    <p><span>V tomto roce bylo Americkou vládou vydáno oficiální prohlášení, že UFO existuje.</span></p>
                    <p><a href="https://www.seznamzpravy.cz/clanek/zahranicni-mimozemstane-existuji-a-vlada-ma-dukazy-jaky-byl-cil-slyseni-o-ufo-234722">seznamzpravy.cz</a></p>
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