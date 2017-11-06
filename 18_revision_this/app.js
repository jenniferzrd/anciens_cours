
// la var thisGlobal capture la valeur de this hors de toute fonction, donc dans le scope global. Dans ce cas this représente window === tout le langage.
var thisGlobal = this;

var app = (function app() {
    "use strict";
    var observer,
    MonConstructeur,
    thisEvtHandler = null,
    thisInstanceOfConstruct = null,
    thisUndef = this;
    // La var thisUndef capture this dans un scope en mode strict. Dans ce cas this vaut undefined. Sans le mode strict, thisUndef aurait valu window (object global)

    observer = function observer(mode) {
        if (mode === "constr") {
            thisInstanceOfConstruct = new MonConstructeur();
            log("thisInstanceOfConstruct --->");
            log(thisInstanceOfConstruct);

        } else if (mode === "global") {
            log("thisGlobal --->");
            log(thisGlobal);

        } else if (mode === "undef") {
            log("thisUndef --->");
            log(thisUndef);
        } else {
            log("thisEvt --->");
            thisEvtHandler = mode;
            log(thisEvtHandler);
        }
    };

    MonConstructeur = function MonConstructeur(param) {
        this.name = "un constructeur est un \"moule\" à objets";
        this.weapons = ["gun", "machine-gun", "knife", "machette"];
        this.clothings = ["jacket", "jean", "sun glasses"];
        this.combatSkills = ["kung-fu", "aikido"];
        // log("this ici représente le constructeur");
        // log(this);

        // ATTENTION : une fonction en mode constructeur retourne automatiquement la valeur de this qui vient d'être instanciée.
    };

    return {
        observer: observer
    };

}());
