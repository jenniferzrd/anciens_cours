/*jshint esversion : 6*/

var app = (function() {

    var btnPost,
        btnGet,
        displayData,
        getDataFromDB,
        introRow,
        input,
        postDataToDB,
        tabler,
        validateEmail,
        url = "http://localhost:3333/";

    window.onload = function() {
        btnPost = document.getElementById("post_data");
        btnGet = document.getElementById("get_data");
        input = document.getElementById("user_input");
        tabler = document.querySelector("#tabler tbody");
        introRow = tabler.querySelector(".intro");

        btnGet.onclick = function() {
            getDataFromDB(function(res) {
                if (!res.error) {
                    displayData(res);
                }
            });
        };

        btnPost.onclick = postDataToDB;
    };

    displayData = function(result) {

        if (result.val.length) {
            introRow.classList.add("is-hidden");
        } else {
            introRow.classList.remove("is-hidden");
        }

        result.val.forEach(function(obj) {
            tabler.innerHTML += `<tr>
                <td>${obj.id}</td>
                <td>${obj.mail}</td>
            </tr>`;
        });
    };

    getDataFromDB = function(clbk) {
        // une autre façon de faire un appel AJAX...
        var request = new Request(url + "get-data", {
            method: 'GET',
            mode: 'cors',
            headers: new Headers(
                {'Content-Type': 'application/json'}
            )
        });
        try {
            fetch(request).then(function(response) {
                return response.json();

            }).then(function(res) {
                console.log(res); // array !!!
                clbk(res);
            });
        } catch (e) {
            console.log(e);
        }
    };

    postDataToDB = function() {
        console.log("@todo");
    };

    validateEmail = function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

}());
