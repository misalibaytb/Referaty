import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    
    return <div>
            <div className="slideContent">
                <div className="slideContent__title"><span>Jaké jsou vlastnosti diamantu?</span></div>
                <div className="slideContent__text">
                    <p><span>Vlastnosti diamantu jsou:</span></p>
                    <ul>
                        <li><span>Vedení tepla</span></li>
                        <li><span>Tvrdost</span></li>
                        <li><span>Leskost a Líbivost</span></li>
                        <li><span>Barva</span></li>
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