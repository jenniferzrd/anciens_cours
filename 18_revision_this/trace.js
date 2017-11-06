var traceThis = function () {

    log(this);

    (function test1() {
        "use strict";

        log(this);

        byId("btn1").onclick = function action () {
            console.log(this);
            var cake = new Cake("vanilla");
        };

    }());

    function Cake(flavor) {
        console.log(this);
    }

};

log(this);

traceThis();
