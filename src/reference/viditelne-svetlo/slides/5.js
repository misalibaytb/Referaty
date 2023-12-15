import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Délky barev ve viditelném spektru</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Barva	Vlnová délka	Frekvence</span></li>
                    <li><span>červená	~ 625 až 750 nm	~ 480 až 405 THz</span></li>
                    <li><span>oranžová	~ 590 až 625 nm	~ 510 až 480 THz</span></li>
                    <li><span>žlutá	~ 565 až 590 nm	~ 530 až 510 THz</span></li>
                    <li><span>zelená	~ 520 až 565 nm	~ 580 až 530 THz</span></li>
                    <li><span>azurová	~ 500 až 520 nm	~ 600 až 580 THz</span></li>
                    <li><span>modrá	~ 430 až 500 nm	~ 700 až 600 THz</span></li>
                    <li><span>fialová	~ 380 až 430 nm	~ 790 až 700 THz</span></li>
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