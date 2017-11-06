function postViaAjax() {
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.open("post", "api.php");

    xhr.send(null);
}


function postViaAjax2() {
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.open("post", "api.php");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("action=decouvrir_ajax");
}


function postViaAjax3() {
    var xhr, form;
    xhr = new XMLHttpRequest();
    form = new FormData();

    form.append("action", "avancer_avec_formdata");
    form.append("niveau", "newbie");
    form.append(
        "cakes",
        JSON.stringify([{flavor: "chocolate"}, {flavor: "vanilla"}])
    );

    // form.
    // ajouter une donnée structurée au post (array)

    xhr.open("POST", "api.php");

    xhr.onload = function success() {
        log("yata ! success !");

        var oConverti = JSON.parse(this.response);
        log(oConverti.msg);
    };
    //
    // xhr.onerror = function error() {
    //     log("meh ! error !");
    // };

    xhr.send(form);
}


function getViaAjaxVanilla() {
    var xhr;
    xhr = new XMLHttpRequest();

    xhr.open("get", url);

    xhr.onload = function getResponse(res) {
        log(res);
    };

    xhr.send(null);

}


function getViaAjaxJQ() {
    // récupérer le contenu d'un fichier HTML
    $.get("test.html", function parse(html) {
        // log(html);
        byId("cible_content_ajax").innerHTML = html;
    });
}

function getFromWebAPIViaAjaxJQ() {
    var url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=resultats_electoraux&rows=1000&facet=libelle_du_scrutin&facet=date_du_scrutin_jj_mm_ssaa&facet=numero_d_arrondissement_01_a_20&facet=numero_de_bureau_de_vote_000_a_999&facet=nom_du_candidat_ou_liste";

    $.get(url, function parse(election) {
        log(election);
    });
}
