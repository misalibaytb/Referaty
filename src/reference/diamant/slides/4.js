import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    const imageClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("activeImg");
    };    
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Lze rozřezat diamant?</span></div>
            <div className="slideContent__text">
                    <p><span>Ano diamant lze rozřezat pomocí vody</span></p>
                    <p><span>Na to aby jsme mohli rozřezat diamant potřebujeme:</span></p>
                <ol>
                    <li><span>Průměr trysky: 0,2 mm</span></li>
                    <li><span>Tlak vody: 40 000 psi ( pascaly se přepočítávají na Pa, kde 1 psi ≈ 6894,76 Pa )</span></li>
                </ol>
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