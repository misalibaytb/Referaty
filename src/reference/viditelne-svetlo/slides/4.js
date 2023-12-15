import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import spektrum from "../assets/spektrum.png";

export default () => {
    const imageClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("activeImg");
    };    
    return <div>
        <div className="slideContent">
            <div className="slideContent__title">Spektrum: </div>
            <div className="slideContent__text">
                <div className="slideContent__text__graph" onClick={imageClick}>
                    <img src={spektrum} alt="Graf spánku" />
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
                        min-width: 45vw;
                        min-height: 45vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
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