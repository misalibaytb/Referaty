import React, { useCallback, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const keys = {
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    "f11": 122,
    "esc": 27,
};

export default ({
    slides
}) => {
    const [slide, setSlide] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);
    const [fullscreenHide, setFullscreenHide] = useState(0); // 0 = show, 1 = hide, 2 = hidden
    const [dismissFullscreen, setDismissFullscreen] = useState(false);
    const [Syntention, setSyntention] = useState(false);
    async function query(data) {
        return new Promise(async (resolve, reject) => {
            const response = await fetch(
                "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta",
                {
                    headers: { Authorization: "Bearer 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", "Content-Type": "application/json" },
                    method: "POST",
                    body: JSON.stringify(data),
                }
            ).catch((error) => {
                reject(error);
            });
            console.log(response);
            const result = await response.json();
            resolve(result);
        });
    }
    const names = {
        male: "Karel",
        female: "Jana"
    }
    const [name, setName] = useState(names.male)
    var synt = window.speechSynthesis
    const syntex = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        // import Google 
        speech.lang = "cs";
        // speech.voice
        speech.rate = 1;
        speech.volume = 1;
        speech.pitch = 1;
        synt.speak(speech);
    }
    const commands = [
        {
            command: 'co jsi',
            callback: () => syntex("testovní příkaz"),
        },
        {
            command: 'jsi *',
            callback: (gender) => {
                const translate = {
                    "muž": names.male,
                    "žena": names.female
                }
                setName(translate[gender])
                syntex("Od teď moje identita byla změněna na " + gender)

            }
        },
        {
            command: 'řekni *',
            callback: (text) => {
                syntex(text)

            }
        },
        {
            command: 'nechci použít celou obrazovku',
            callback: () => setDismissFullscreen(true),
        },
        {
            command: 'prosím mluv',
            callback: () => {
                console.log("použí mluvení")
                setSyntention(true);
                setName((namer) => {
                    syntex("Ahoj já se jmenuji " + namer + " a budu prezentovat tento referát")
                    return namer
                })
            }
        },
        {
            command: 'zruš mluvení',
            callback: () => {
                setSyntention(false);
                syntex("Přestávám prezentovat tento referát. Přenechávám ti slovo")
            }
        },

        {
            command: ['předchozí', 'zpět'],
            callback: () => setSlide(currentSlide => {
                if (currentSlide > 0) {
                    return currentSlide - 1;
                } else {
                    return currentSlide;
                }
            }),
        },
        {
            command: ['další', 'dále'],
            callback: () => setSlide(currentSlide => {
                if (currentSlide < slides.length - 1) {
                    return currentSlide + 1;
                } else {
                    return currentSlide;
                }
            }),
        },
        {
            command: 'prosím řekni pravidla',
            callback: () => {
                const pravidla = `
                Dobrý den.
                Prosím vás aby jste byly po čas celé prezentace zticha a nepřerušovali mě.
                Pokud budete mít nějakou otázku, tak prosím počkejte až vás vyvolám.
                Pokud budete chtít něco říct, tak prosím počkejte až vás vyvolám.
                Upozorňuji že tato prezentace obsahuje zvukové příkazy, které můžete narušit svým hlasem.
                Děkuji za pochopení.
                `
                syntex(pravidla);
            }
        },
        {
            command: 'začátek',
            callback: () => setSlide(0),
        },
        {
            command: 'konec',
            callback: () => setSlide(slides.length - 1),
        },
        {
            command: 'zpět na úvod',
            callback: () => window.location.href = "/",
        },
        {
            command: 'použít celou obrazovku',
            callback: () => { document.body.requestFullscreen(); syntex("Celá obrazovka zapnuta") },
        },
        {
            command: 'vypnout zvukové příkazy',
            callback: () => { SpeechRecognition.stopListening(); syntex("Zvukové příkazy vypnuty") },
        },
        {
            command: 'otevři odkaz *',
            callback: (odkaz) => {
                syntex("Otevírám odkaz " + odkaz);
                window.open("http://" + odkaz, "_blank");
            }
        },
        {
            command: 'vyhledej *',
            callback: (vyhledat) => {
                syntex("Vyhledávám " + vyhledat);
                window.open("https://www.google.com/search?q=" + vyhledat, "_blank");
            }
        },
        {
            command: 'mám otázku *',
            callback: (otazka) => {
                syntex("Prosím počkej. Zeptám se chatGPT na odpověď na otázku " + otazka);
                // ask chatGPT
                console.log(otazka)

                query({ "inputs": otazka }).then(async (response) => {
                    if (response[0].error) return syntex("Nepodařilo se získat odpověď na otázku " + otazka);
                    console.log(JSON.stringify(response));
                    const answerr = response[0].generated_text.split("\n\n")
                    // remove first
                    answerr.shift();
                    var answer = answerr.join(" ");
                    answer = answer.split(". ").slice(0, 6).join(". ");
                    const res = await fetch("https://translate.michlip.eu/getTranslition?lang=cs&text=" + answer).catch((error) => { });
                    if (res === undefined) return syntex("Nepodařilo se přeložit odpověď na otázku " + otazka);
                    const resJson = await res.json();
                    if (resJson.success === false) return syntex("Nepodařilo se přeložit odpověď na otázku " + otazka + ". Chyba: " + resJson.text + ". Odpověď: " + answer);

                    syntex("Odpověď na otázku " + otazka + " je " + res.text);
                })
            }
        },
        {
            command: 'přejdi na * slide',
            callback: (slide) => {
                const dictonary = {
                    "první": 0,
                    "druhý": 1,
                    "třetí": 2,
                    "čtvrtý": 3,
                    "pátý": 4,
                    "šestý": 5,
                    "sedmý": 6,
                    "osmý": 7,
                    "devátý": 8,
                    "desátý": 9,
                    "jedenáctý": 10,
                    "dvanáctý": 11,
                    "třináctý": 12,
                    "čtrnáctý": 13,
                    "patnáctý": 14,
                    "šestnáctý": 15,
                    "sedmnáctý": 16,
                    "osmnáctý": 17,
                    "devatenáctý": 18,
                    "dvacátý": 19,
                    "dvacátý první": 20
                }
                const slideNumber = parseInt(dictonary[slide]);
                if (!isNaN(slideNumber)) {
                    setSlide(currentSlide => {
                        if (slideNumber < 0) {
                            return 0;
                        } else if (slideNumber >= slides.length) {
                            return slides.length - 1;
                        } else {
                            return slideNumber;
                        }
                    });
                } else alert("Nerozpoznal jsem číslo slide" + slide);
            },
        },
        {
            command: 'příkazy',
            callback: () => {
                syntex("Příkazy: " + commands.map(command => command.command).join(", "));
            }
        },
        {
            command: 'reset',
            callback: () => window.location.reload()
        }
    ]
    const {
        listening,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable

    } = useSpeechRecognition({ commands })
    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true, language: "cs", interimResults: true, })
        if (!browserSupportsSpeechRecognition) {
            alert("Váš prohlížeč nepodporuje rozpoznávání řeči. Použijte Google Chrome nebo Microsoft Edge");
        } else if (!isMicrophoneAvailable) {
            alert("Váš mikrofon není dostupný. Připojte mikrofon a zkuste to znovu");
        } else {
            SpeechRecognition.startListening({ continuous: true, language: "cs", interimResults: true, })
        }
        const url = window.location.href;
        const slideNumber = parseInt(url.split("/").pop());
        if (!isNaN(slideNumber)) {
            if (slideNumber > slides.length - 1) return;
            setSlide(slideNumber);
        }
        setFullscreen(document.fullscreenElement !== null);
        console.log(document.fullscreenElement, document.mozFullScreenElement, document.webkitFullscreenElement, document.msFullscreenElement)
    }, []);

    useEffect(() => {
        if (dismissFullscreen && fullscreenHide === 0) {
            setFullscreenHide(1);
            setTimeout(() => {
                setFullscreenHide(2);
            }, 1000);
        } else
            if (fullscreen && !dismissFullscreen && fullscreenHide === 0) {
                setFullscreenHide(1);
                setTimeout(() => {
                    setFullscreenHide(2);
                }, 1000);
            } else
                if (!fullscreen && !dismissFullscreen && fullscreenHide === 2) {
                    setFullscreenHide(1);
                    setTimeout(() => {
                        setFullscreenHide(0);
                    }, 100);
                }
    }, [fullscreen, dismissFullscreen]);

    const [currentRender, setCurrentRender] = useState([])
    const [showMenu, setShowMenu] = useState(false);
    let xMenu = setTimeout(() => {
        setShowMenu(false);
    }, 10000);
    window.addEventListener("mousemove", () => {
        setShowMenu(true);
        clearTimeout(xMenu);
        xMenu = setTimeout(() => {
            setShowMenu(false);
        }, 3000);
    });
    const gotoSlide = useCallback((slide) => {
        setSlide(currentSlide => {
            if (slide < 0) {
                return 0;
            } else if (slide >= slides.length) {
                return slides.length - 1;
            } else {
                return slide;
            }
        });
    }, [slides]);

    useEffect(() => {
        console.log(slide)
        const url = window.location.href;
        const slideNumber = parseInt(url.split("/").pop());
        if (!isNaN(slideNumber)) {
            const curl = url.split("/").slice(0, -1).join("/")
            window.history.replaceState({}, "", `${curl}${curl.endsWith("/") ? "" : "/"}${slide}`);
        } else {
            window.history.pushState({}, "", `${url}${url.endsWith("/") ? "" : "/"}${slide}`);
        }
        if (slide < 0) return setSlide(0);
        if (slide >= slides.length) return setSlide(slides.length - 1);
        const slidesDiv = document.getElementById("slideDiv");
        slidesDiv.style.marginLeft = `-${slide * 100}%`;
        // for every span make writing animation
        const slideDiv = document.getElementById(`slide${slide}`);
        // select all spans and a tags into one array
        const spans = slideDiv.querySelectorAll("span, a");
        const spanQueue = [];
        if (currentRender.includes(slide)) return;
        setCurrentRender([
            ...currentRender,
            slide
        ])
        if (Syntention) {
            const ends = ["?", ".", "!"]
            var allSpanText = "";
            spans.forEach(span => {
                if (ends.includes(span.innerHTML[span.innerHTML.length - 1])) {
                    allSpanText += span.innerHTML + " ";
                } else allSpanText += span.innerHTML + ". ";
            });
            syntex(allSpanText);
        }
        for (let i = 0; i < spans.length; i++) {
            const span = spans[i];
            const text = span.innerHTML.replaceAll(" ", " ").replaceAll("<br>", "¤");
            span.innerText = "";
            const spanQueueData = {
                spanDiv: span,
                text: text,
                index: 0
            }
            setTimeout(() => {
                spanQueue.push(spanQueueData);
            }, i * 100);
        }
        setTimeout(() => {
            const interval = setInterval(() => {
                if (spanQueue.length > 0) {
                    const spanQueueData = spanQueue[0];
                    if (spanQueueData.spanDiv.classList.contains("revealClick")) return;
                    spanQueueData.spanDiv.classList.add("spanWaiting");
                    if (spanQueueData.text[spanQueueData.index] === "¤") {
                        spanQueueData.spanDiv.innerHTML += "<br>";
                    } else spanQueueData.spanDiv.innerHTML += spanQueueData.text[spanQueueData.index];
                    spanQueueData.index++;
                    if (spanQueueData.index >= spanQueueData.text.length) {
                        spanQueueData.spanDiv.classList.remove("spanWaiting");
                        spanQueue.shift();
                        spanQueueData.spanDiv.innerHTML = spanQueueData.text.replaceAll("¤", "<br>").replaceAll(" ", " ");
                    }
                } else {
                    clearInterval(interval);
                }
            }, 75);
        }, 500);
    }, [slide]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const url = window.location.href;
            const slideNumber = parseInt(url.split("/").pop());
            let currentSlide = slideNumber === undefined || isNaN(slideNumber) || slideNumber === null ? 0 : slideNumber;
            if (currentSlide === undefined || isNaN(currentSlide) || currentSlide === null) setSlide(0);
            if (e.keyCode === keys.space) {
                const slideDiv = document.getElementById(`slide${slideNumber}`);
                const firstRevealSpan = slideDiv.querySelector(".revealClick");
                console.log(firstRevealSpan)
                if (firstRevealSpan !== null) {
                    firstRevealSpan.classList.remove("revealClick");
                    return;
                }
                if (currentSlide < slides.length - 1) {
                    setSlide(currentSlide + 1);
                }
            } else if (e.keyCode === keys.right) {
                if (currentSlide < slides.length - 1) {
                    setSlide(currentSlide + 1);
                }
            } if (e.keyCode === keys.left) {
                if (currentSlide > 0) {
                    setSlide(currentSlide - 1);
                }
            } else if (e.keyCode === keys.up) {
                setSlide(0);
            } else if (e.keyCode === keys.down) {
                setSlide(slides.length - 1);
            } else if (e.keyCode === keys["f11"]) {
                setFullscreen(document.fullscreenElement !== null);
            } else if (e.keyCode === keys.esc) {
                setFullscreen(false);
            }
        };
        document.body.addEventListener("fullscreenchange", () => {
            console.log("fullscreenchange")
            setFullscreen(document.fullscreenElement !== null);
        });
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("click", (e) => {
            if (e.target.tagName.toLowerCase() === "a" || e.target.tagName.toLowerCase() === "button" || e.target.classList.contains("MenuButton") || e.target.tagName.toLowerCase() === "p") return;
            const url = window.location.href;
            const slideNumber = parseInt(url.split("/").pop());
            let currentSlide = slideNumber === undefined || isNaN(slideNumber) || slideNumber === null ? 0 : slideNumber;
            const slideDiv = document.getElementById(`slide${slideNumber}`);
            const firstRevealSpan = slideDiv.querySelector(".revealClick");
            console.log(firstRevealSpan, e.target)
            if (firstRevealSpan !== null) {
                firstRevealSpan.classList.remove("revealClick");
                return;
            }
            if (currentSlide < slides.length - 1) {
                setSlide(currentSlide + 1);
            }
        });
        return () => {
            window.removeEventListener("keydown")
            window.removeEventListener("fullscreenchange")
        };
    }, []);

    return <div style={{ width: "100%", maxWidth: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
        {
            <div className="MenuButton" style={{
                position: "fixed", zIndex: 10000, width: "100%", height: "100%", top: 0, left: 0, backgroundColor: "rgba(0,0,0,0.75)", color: "white", display: fullscreenHide === 2 ? "none" : "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center", alignContent: "center", opacity: fullscreenHide !== 0 ? 0 : 1, transition: "opacity 1s", cursor: "unset"
            }}>
                <p>Použíjte klávesu F11 pro zobrazení prezentace na celou obrazovku</p>
                <p>Pro navigaci použíjte šipky, mezerník, nebo klikněte na tlačítka níže</p>

                <div className="MenuButton" onClick={() => {
                    document.body.requestFullscreen();
                }}>
                    <p>Použít fullscreen</p>
                </div>

                <div className="MenuButton" onClick={() => setDismissFullscreen(true)}>
                    <p>Nechci použít fullscreen</p>
                </div>
            </div>
        }
        <div className="Progress" style={{ width: `100%`, marginTop: showMenu ? "-45px" : "-50px" }}>
            <div className="ProgressFill" style={{ width: `${slide / (slides.length - 1) * 100}%`, height: "55px", backgroundColor: "lime" }}></div>
        </div>
        <div className="slideDiv" id="slideDiv" style={{ width: `${slides.length * 100}%`, maxWidth: `${slides.length * 100}%`, overflow: 'hidden' }}>
            {
                slides.map((Slide, index) => {
                    return <div className="slide" key={index} id={`slide${index}`}>
                        <Slide />
                    </div>;
                })
            }

        </div>
        <div className="RenderAd" style={{ position: "fixed", bottom: 0, right: 0, zIndex: 1000, opacity: showMenu ? 1 : 0.35, paddingRight: 15 }}>
            <p>Using refmis engine by @misaliba</p>
        </div>
        <div className="Menu" style={{ opacity: showMenu ? 1 : 0 }}>
            {listening === false ? <div className="MenuButton" onClick={() => SpeechRecognition.startListening({
                continuous: true, language: "cs",
                interimResults: true,
            })}>
                <p style={{ color: "red", fontWeight: "bold" }}>Zvukové Příkazy: Vypnuty</p>
            </div>
                : <div className="MenuButton" onClick={SpeechRecognition.stopListening}>
                    <p style={{ color: "green", fontWeight: "bold" }}>Zvukové Příkazy: Zapnuty</p>
                </div>
            }
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div className="MenuButton" onClick={() => window.location.href = "/"}>
                <p style={{ color: "red", fontWeight: "bold" }}>Zpět na úvod</p>
            </div>
            <div className="MenuButton" onClick={() => gotoSlide(0)}>
                <p>Začátek</p>
            </div>
            <div className="MenuButton" onClick={() => gotoSlide(slide - 1)}>
                <p>Předchozí</p>
            </div>
            <div className="MenuButton" onClick={() => gotoSlide(slide + 1)}>
                <p>Další</p>
            </div>
            <div className="MenuButton" onClick={() => gotoSlide(slides.length - 1)}>
                <p>Konec</p>
            </div>
        </div>
        <style>{`
            .Progress {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 55px;
                background-color: transparent;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                transition: margin-top 1s;
            }
            .ProgressFill {
                border-radius: 0 0 10px 10px;
                height: 55px;
                transition: width 1s;
            }
            .Menu {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 50px;
                background-color: #000000;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                transition: opacity 1s;
            }
            .MenuButton {
                min-width: 100px;
                height: 50px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                align-content: center;
                cursor: pointer;
            }
            .MenuButton p {
                margin: 0;
                padding: 0;
                font-size: 20px;
            }
            .slideDiv {
                min-width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: center;
                align-content: center;
                transition: margin-left 1s;
            }
            .slide {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;;
                justify-content: center;
                align-items: center;
                align-content: center;
            }
            .spanWaiting::after {
                content: "|";
                animation: blink 1s infinite;
            }
            @keyframes blink {
                50% {
                    opacity: 0;
                }
            }
            a {
                color: LightBlue;
                text-decoration: none;
            }
            a:hover {
                color: LightBlue;
                text-decoration: underline;
                transform: scale(1.3);
            }
        `}</style>
    </div>;
}