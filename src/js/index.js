/* main file for degree project*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


if('serviceWorker' in navigator){
    window.addEventListener('load', ()=> {
        navigator.serviceWorker.register("/serviceworker.js").then( reg => { console.log("sw reged w/ scope:", reg.scope);})
        .catch(e => {console.log("reg failed:", e);});

        });
    }
