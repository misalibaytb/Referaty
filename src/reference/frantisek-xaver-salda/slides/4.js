import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>3: Multitalent Šaldy</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Psaní románů, básní, dramat</span></li>
                    <li><span>Založení časopisu "Šaldův zápisník" v roce 1928</span></li>
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