/*jshint esversion: 6*/

var exo3 = function() {
    "use strict";

    var appendListItems,
    categories = ["cheese", "chocolat", "caramel", "automobile", "autocompletion", "fruits rouges", "cannelle", "café", "thé vert", "vin rouge", "IPA", "fruits exotiques", "exos JS", "thé noir", "cheese cake"],
    filterList,
    input,
    list;

    appendListItems = function() {
        categories.forEach(function(cat) {
            list.innerHTML += `<li class="item">${cat}</li>`;
        });
    };

    filterList = function() {
        var itemList, results;
        itemList = document.querySelectorAll("#list_filter .item");
        itemList = Array.prototype.slice.call(itemList);

        results = itemList.filter(function(item) {
            item.classList.remove("hidden");
            return item.textContent.indexOf(input.value) === -1;

        }).forEach(function(item) {
            item.classList.add("hidden");
        });
    };

    (function start() {
        console.log("exo 3 ready");
        input = document.getElementById("input_filter");
        list = document.getElementById("list_filter");

        appendListItems();

        input.onkeyup = filterList;
    }());

};
