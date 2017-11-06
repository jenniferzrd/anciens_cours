var trace = (function trace() {
    "use strict";
    log(this);

    window.onload = function start() {
        log(this);
        test1();
    };
}());

var test1 = function test1() {
    "use strict";
    log(this);
    byId("btn1").onclick = test2;
};

var test2 = function test2() {
    log(this);
    var v1 = new Vehicule("suv", "pink");
    log(v1 === this);
};

var Vehicule = function Vehicule(mod, col) {
    this.modele = mod;
    this.color = col;
    log(this);
};

Vehicule.prototype.seDeplacer = function seDeplacer() {
    log("on bouge !!!");
};

log(this);
