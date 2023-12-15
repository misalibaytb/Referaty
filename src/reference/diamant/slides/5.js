import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    
    return <div>
            <div className="slideContent">
                <div className="slideContent__title"><span>Závěrečné informace</span></div>
                <div className="slideContent__text">
                    <ul>
                        <li><span>Diamant patří do skupiny minerálů nazývaných "složené minerály" (anglicky "native elements") </span></li>
                        <li><span>Diamant je tvořen pouze jedním prvkem, a to uhlíkem. </span></li>
                        <li><span>Na ostatních planetách je mnohem vzácnejší strom než diamant. </span></li>
                        <li><span>Struktura diamantu je velmi specifická a zásadní pro jeho jedinečné vlastnosti. Diamant má krystalovou strukturu typu tětraedr (tetraedrickou), což znamená, že každý uhlíkový atom v diamantu je vázán čtyřmi jinými uhlíkovými atomy. Tyto čtyři atomy jsou uspořádány do tetraedra (čtyřstěnu), což vytváří velmi pevnou a stabilní krystalovou strukturu. </span></li>
                        <li><span>Diamant je nejtvrdší známý přírodní materiál. </span></li>
                        <li><span>Již po staletí se používá ve šperkařství, což ho činí jedním z nejoblíbenějších drahých kamenů na světě. </span></li>
                        <li><span>Diamanty se těží z hlubin Země, kde vznikají za extrémních podmínek vysokého tlaku a teploty. Hlavními producenty diamantů jsou země jako Jihoafrická republika, Botswana, Rusko a další. </span></li>
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