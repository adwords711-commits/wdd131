let selectElem = document.querySelector("#theme-select");
let pageContent = document.querySelector("body");
let logo = document.querySelector("#logo");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === "dark") {
        pageContent.classList.add("dark");
        pageContent.classList.remove("light");
        logo.src = "images/byui-logo-white.png";
    } else if (current === "light") {
        pageContent.classList.add("light");
        pageContent.classList.remove("dark");
        logo.src = "images/byui-logo.png";
    } else {
        pageContent.classList.remove("dark");
        pageContent.classList.remove("light");
        logo.src = "images/byui-logo.png";
    }
}
