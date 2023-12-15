import React, { useCallback, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Slide1 from "./slides/1.js";
import Slide2 from "./slides/2.js";
import Slide3 from "./slides/3.js";
import Slide4 from "./slides/4.js";
import Slide5 from "./slides/5.js";
import Slide6 from "./slides/6.js";
import Slide7 from "./slides/7.js";
import Slide8 from "./slides/8.js";
import Slide9 from "./slides/9.js";
import Slide10 from "./slides/10.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

import ReferenceUI from "../../pages/referenceUI.js";

export default () => {
    const [slides, setSlides] = useState([
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
        Slide6,
        Slide7,
        Slide8,
        Slide9,
        Slide10
        
    ]);
    
    return <ReferenceUI slides={slides}/>;
}