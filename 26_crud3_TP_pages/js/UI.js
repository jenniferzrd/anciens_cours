var UI = function UI() {
    "use strict";
    try {

        if (!(this instanceof UI)) {
            throw new Error("woot, mauvaise instanciation d'UI");
        }

        this.dom = {};
        this.dom.tablerUser = byId("tabler_user");
        
        this.dom.deleteBoxes = this.dom.tablerUser.querySelectorAll(".delete");
        this.observer();

    } catch(err) {
        window.console.error(err);
    }
};

UI.prototype.handleUserDeletion = function handleUserDeletion(evt) {
    // question : deviner que vaut this ici !!!
    var checkbox = this.querySelector("input[type=checkbox]");
    // voir dans le CSS au sélecteur .tabler td.delete > input
    // MDN : pointer-events : none
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
    }
};

UI.prototype.observer = function observer() {

    this.dom.deleteBoxes.forEach(function parse(td) {

        td.onclick = this.handleUserDeletion;

    }, this);// ici on définit la valeur de this dans le forEach
};
