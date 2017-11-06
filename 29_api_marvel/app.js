/*jshint esversion: 6 */

var app = (function app() {
    "use strict";

    var a,
        apiKey = "d5bba5380f2b87c4000a57f41df01cbf",
        btn,
        createCard,
        displayData,
        getDataFromAPI,
        reqLimit = 100,
        results,
        searchbox;

    window.onload = function start() {
        btn = byId("get_data");
        results = byId("results");
        searchbox = byId("searchbox");

        btn.onclick = getDataFromAPI;
        searchbox.onkeyup = getDataFromAPI;
    };

    createCard = function createCard(data) {
        // attention, cette fonction utilise les templates literals
        // c'est une nouveauté de es6 mal supportée
        // il faudrait convertir (transpiler) le code en es5 avec babel... bientôt
        var links = (function getLinks() {
            var str = "";

            function createLink(url, cls) {
                return `<a href="${url}" class="icon ${cls}" target="_blank"></a>`;
            }

            data.urls.forEach(function parse(u) {
                if (u.type === "detail") {
                    str += createLink(u.url, "fa fa-info-circle");
                } else if (u.type === "comicLink") {
                    str += createLink(u.url, "fa-link");
                } else if (u.type === "wiki") {
                    str += createLink(u.url, "fa fa-wikipedia-w");
                }
            });
            return str;
        }());

        var description = data.description || "No description yet...";

        return `<div class="card"><input type="hidden" value="${data.id}"><h3 class=\"title\">${data.name}</h3><img class="img" src="${data.thumbnail.path}.${data.thumbnail.extension}"</div><p class="description">${description}</p><div class="links">${links}</a></div>`;
    };

    displayData = function displayData(dataSet) {
        results.innerHTML = "";
        dataSet.forEach(function parse(data, i) {
            if (i === 0) log(data);
            results.innerHTML += createCard(data);
        });
    };

    getDataFromAPI = function getDataFromAPI() {
        var url, xhr;
        url = "https://gateway.marvel.com:443/v1/public/characters?";
        url += searchbox.value ? "nameStartsWith=" + searchbox.value + "&" : "";
        url += "limit=" + reqLimit + "&apikey=" + apiKey;

        xhr = new XMLHttpRequest();
        xhr.open("get", url);

        xhr.onload = function getResponse(evt) {
            var res = JSON.parse(this.response);
            // log(evt);
            log(JSON.parse(this.response));
            displayData(res.data.results);
        };

        xhr.send();
    };

}());
