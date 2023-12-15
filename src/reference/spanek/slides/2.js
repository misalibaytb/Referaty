import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    
    return <div>
            <div className="slideContent">
                <div className="slideContent__title"><span>Proč musíme spát?</span></div>
                <div className="slideContent__text">
                    <p><span>Nooo jaksi to pořádně nevíme, ani samotní vědci.</span></p>
                    <p><span>Ale co víme:</span></p>
                    <ul>
                        <li><span>Spánek je hlavně důležitý pro Meltální čínosti než pro fyzické činosti</span></li>
                        <li><span>Při spánku dochází k zvíšenné regeneraci těla</span></li>
                        <li><span>Pří spánku dochází k odvádění metabolitů z těla</span></li>
                        <li><span>Prochází několik fází, které jsou důležité pro naše tělo</span></li>
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