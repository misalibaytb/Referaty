import React, { useCallback, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Slide1 from "./slides/1.js";
import Slide2 from "./slides/2.js";
import Slide3 from "./slides/3.js";
import Slide4 from "./slides/4.js";
import Slide5 from "./slides/5.js";
import Slide6 from "./slides/6.js";
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
    ]);
    
    return <ReferenceUI slides={slides}/>;
}