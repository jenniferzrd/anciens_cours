var app = (function app() {
    "use strict";

    var cakes = [],
        createCake,
        gererClicks,
        previousIndex,
        displayCake;

    window.onload = function start() {

        byId("create_a_cake").onclick = function action() {
            createCake();
            displayCake();
        };
    };

    displayCake = function displayCake(e) {

        var i,
            icon;

        for (i = previousIndex; i < cakes.length; i += 1) {
            icon = document.createElement("i");
            icon.className = "fa fa-birthday-cake";
            byId("cakes").appendChild(icon);
            icon.onclick = gererClicks;
        }
    };


    gererClicks = function gererClicks(evt) {
        var src = evt.scrElement || evt.target;
        var icons = Array.prototype.slice.call(selectAll(".fa-birthday-cake"));
        var cakeIndex = icons.indexOf(src);

        log(cakes[cakeIndex].miam());
    };

    createCake = function createCake(e) {
        var i,
            count,
            price,
            flavor;

        count = Number(byId("cake_count").value) || 1;
        flavor = byId("cake_flavor").value || "sec";
        price = Math.abs(Number(byId("cake_price").value)) || 5;

        if (!cakes.length) {
            previousIndex = 0;
        } else {
            previousIndex = cakes.length;
        }

        for (i = 0; i < count; i += 1) {
            cakes.push(new Cake({
                flavor: flavor,
                price: price,
                icon: new CakeIcon()
            }));
        }

        log(cakes);
        return cakes;
    };

}());
