import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default () => {
    
    return <div>
            <div className="slideContent">
                <div className="slideContent__title"><span>I. Dětství a rané roky</span></div>
                <div className="slideContent__text">
                    <ul>
                        <li><span>Johnův původ a rodinné pozadí: John Winston Lennon se narodil 9. října 1940 v Liverpoolu, Anglie. <br/>
                            Jeho otec Alfred byl námořník a později prodavač zeleniny, matka Julia byla zpěvačka a pianistka. <br/>
                            John měl starší sestru Mimi, která se stala jeho opatrovnicí po matčině smrti.
                        </span></li>
                        <li><span>První hudební zkušenosti a setkání s Paulem McCartneym: John se zajímal o hudbu od dětství a začal hrát na kytaru a zpívat.<br/>
                            Na střední škole se seznámil s Paulem McCartneym a později se připojili George Harrison a Ringo Starr a vznikla skupina The Beatles.</span></li>
                        <li><span>Vznik skupiny The Beatles: The Beatles získali popularitu v Liverpoolu a postupně se prosazovali i v celé Británii. John Lennon byl hlavním skladatelem a zpěvákem skupiny a spolu s Paulem McCartneyem tvořili úspěšnou skladatelskou dvojici.</span></li>
                    </ul>
                </div>
            </div>
            <style>{`
                .slideContent {
                    width: 100vw;
                    height: 100vh;
                    max-width: 100vw;
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
                    font-size: 1em;
                    text-align: center;
                    display: inline-block;
                    width: 75vw;
                    max-width: 75vw;
                }
                .slideContent__text span {
                    display: block;
                    max-width: 100%;
                }
                .slideContent__text ul {
                    text-align: left;
                }
            `}</style>

    </div>;
}