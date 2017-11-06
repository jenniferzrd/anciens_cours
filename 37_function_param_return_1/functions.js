/**
 * Une petite fonction simple pour débuter
 * @return {undefined} RAS
 */
var one = function one() {
    alert("hello world of functions");
};


/**
 * hello: une fonction générant message hello dans la console
 * @return {undefined} RAS
 */
var hello = function hello() {
    console.log("hello");
};


/**
 * Une fonction dummy pour comprendre l'entrée et la sortie d'une fonction
 * @param  {*} p n'importe quel paramètre
 * @return {*}   le paramètre envoyé en argument de dummyReturn
 */
var dummyReturn = function dummyReturn(p) {
    return p;
};


/**
 * foo: Une fonction dummy qui retourne bar
 * @return {string}   la chaîne de caractère bar
 */
var foo = function foo() {
    return "bar";
};


/**
 * [helloWho description]
 * @param  {string} nom un nom ou un prénom
 * @return {string}  la chaîne hello concaténé avec le nom
 */
var helloWho = function helloWho(nom) {
    return "hello " + nom;
};


/**
 * isNumber vérifie si le paramètre est un nombre non NaN
 * @param  {number}  n un nombre quelcuonque
 * @return {(Error|boolean)} Une erreur si n n'est pas un nombre. Sinon true si n n'est pas NaN, false sinon.
 */
var isNumber = function isNumber(n) {
    if (typeof n !== "number") {
        return new Error("bad type ! please send a number");
    }
    return !isNaN(n);
};


/**
 * contraire retourne la valeur contraire d'un booléen
 * @param  {boolean} b Un booléen
 * @return {(Error|boolean)} Une erreur si n n'est pas un booléen. Sinon la valeur contraire de b.
 */
var contraire = function contraire(b) {
    if (typeof b !== "boolean") {
        return new Error("bad type ! me send boolean");
    }
    return !b;
};


/**
 * [isEmpty description]
 * @param  {(string|Object|Array)}  d une chaîne, un tableau ou un objet littéral
 * @return {boolean}   True si le paramètre est une chaîne vide, un tableau de longueur 0 ou un objet sans propriétés. False sinon.
 */
var isEmpty = function isEmpty(d) {
    var res = false;

    if (d === "") {
        res = true;

    } else if (Array.isArray(d) && !d.length) {
        res = true;

    } else if (typeof d === "object" &&  !Object.keys(d).length) {
        res = true;
    }
    return res;
};


/**
 * [addCSSClass description]
 * @param {string} s   un sélecteur CSS
 * @param {string} css la classe CSS à ajouter
 * @return {Array} un tableau contenant tous les objets HTML auxquels on a ajouté la classe CSS.
 */
var addCSSClass = function addCSSClass(s, css) {
    var res = [];

    document.querySelectorAll(s).forEach(function(node) {
        node.className += " " + css;
        res.push(node);
    });

    return res;
};
