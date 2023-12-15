import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>II. Beatles - inovace a experimentování</span></div>
            <div className="slideContent__text">
                <ul>
                    <li><span>Revoluční hudba The Beatles: Skupina The Beatles přinesla revoluční změny do světa hudby v 60. letech. Jejich hudba byla plná nových nápadů, neobvyklých nástrojů a experimentování s různými žánry.</span></li>
                    <li><span>Johnova role v tvorbě a inovativní přístup: John Lennon hrál klíčovou roli v tvorbě skupiny The Beatles. Byl to on, kdo přišel s mnoha inovativními nápady, jak rozšířit hudební spektrum skupiny. Byl to také on, kdo přinesl do hudby nový, ostrý zvuk elektrické kytary.</span></li>
                    <li><span>Experimentování s novými zvuky a nástroji: Skupina The Beatles byla proslulá svými experimenty s novými zvuky a nástroji. John Lennon se stal známým pro svůj inovativní přístup k tvorbě hudby, například používáním různých efektů a neobvyklých nástrojů jako byly sitary nebo mellotron.</span></li>
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