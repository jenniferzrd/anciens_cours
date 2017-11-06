/*global byId, select, selectAll, log, TabsWidget*/

var app = (function app() {
    "use strict";
    var widget1,
        widget2;

    window.onload = function start() {

        widget1 = new TabsWidget({
            id: "tabs_widget_1",
            data: [
                {
                    tab: "tab 1",
                    content: "some data here"
                }, {
                    tab: "tab 2",
                    content: "you can go on and on and on..."
                }, {
                    tab: "tab 3",
                    content: "YES YOU CAN !!!"
                }, {
                    tab: "tab 4",
                    content: "hell yeah !"
                }, {
                    tab: "tab 5",
                    content: "<p>working</p>"
                }
            ]
        });

        widget2 = new TabsWidget({
            id: "tabs_widget_2",
            data: [
                {
                    tab: "pull",
                    content: "du super contenu ici 1"
                }, {
                    tab: "chaussettes",
                    content: "du super contenu ici 2"
                }, {
                    tab: "baskets",
                    content: "du super contenu ici.... 3"
                }
            ]
        });
    };

}());
