import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/index.js';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ReferenceSpanek from './reference/spanek/index.js';
import ReferenceViditelneSvetlo from './reference/viditelne-svetlo/index.js';
import ReferenceJohnLennon from './reference/john-lennon/index.js';
import ReferenceDiamant from './reference/diamant/index.js';
import ReferenceOsvetim from './reference/osvetim/index.js';
import ReferenceUfo from './reference/ufo/index.js';
import ReferenceFrantisekXaverSalda from './reference/frantisek-xaver-salda/index.js';
import ReferenceTsunami from './reference/tsunami/index.js';
import { Link } from 'react-router-dom/cjs/react-router-dom.min.js';

function Web() {
  return (
    <>
    <Switch>
      <Route path="/reference/spanek">
        <ReferenceSpanek />
      </Route>
      <Route path="/reference/viditelne-svetlo">
        <ReferenceViditelneSvetlo />
      </Route>
      <Route path="/reference/john-lennon">
        <ReferenceJohnLennon />
      </Route>
      <Route path="/reference/diamant">
        <ReferenceDiamant />
      </Route>
      <Route path="/reference/osvetim">
        <ReferenceOsvetim />
      </Route>
      <Route path="/reference/ufo">
        <ReferenceUfo />
      </Route>
      <Route path="/reference/frantisek-xaver-salda">
        <ReferenceFrantisekXaverSalda />
      </Route>
      <Route path="/reference/tsunami">
        <ReferenceTsunami />
      </Route>

      
      
      
      
        <App />
    </Switch>
    <style>{`
      .error {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100%;
        height: 100%;
        margin: 10px;
        border: 1px solid black;
        cursor: pointer;
      }
    `}</style>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Web/>
  </BrowserRouter>
);
