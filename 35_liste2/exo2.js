/*jshint esversion: 6*/

var exo2 = function() {
    "use strict";

    var a,
        dragged,
        dragItem,
        items,
        start;

    dragItem = function(e) {
        console.log(this);
        dragged = this;
    };

    (function start() {
        console.log("exo 2 ready");
        items = document.querySelectorAll("#exo2 [draggable]");

        document.addEventListener("dragenter", function(event) {
            if (event.target.className == "dropzone") {
                event.target.style.border = "2px dashed silver";
            }
        }, false);

        document.addEventListener("dragover", function(event) {
            // prevent default to allow drop
            event.preventDefault();
        }, false);

        document.addEventListener("drop", function(event) {
            // prevent default action (open as link for some elements)
            // event.preventDefault();
            console.log(event);
            // move dragged elem to the selected drop target
            if (event.target.className == "dropzone") {
                event.target.style.border = "none";
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
            }

        }, false);

        items.forEach(function(item) {
            // console.log(item);
            item.ondragstart = dragItem;
        });

    }());
};
