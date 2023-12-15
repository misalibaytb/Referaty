import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Spektrum</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Viditelné světlo je rozsah elektromagnetických vln, které jsou pro lidské oko viditelné.</span></li>
                    <br />
                    <li><span>ALE je to jen malá část celého spektra.</span></li>
                    <br />
                    <li><span>V celém spektru je mnoho dalších vln, které jsou pro lidské oko neviditelné.</span></li>
                    <li><span>Jako je například infračervené světlo.</span></li>
                    <br />
                    <li><span>Seznam vlnových délek všech předmětů ve spektru:</span></li>
                    <ol>
                        <li><span>Gamma: 0,01 nm</span></li>
                        <li><span>Rentgenové záření: 0,01 nm - 10 nm</span></li>
                        <li><span>UltraFialové světlo: 10 nm - 400 nm</span></li>
                        <li><span>Viditelné světlo: 400 nm - 700 nm</span></li>
                        <li><span>InfraČervené světlo: 700 nm - 1 mm</span></li>
                        <li><span>Mikrovlny: 1 cm - 1 cm</span></li>
                        <li><span>Radiovlny: 1 mm - 10 km</span></li>
                    </ol>

                </ul>
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
                        width: 35%;
                        height: 35%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        transform: translateX(50%) scale(0.5);
                    }
                    .slideContent__text__graph img {
                        width: 100%;
                        height: 100%;
                    }
                `}</style>





            </div>
        </div>
    </div>;
}