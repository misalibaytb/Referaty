import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>5: Nejznámější Díla Šaldy - Kritické Práce</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Boje o zítřek (1905)</span></li>
                    <li><span>Časové a nadčasové</span></li>
                    <li><span>Duše a dílo (1913)</span></li>
                    <li><span>Kritické glosy k nové poezii české</span></li>
                    <li><span>O nejmladší poezii české (1928)</span></li>
                    <li><span>Studie literárně - historické a kritické</span></li>
                    <li><span>Syntetism v novém umění (1892)</span></li>
                    <li><span>Mácha snivec i buřič (1936)</span></li>
                    <li><span>O tzv. nesmrtelnosti díla básnického (1928)</span></li>
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

    </div>;
}