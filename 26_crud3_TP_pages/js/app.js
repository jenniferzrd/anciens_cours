var app = (function app() {
    "use strict";

    var ui;

    window.onload = function start() {

        log("doc is ready to rock !");

        if (byId("tabler_user")) {
            ui = new UI();
        }

        if (byId("composant_page")) {
            navCreator().start();
        }

    };


}());
