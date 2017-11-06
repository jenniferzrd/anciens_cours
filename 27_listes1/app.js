var app = (function app() {
    "use strict";

    var btnAdd, btnDel, createLi, createUl, deleteLi, handleAdd, handleDel, input, handleMove, handleSelection, list, insertAfter;

    window.onload = function start() {
        input = byId("li_name");
        list = byId("my_list");
        btnAdd = byId("li_create");
        btnDel = byId("li_remove");
        input.focus();

        btnAdd.onclick = handleAdd;
        btnDel.onclick = handleDel;

        window.onkeypress = function checkKey(e) {
            if (document.activeElement === input &&
                e.key === "Enter") {
                handleAdd();
            }
        };
    };


    insertAfter = function insertAfter(source, c) {
        var parent, cible;
        parent = source.parentElement;
        cible = c.nextElementSibling;
        if (!cible) {
            cible = null;
        }
        parent.insertBefore(source, cible);
    };

    createLi = function createLi(text, target) {
        var checkbox, down, li, up, span, wrap, container;

        checkbox = document.createElement("input");
        down = document.createElement("i");
        container = document.createElement("div");
        wrap = document.createElement("div");
        li = document.createElement("li");
        up = document.createElement("i");
        span = document.createElement("span");

        li.className = "item";
        li.onclick = handleSelection;
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        container.className = "container";
        wrap.className = "icon-wrap";

        span.className = "text";
        span.textContent = text;

        down.className = "icon fa fa-caret-down";
        down.setAttribute("data-action", "down");
        down.onclick = handleMove;
        up.className = "icon fa fa-caret-up";
        up.setAttribute("data-action", "up");
        up.onclick = handleMove;

        container.appendChild(span);
        wrap.appendChild(checkbox);
        wrap.appendChild(up);
        wrap.appendChild(down);

        container.appendChild(wrap);
        li.appendChild(container);

        target.appendChild(li);

        input.value = "";
        input.focus();
    };

    createUl =  function createUl(text, target) {
        var ul = document.createElement("ul");
        ul.className = "list";
        return ul;
    };

    deleteLi = function deleteLi(boxes) {
        boxes.forEach(function parse(box) {
            box.parentElement.parentElement.parentElement.remove();
        });
    };

    handleAdd = function handleAdd() {
        var target, activeLi, sublist;

        activeLi = select("#my_list .item.is-active");
        target = !activeLi ? list : activeLi;

        if (input.value) {

            if (target.classList.contains("is-active")) {

                sublist = target.querySelector(".list");

                if (!sublist) {
                    target = target.appendChild(createUl());
                }
                else {
                    target = sublist;
                }
            }
            createLi(input.value, target);

        } else {
            alert("merci de saisir du texte");
        }
    };

    handleDel = function handleDel() {
        var checked = selectAll("#my_list .checkbox:checked");
        if (checked.length) {
            deleteLi(checked);
        } else {
            alert("aucune case cochée...");
        }
    };

    handleMove = function handleMove(e) {
        var direction, previous, next, li, currentlist;

        direction = this.getAttribute("data-action");
        li = this.parentElement.parentElement.parentElement;
        currentlist = li.parentElement;

        if (direction === "up") {
            previous = li.previousElementSibling;
            currentlist.insertBefore(li, previous);

        } else if (direction === "down") {
            insertAfter(li, li.nextElementSibling);
        }
    };

    handleSelection = function handleSelection(e) {
        var previous = select("#my_list .item.is-active");

        e.stopPropagation(); // important !

        if (previous && previous === this) {
            return this.classList.remove("is-active");
        } else if (previous) {
            previous.classList.remove("is-active");
        }

        this.classList.add("is-active");
    };


}());
