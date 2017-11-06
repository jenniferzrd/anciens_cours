var Cake = function Cake(conf) {
    this.price = conf.price || null;
    this.flavor = conf.flavor;
    this.fullName = "un cake aromatisé " + conf.flavor;
};

CakeFactory.prototype.miam = function miam() {
    return "Huumm ça sent bon un cake au " + this.flavor;
};

var CakeIcon = function CakeIcon() {
    this.element = document.createElement("i");
    this.element.className = "fa fa-birthday-cake";

    this.element.onclick = this.handleClick;
};

CakeIcon.prototype.handleClick = function handleClick(e) {

};
