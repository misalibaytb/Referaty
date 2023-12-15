import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    
    return <div>
            <div className="slideContent">
                <div className="slideContent__title"><span>Co to je spánková deprivace?</span></div>
                <div className="slideContent__text">
                    <p><span>Spánková deprivace je stav, kdy je člověk vystaven dlouhodobému nedostatku spánku.</span></p>
                    <p><span>Následky spánkové deprivace:</span></p>
                    <ul>
                        <li><span>Zhoršení soustředění a paměti </span></li>
                        <li><span>Zhoršení schopnosti řešit problémy, učit se a pracovat </span></li>
                        <li><span>Zhoršení schopnosti reagovat na rychlé změny </span></li>
                        <li><span>Zhoršení halucinace</span></li>
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