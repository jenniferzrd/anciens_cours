/*global byId, select, selectAll, log*/
var TabsWidget = (function TabsWidget() {
    "use strict";
    
    var dom = {},
        gererClicks,
        observer;

    window.onload = function start() {
        // on transforme la nodeList retournée par querySelectorAll
        // en tableau (utilisé dans gererClicks avec indexof)
        dom.tabs = Array.prototype.slice.call(selectAll(".tab"));
        dom.contents = selectAll(".content");
        observer();
    };

    gererClicks = function gererClicks(evt) {
        // log(evt);
        var indexCible,
            previousTab,
            previousContent;
        // on récupère l'index (le numéro de case) de la tab cliquée
        indexCible = dom.tabs.indexOf(this);
        // on selectionne la tab ET le content déjà actifs
        previousTab = select(".tab.is-active");
        // si on click sur une tab déjà sélectionnée
        if (previousTab === this) {
            return;// pas besoin d'aller plus loin...

        } else {
            previousContent = select(".content.is-active");
            previousTab.classList.remove("is-active");
            previousContent.classList.remove("is-active");
            // on ajoute la classe active à la tab cliquée
            this.classList.add("is-active");
            // on récupère le content ayant le même index que la tab cliquée
            dom.contents[indexCible].classList.add("is-active");
        }

    };

    observer = function observer() {
        // on parcourt toutes les tabs du widget
        dom.tabs.forEach(function parse(tab) {
            // on écoute les clicks sur chaque tab
            tab.onclick = gererClicks;
        });
    };

}());
