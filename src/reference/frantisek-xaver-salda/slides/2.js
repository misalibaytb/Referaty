import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    
    return <div>
            <div className="slideContent">
                <div className="slideContent__title"><span>1: Úvod a Mládí</span></div>
                <div className="slideContent__text">
                    <ul>
                        <li><span>František Xaver Šalda (1867-1937).</span></li>
                        <li><span>Narodil se 22. prosince 1867.</span></li>
                        <li><span>Mladý, literárně činný, přesto na právnické fakultě</span></li>
                        <li><span>Odešel z univerzity a stal se nezávislým spisovatelem</span></li>
                        <li><span>Vůdčí osobnost české "literární revoluce" v 90. letech 19. století</span></li>
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