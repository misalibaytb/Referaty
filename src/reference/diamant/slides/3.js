import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Jaké jsou využití diamantu?</span></div>
            <div className="slideContent__text">
            <p><span>Diamant lze využít jako:</span></p>
                <ol>
                    <li><span>Ozdoba - Ozdoba krytu na mobil, hodinek a dalších věcí</span></li>
                    <li><span>Klenotnictví - Lze použít to prstenů a náušnic</span></li>
                    <li><span>Řezání - Diamant se používá na řezání jiných kovů, protože je pevný a tvrdý.</span></li>
                </ol>
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