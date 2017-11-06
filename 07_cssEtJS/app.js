/*global window, log, select, selectAll, byId, document*/

// écrire un petit prog X
// qui attend le load X
// selectionne l'icone burger X
// écoute les clicks sur le bruger X
// dans le handler associé =>
// activer ou desicativer la class is-active sur .nav-mobile

var app = (function app() { // app est IIFE
    "use strict";
    var burger, handler, navMobile;

    window.onload = function start() {
        navMobile = select(".nav-mobile");
        burger = select(".grid-header > .icon");
        burger.onclick = handler;
    };

    handler = function handler(evt) {
        log(evt);
        // log(this);
        navMobile.classList.toggle("is-active");
    };

}());
