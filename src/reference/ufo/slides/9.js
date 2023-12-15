import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import VoyagerMp3 from "../assets/voyager.mp3";

export default () => {
    const leftVoy = {
        one: 234369077, // 5.9.1977
        two: 240935477, // 20.8.1977
    }
    const speedVoy = {
        one: 17,
        two: 15,
    }
    const [voyager, setVoyager] = useState({
        one: "0",
        two: "0",
        oneLy: "0",
        twoLy: "0",
    });
    const jednotky = ["", "tis", "mil", "mld", "bil", "bld", "tril", "trl"]
    const convert = (num) => {
        let i = 0;
        while (num > 1000) {
            num /= 1000;
            i++;
        }
        return `${num} ${jednotky[i]}`;
    }
    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            const diffOne = now.getTime() / 1000 - leftVoy.one;
            const diffTwo = now.getTime() / 1000 - leftVoy.two;
            // make space after every 3 numbers
            setVoyager({
                one: (diffOne * speedVoy.one).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                two: (diffTwo * speedVoy.two).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                oneLy: (diffOne * speedVoy.one / 9.461e+12).toFixed(3),
                twoLy: (diffTwo * speedVoy.two / 9.461e+12).toFixed(3),
            });
        });
    }, []);

    const imageClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("activeImg");
    };   

    return <div>
        <div className="slideContent">
            <div className="slideContent__title"><span>Voyager 1 a 2</span></div>
            <div className="slideContent__text">
                <p> Voyager 1:  {voyager.one} km od Země (rychlost {speedVoy.one} km/s) neboli {voyager.oneLy} Světelných let</p>
                <p> Voyager 2:  {voyager.two} km od Země (rychlost {speedVoy.two} km/s) neboli {voyager.twoLy} Světelných let</p>
                <p><span>Proč budu tady mluvit o Voyageru?</span></p>
                <p><span className="revealClick">Protože voyager 1 a 2 jsou první umělé objekty které mají na sobě zlatou desku "Golden Record"<br/> s informacemi o lidstvu a naší planetě a opouští naší sluneční soustavu.</span></p>
                <p><span>Golden Record obsahuje nahrávky:</span></p>
                <ul>
                    <li><span className="revealClick">Zvířat</span></li>
                    <li><span className="revealClick">Sopek</span></li>
                    <li><span className="revealClick">Lidského srdce</span></li>
                    <li><span className="revealClick">Smíchu</span></li>
                    <li><span className="revealClick">27 Skladeb</span></li>
                </ul>
                <p><span>Golden Record obsahuje také mapu naší sluneční soustavy a pokyny jak se dostat na naší planetu.</span></p>
                <p><span>Jedna z písní: </span></p>
                <p><span>Willie Johnson - Dark Was The Night, Cold Was The Ground</span></p>
                <audio controls>
                    <source src={VoyagerMp3} type="audio/mpeg"/>
                </audio>
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
                .slideContent__text__graph {
                    width: 30%;
                    height: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(50%);
                }
                .slideContent__text__graph img {
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
                .slideContent__text__graph img.activeImg {
                    transform: translate(50%, -50%) scale(2);
                }
            `}</style>

    </div>;
}