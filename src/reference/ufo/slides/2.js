import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    
    return <div>
            <div className="slideContent">
                <div className="slideContent__title"><span>Co si představit pod pojmem UFO?</span></div>
                <div className="slideContent__text">
                    <p><span>Když se řekne ufo co se vám vybaví?</span></p>
                    <ul>
                        <li><span className="revealClick">Létající talíř</span></li>
                        <li><span className="revealClick">Mimozemšťané</span></li>
                        <li><span className="revealClick">Scifi filmy</span></li>
                        <li><span className="revealClick">Neznámé létající objekty</span></li>
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
                    display: inline-block;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `}</style>

    </div>;
}