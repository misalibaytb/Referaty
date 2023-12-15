import React, { useEffect, useState } from "react";
import ReferenceSpanekImg from "../assets/image/Reference/spanek.png";
import ReferenceViditelneSvetloImg from "../assets/image/Reference/viditelne-svetlo.png";
import ReferenceJohnLennonImg from "../assets/image/Reference/john-lennon.png";
import ReferenceDiamantImg from "../assets/image/Reference/diamant.png";
import ReferenceUFOImg from "../assets/image/Reference/ufo.png";
import ReferenceOsvetimImg from "../assets/image/Reference/osvetim.png";
import ReferenceFXSaldaImg from "../assets/image/Reference/fxsalda.jpg";
import ReferenceTsunamiImg from "../assets/image/Reference/tsunami.jpg";
import ReferenceCerneDiryImg from "../assets/image/Reference/cerna-dira.jpg";
import { Redirect } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function App() {
    const [redirectt, setRedirectt] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState("");
    const gotoReference = (Reference) => {
        const references = document.getElementById("References");
        references.style.opacity = 0;
        setTimeout(() => {
            setRedirectUrl("/reference/" + Reference);
            setRedirectt(true);
        }, 1000);
    };
    const synt = window.speechSynthesis;
    const syntex = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "cs";
        speech.rate = 1;
        speech.volume = 1;
        speech.pitch = 1;
        synt.speak(speech);
    }
    const commands = [
        {
            command: 'Otevři *',
            callback: (redirect) => {
                const redirects = {
                    "spánek": "spanek",
                    "viditelné světlo": "viditelne-svetlo",
                    "john lennon": "john-lennon",
                    "diamant": "diamant",
                    "ufo": "ufo",
                    "osvětim": "osvetim",
                    "fx": "frantisek-xaver-salda",
                    "tsunami": "tsunami",
                    "černé díry": "cerne-diry",
                }
                console.log(redirects);
                console.log("Otevírám prezentaci s názvem " + redirect);
                syntex("Otevírám prezentaci s názvem " + redirect);
                setTimeout(() => {
                    gotoReference(redirects[redirect.toLowerCase()]);
                }, 1000);
            }
        },
        {
            command: 'reset',
            callback: () => window.location.reload()
        }
    ]
    const { transcript, resetTranscript } = useSpeechRecognition({ commands })
    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true, language: "cs", interimResults: true, })
    }, []);

    
    return <div>

        {redirectt === true ? <Redirect to={redirectUrl} /> : <></>}
        <div className="References" id="References">
            <div className="Reference" onClick={() => gotoReference("spanek")} >
                <div className="ReferenceTitle">
                    <h1>Spánek</h1>
                </div>
                <img src={ReferenceSpanekImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>author: Michal Líbal & Antonín Šulc</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("viditelne-svetlo")}>
                <div className="ReferenceTitle">
                    <h1>Viditelné Světlo</h1>
                </div>
                <img src={ReferenceViditelneSvetloImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>author: Michal Líbal</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("john-lennon")}>
                <div className="ReferenceTitle">
                    <h1>John Lennon</h1>
                </div>
                <img src={ReferenceJohnLennonImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>author: Michal Líbal & Radim Halama</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("diamant")}>
                <div className="ReferenceTitle">
                    <h1>Diamant</h1>
                </div>
                <img src={ReferenceDiamantImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>author: Michal Líbal</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("ufo")}>
                <div className="ReferenceTitle">
                    <h1>UFO</h1>
                </div>
                <img src={ReferenceUFOImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>author: Michal Líbal</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("osvetim")}>
                <div className="ReferenceTitle">
                    <h1>Osvětim</h1>
                </div>
                <img src={ReferenceOsvetimImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>author: Michal Líbal</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("frantisek-xaver-salda")}>
                <div className="ReferenceTitle">
                    <h1>F. X. Šalda</h1>
                </div>
                <img src={ReferenceFXSaldaImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>author: Michal Líbal</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("tsunami")}>
                <div className="ReferenceTitle">
                    <h1>Tsunami</h1>
                </div>
                <img src={ReferenceTsunamiImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>author: Michal Líbal</p>
                </div>
            </div>
            <div className="Reference" onClick={() => gotoReference("cerne-diry")}>
                <div className="ReferenceTitle">
                    <h1>Černé díry</h1>
                </div>
                <img src={ReferenceCerneDiryImg} alt="Reference Picture" className="ReferencePicture" />
                <div className="ReferenceAuthor">
                    <p>author: Michal Líbal</p>
                </div>
            </div>
        </div>
        <style>{`
            .References {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
            }
            .Reference {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: 300px;
                height: 300px;
                margin: 10px;
                border: 1px solid black;
                cursor: pointer;
                margin-left: 30px;
                margin-right: 30px;
            }
            .Reference:hover {
                transform: scale(1.1);
            }
            .ReferenceTitle {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: 100%;
                height: 50px;
                border: 1px solid black;
            }
            .ReferencePicture {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: auto;
                height: 175px;
                border: 1px solid black;
            }
            .ReferenceDescription {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: 100%;
                height: 50px;
                border: 1px solid black;
            }
            .ReferenceAuthor {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: 100%;
                height: 50px;
                border: 1px solid black;
            }
        `}</style>
    </div>;
}