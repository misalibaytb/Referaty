import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import SleepGraph from "../assets/grafSpánku.png";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Co by jsme měli udělat pro lepší spánek?</span></div>
            <div className="slideContent__text">
                <ol>
                    <li><span>Nejíst težké jídlo před spaním (Myšleno jako maso, těstoviny, cukr)</span></li>
                    <li><span>Hodinu před spaním nebýt na elektronice (Myšleno jako telefon, tablet, počítač)</span></li>
                    <li><span>Spát 8 - 10 hodin denně</span></li>
                    <li><span>Spát v tichém prostředí</span></li>
                    <li><span>Spát v pokojíčku, který je příjemně teplý</span></li>
                    <li><span>Mít nějaký stálý režím spánku (Třeba že každý den pujdeš spát v 21:00, protože vaše tělo se na to přizpůsobí)</span></li>
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