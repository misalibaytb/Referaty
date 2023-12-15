import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    
    return <div>
            <div className="slideContent">
                <div className="slideContent__title"><span>Fermiho Paradox</span></div>
                <div className="slideContent__text">
                    <ul>
                        <li><span>Fermiho Paradox Se zabívá otázkou: Kde všichni jsou?</span></li>
                        <li><span>A proč to je Paradox?</span></li>
                        <li><span className="revealClick">Protože vesmír je obrovský a je tu obrovská šance že někde existuje mimozemská civilizace</span></li>
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
            `}</style>

    </div>;
}