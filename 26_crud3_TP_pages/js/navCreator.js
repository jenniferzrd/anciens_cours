var navCreator = function navCreator() {
    "use strict";

    var btnAdd,
        btnDel,
        btnSave,
        createItem,
        createUl,
        data = [],
        deleteItem,
        handleAdd,
        handleDel,
        handleMove,
        handleSelection,
        handleSave,
        input,
        insertAfter,
        list,
        noPagesDiv,
        postPage,
        start,
        setItemPosition,
        setTargetList,
        setPageChild,
        setPageData,
        updateItemPosition;

    start = function start() {
        input = byId("li_name");
        list = byId("pages_list");
        btnAdd = byId("li_create");
        btnDel = byId("li_remove");
        btnSave = byId("save_pages");
        noPagesDiv = byId("no_pages");
        input.focus();
log(noPagesDiv)
        btnAdd.onclick = handleAdd;
        btnDel.onclick = handleDel;
        btnSave.onclick = handleSave;

        list.querySelectorAll(".item").forEach(function parse(item) {
            item.onclick = handleSelection;
        });

        window.onkeypress = function checkKey(e) {
            if (document.activeElement === input && e.key === "Enter") {
                handleAdd();
            }
        };
    };

    insertAfter = function insertAfter(source, c) {
        var parent,
            cible;
        parent = source.parentElement;

        if (!cible || !c) {
            cible = null;
        } else {
            cible = c.nextElementSibling;
        }
        parent.insertBefore(source, cible);
    };

    createItem = function createItem(text, target) {
        var checkbox,
            down,
            li,
            up,
            span,
            wrap,
            container;


        checkbox = document.createElement("input");
        down = document.createElement("i");
        container = document.createElement("div");
        wrap = document.createElement("div");
        li = document.createElement("li");
        up = document.createElement("i");
        span = document.createElement("span");

        li.className = "item";
        li.onclick = handleSelection;
        li.setAttribute("data-position", target.children.length);

        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        container.className = "container";
        wrap.className = "icon-wrap";

        span.className = "title";
        span.textContent = text;

        down.className = "icon fa fa-caret-down";
        down.setAttribute("data-action", "down");
        down.textContent = "down";
        down.onclick = handleMove;

        up.className = "icon fa fa-caret-up";
        up.setAttribute("data-action", "up");
        up.textContent = "up";
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

    createUl = function createUl(text, target) {
        var ul = document.createElement("ul");
        ul.className = "list";
        return ul;
    };

    deleteItem = function deleteItem(boxes) {
        boxes.forEach(function parse(box) {
            box.parentElement.parentElement.parentElement.remove();
        });

        if (list.children.length === 0) {
            noPagesDiv.classList.remove("is-hidden");
        }
    };

    handleAdd = function handleAdd(e) {
        var target;

        if (!input.value) {
            alert("merci de saisir du texte");

        } else {

            target = setTargetList();

            createItem(input.value, target);

            if (!noPagesDiv.classList.contains("is-hidden")) {
                noPagesDiv.classList.add("is-hidden");
            }
        }
    };

    handleDel = function handleDel(e) {
        var checked = list.querySelectorAll(".checkbox:checked");

        if (checked.length) {
            deleteItem(checked);
        } else {
            alert("aucune case cochée...");
        }
    };

    handleMove = function handleMove(e) {
        var direction,
            previous,
            next,
            li,
            currentlist;

        direction = this.getAttribute("data-action");
        li = this.parentElement.parentElement.parentElement;
        currentlist = li.parentElement;

        if (direction === "up") {
            previous = li.previousElementSibling;
            if (previous) {
                currentlist.insertBefore(li, previous);
            }

        } else if (direction === "down") {
            insertAfter(li, li.nextElementSibling);
        }

        updateItemPosition(currentlist);
    };

    handleSelection = function handleSelection(e) {
        var previous = list.querySelector(".item.is-active");

        e.stopPropagation(); // important !

        if (previous && previous === this) {
            return this.classList.remove("is-active");
        } else if (previous) {
            previous.classList.remove("is-active");
        }

        this.classList.add("is-active");
    };

    var setTreeStructure = function setTreeStructure(items, data) {
        log("items");
        log(items);
        items.forEach(function parse(item, i) {
            var sub = item.querySelectorAll(":scope > .list > .item");
            log("sub");
            log(sub);
            setPageDataz(item, data);

            if (sub.length) {
                data[i].children = [];
                setTreeStructure(sub, data[i].children);
            }


        });
    };

    handleSave = function handleSave(e) {
        var items;

        if (list.children.length === 0) {
            alert("liste vide ...");

        } else {
            items = Array.prototype.slice.call(list.children);
            setTreeStructure(items, data);
            log("data");
            log(data);
            return;
        }

        postPage(data);
    };

    postPage = function postPage(data) {
        var fd, xhr;
        fd = new FormData();
        xhr = new XMLHttpRequest();
        fd.append("action", "post_page");
        fd.append("data", JSON.stringify(data));
        xhr.open("post", "api.php");

        xhr.onload = function getServerResponse(evt) {
            log(evt);
        };
        log("data");
        log(data);
        return;
        xhr.send(fd);
    };

    setTargetList = function setTargetList() {
        var activeLi, target, sublist;

        activeLi = list.querySelector(".item.is-active");
        target = !activeLi ? list : activeLi;

        if (target.classList.contains("is-active")) {

            sublist = target.querySelector(".list");

            if (!sublist) {
                sublist = target.appendChild(createUl());
            }

            target = sublist;
        }

        return target;
    };

    setPageData = function setPageData(item) {
        return {
            title: item.querySelector(".title").textContent,
            position: Number(item.getAttribute("data-position")),
            content: null,
            id:  item.getAttribute("data-id-page") || null,
            id_parent: -1,
            url: null,
            children: []
        };
    };

    var setPageDataz = function setPageDataz(item, parentData) {
        parentData.push({
            title: item.querySelector(".title").textContent,
            position: Number(item.getAttribute("data-position")),
            content: null,
            id:  item.getAttribute("data-id-page") || null,
            id_parent: -1,
            url: null,
            children: []
        });
    };

    updateItemPosition = function updateItemPosition(list) {
        var children = list.children;
        children = Array.prototype.slice.call(children);

        children.forEach(function parse(item, i) {
            item.setAttribute("data-position", i);
        });
    };

    return {start: start};
};
