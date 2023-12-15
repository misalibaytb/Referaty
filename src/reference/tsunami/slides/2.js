import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    
    return <div>
            <div className="slideContent">
                <div className="slideContent__title"><span>Tsunami: Ničivá Síla Oceánů</span></div>
                <div className="slideContent__text">
                    <ul>
                        <li><span>Tsunami, což v japonštině znamená "vlna v přístavu", představuje jedno z nejnebezpečnějších přírodních jevů.</span></li>
                            <li><span>Tato ničivá síla oceánů vzniká v důsledku rychlého pohybu tektonických desek, většinou pod hladinou oceánu.</span></li>
                            <li><span>Zde přináším podrobnější pohled na toto fascinující, avšak destruktivní, přírodní dění.</span></li>
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