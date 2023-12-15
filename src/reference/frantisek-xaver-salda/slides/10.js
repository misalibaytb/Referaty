import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Citace:</span></div>
            <div className="slideContent__text">
                <ul>
                    <li>Přispěvatelé Wikipedie, František Xaver Šalda [online], Wikipedie: Otevřená encyklopedie, c2023, Datum poslední revize 25. 11. 2023, 16:56 UTC, [citováno 30. 11. 2023] <a href="https://cs.wikipedia.org/w/index.php?title=Franti%C5%A1ek_Xaver_%C5%A0alda&oldid=23408941">https://cs.wikipedia.org/w/index.php?title=Franti%C5%A1ek_Xaver_%C5%A0alda&oldid=23408941</a></li>
                    <li>Fdb.cz. František Xaver Šalda. 2023, roč. 2023, č. 2023, s. 1.</li>
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