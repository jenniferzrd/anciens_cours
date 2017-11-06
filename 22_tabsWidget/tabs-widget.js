/*global byId, select, selectAll, log*/
var TabsWidget = (function initTabsWidget() {
    "use strict";

    var TabsWidget = function Widget(conf) {
        // le bloc try indique que des erreurs peuvent survenir
        try {
            // on récupère l'id du widget dans la var conf
            this.container = byId(conf.id);
            // on associe les données textuelles à notre objet TabsWidget
            this.data = conf.data;

            if (!this.container) {
                // le conteneur parent DOIT être défini
                throw new Error("error@TabsWidget: missing container block !");
            } else if (this.data.length < 1) {
                // le widget DOIT contenir au moins une tab
                throw new Error("error@TabsWidget: missing tabs items !");
            }

            // on automatise la configuration des tabs
            var markup = this.createMarkup();
            // on automatise la configuration des tabs
            this.container.style.width = this.setContainerWidth();
            // on récupère dans le DOM les tabs associées à ce widget
            this.tabs = markup.tabs;
            // on récupère dans le DOM le bloc de contenu
            this.content = markup.content;
            // on observe les actions de l'utilisateur
            this.observe();

            // log(this);

        } catch (err) {
            // si des erreurs sont levées, on notifie le dev via la console
            window.console.error(err);
        }

    };

    TabsWidget.prototype.setContainerWidth = function setContainerWidth() {
        return (this.data.length * 100) + "px";
    };

    TabsWidget.prototype.createMarkup = function createMarkup() {
        var markup, list, content;

        markup = "<header class=\"header\"><ul class=\"tabs\"></ul></header><div class=\"content\"></div>";

        this.container.innerHTML = markup;

        list = this.container.querySelector(".tabs");

        // on parcourt toutes les tabs du widget
        // on les numérote via un attribute custom HTML5
        // ainsi on pourra retrouver le contenu associé à chaque tab
        this.data.forEach(function parse(data, i) {
            var li = '<li class="tab" data-target="'+ i + '"><span>'+ this.data[i].tab + '</span></li>';

            list.innerHTML += li;
        }, this);

        content = this.container.querySelector(".content");
        content.innerHTML = this.data[0].content;
        this.container.querySelector(".tab:first-of-type").classList.add("is-active");

        return {
            tabs: this.container.querySelectorAll(".tab"),
            content: content
        };

    };

    TabsWidget.prototype.handleClick = function handleClick(evt) {
        var target, currentTab, previousTab;

        currentTab = evt.target || evt.srcElement;
        // on essaie de récupérer la tab active courante
        previousTab = this.container.querySelector(".tab.is-active");

        if (previousTab && previousTab === currentTab) {
            // on annule l'action la tab cliquée est déjà sélectionnée
            return;
        } else if (previousTab && previousTab !== currentTab) {
            // sinon on désactive la tab
            previousTab.classList.remove("is-active");
        }
        // on ajoute la classe active à la tab nouvellement sélectionnée
        currentTab.classList.add("is-active");
        // la cible est récupérée sous forme de nombre entier
        target = Number(currentTab.getAttribute("data-target"));

        this.setContent(target);
    };


    TabsWidget.prototype.observe = function observe() {
        // on parcourt toutes les tabs du widget
        // le second param (this) définit la valeur de this dans le forEach
        this.tabs.forEach(function parse(tab) {
            // on écoute les clicks sur chaque tab
            tab.onclick = this.handleClick.bind(this);

        }, this);
    };



    TabsWidget.prototype.setContent = function setContent(target) {
        this.content.innerHTML = this.data[target].content;
    };


    return TabsWidget;

}());
