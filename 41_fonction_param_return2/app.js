/*jshint esversion:6*/

var deleteNode = function deleteNode(list) {
    var count = 0;
    list.forEach(function(node) {
        node.remove();
        count++;
    });
    return list.length === count
        ? true
        : false;
};

var isOdd = function isOdd(n) {
    try {
        if (isNaN(n)) {
            throw new Error("c'est une erreur");
        } else if (n % 3 === 0) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.log(e);
    }

};

var sum = function sum(a) {
    var i,
        res = 0;

    for (i = 0; i < a.length; i++) {
        if (isNaN(a[i])) {
            throw new Error("l'intérieur de mon tableau contient une valeur non numérique");
        }
        res += a[i];
    }

    return res;
};

var sumReduce = function sumReduce(a) {

    return a.reduce((a, b) => {
        if (isNaN(b)) {
            throw new Error('valeur non numérique ! corriger le tableau svp !');
        }
        return a + Number(b);
    }, 0);
};

function getNodesMetrics(nl) {
    var res = [];
    console.log(nl);
    nl.forEach(function(n) {
        var m = n.getBoundingClientRect();
        console.log(m);
        res.push({h: m.height, w: m.width});
    });

    return res;
}
function callback1(msg) {
    console.log(msg);
}
function callback2(msg) {
    alert(msg);
}
function usingClbk(clbk) {
    //console.log(clbk);
    clbk('cc c david');
}
function usingClbk2(clbk, url) {
    const req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
        // console.log(this.response);
        const data = JSON.parse(this.response);
        console.log(data.records);
        clbk(data.records);
    };

    req.send(null);
}

function callbackAjax(result) {
    console.log(result);
}

// function foo() {
//     this.laPOOCCOOL = true;
// }
// var bar = new foo();
// console.log(bar);
function Hotel(infos) {
    try {
        if (typeof infos.piscine !== "boolean") {
            throw new Error("please check aPiscine arguments - boolean expected but " + (typeof this.piscine) + " received");
        }

        this.nom = infos.nom;
        this.nombreEtoile = infos.etoiles;
        this.ville = infos.ville;
        this.aPiscine = infos.piscine;
        this.nbChambres = infos.chambres;
        this.nbChambresReservees = infos.chambresRes;
        this.urlSite = infos.urlSite;

    } catch (err) {
        console.log(err);
    }
}
Hotel.prototype.reserverChambre = function (n) {
    if (this.nbChambresReservees + n <= this.nbChambres) {
        this.nbChambresReservees += n;
    } else {
        alert("Desolé, il n'y a plus assez de chambres disponibles");
    }

};
Hotel.prototype.getNombreChambresDispo = function (n) {
    return this.nbChambres - this.nbChambresReservees;
};

window.onload = function start() {
    // var r1 = deleteNode(document.querySelectorAll("p"));
    // var r2 = getNodesMetrics(document.querySelectorAll(".box"));
    // var r3 = usingClbk(callback2);
    // var r4 = usingClbk2(callbackAjax, "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms_2004_a_2012&rows=1000&facet=prenoms&facet=sexe&facet=annee");
    // console.log(r4);
    //console.log(r1);
    // console.log(r2);
    // console.log(isOdd(2));
    // console.log(isOdd(3));
    // console.log(isOdd("salut"));
    var h1 = new Hotel({
        nom: "windsor",
        etoiles: 5,
        ville: "London",
        piscine: true,
        chambres: 120,
        chambresRes: 0,
        urlSite: "https://windsor.london.com"
    });
    var h2 = new Hotel({
        nom: "ibis",
        etoiles: 2,
        ville: "Paris",
        piscine: false,
        chambres: 50,
        chambresRes: 37,
        urlSite: "https://hotel-ibis.fr/paris"
    });

    console.log("#### hôtel 1 ####");
    console.log(h1);
    console.log(`l'hôtel ${h1.nom} possède ${h1.nbChambres} chambres dont ${h1.getNombreChambresDispo()} sont disponibles`);
    console.log("on réserve 10 chambres");
    h1.reserverChambre(10);
    console.log("il reste donc " + h1.getNombreChambresDispo() + " disponibles");

    console.log("#### hôtel 2 ####");
    console.log(h2);
    console.log(`l'hôtel ${h2.nom} possède ${h2.nbChambres} chambres`);
    // try {
    // console.log(sum([1, 2, 3, 7]));
    // console.log(sumReduce([19, 3, 30, 7000]));
    // } catch (err) {
    //     console.log(err);
    // }

};
