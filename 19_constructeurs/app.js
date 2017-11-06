var app = (function app() {
    "use strict";
    var cars = [], Car, animals = [], Animal, observer;

    window.onload = function start() {
        observer();
    };

    observer = function observer() {
        byId("create_car").onclick = function action1() {
            // log(this);// ici this représente la source de l'event (le bouton)
            cars.push(new Car());
            log(cars);
        };

        byId("create_animal").onclick = function action2() {
            // log(this);// ici this représente la source de l'event (le bouton)
            animals.push(new Animal());
            log(animals);
        };
    };

    Animal = function Animal() {
        this.name = byId("name_animal").value || "default name";
        this.species = byId("species_animal").value || "default species";
    };

    Car = function Car() {
        this.brand = byId("brand_car").value || "default car";
        this.color = byId("color_car").value || "default color";
    };

}());
