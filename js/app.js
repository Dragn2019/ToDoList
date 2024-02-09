(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const inputText = document.getElementById("input-text");
    const todoList = document.querySelector(".todo__list");
    document.querySelector(".todo__button").onclick = addTask;
    document.addEventListener("keydown", (event => {
        if (event.code === "Enter") addTask();
    }));
    function addTask() {
        if (inputText.value === "") alert("You didn't write anything"); else {
            let li = document.createElement("li");
            li.innerHTML = inputText.value;
            todoList.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "+";
            li.appendChild(span);
        }
        inputText.value = "";
        saveData();
    }
    todoList.addEventListener("click", (event => {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
            saveData();
        } else if (event.target.tagName === "SPAN") {
            event.target.parentElement.remove();
            console.log("sdf");
            saveData();
        }
    }), false);
    function saveData() {
        localStorage.setItem("data", todoList.innerHTML);
    }
    function showList() {
        todoList.innerHTML = localStorage.getItem("data");
    }
    showList();
    window["FLS"] = true;
    isWebp();
})();