import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    
    return <div>
            <div className="slideContent">
                <div className="slideContent__title"><span>Co to je viditelné spektrum?</span></div>
                <div className="slideContent__text">
                    <ul>
                        <li><span>Viditelné spektrum neboli viditelné světlo je rozsah elektromagnetických vln, které jsou pro lidské oko viditelné.</span></li>
                        <li><span>Viditelné spektrum je rozsah vln od 380 nm do 750 nm.</span></li>
                        <li><span>Nebo od 780 THz do 380 THz.</span></li>
                        <br />
                        <li><span>UltraFialové záření je pro lidské oko neviditelné.</span></li>
                        <li><span>Před tímto záření nás chrání ozonová vrstva.</span></li>
                        <li><span>Je to protože ultrafialové záření je škodlivé pro lidské zdraví.</span></li>
                        <br />
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