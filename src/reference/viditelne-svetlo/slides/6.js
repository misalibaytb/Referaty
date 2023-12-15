import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Citace:</span></div>
            <div className="slideContent__text">
                <p>Přispěvatelé Wikipedie, Elektromagnetické spektrum [online], Wikipedie: Otevřená encyklopedie, c2022, Datum poslední revize 30. 07. 2022, 14:52 UTC, [citováno 11. 04. 2023] Dostupné z portálu <a href="https://cs.wikipedia.org/w/index.php?title=Elektromagnetick%C3%A9_spektrum&oldid=21531730" target="_blank">Wikipedia</a></p>
                <p><span>Některé vlnové dělky a Hz doporadila umělá inteligence ChatGPT s ověřením informací z jiných zdrojů.</span></p>
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