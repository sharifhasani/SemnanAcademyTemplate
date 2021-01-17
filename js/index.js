function ShowResponsiveMenu(element = document.getElementById("menu-icon")) {

    let responsiveMenu = document.getElementById("responsive-menu");

    //hide responsive menu
    if (responsiveMenu.style.right == "0px") {

        let backContainer = document.getElementsByClassName("back-container");
        backContainer[0].remove();

        element.classList.add("zmdi-menu");
        element.classList.remove("zmdi-close");
        responsiveMenu.style.right = "-220px";

        //enable scroll
        document.getElementsByTagName("body")[0].style.height = "100%";
        document.getElementsByTagName("body")[0].style.overflow = "auto";

    }
    //show responsive menu
    else {
        let backContainer = document.createElement("div");
        backContainer.classList.add("back-container");

        backContainer.setAttribute("onclick", "ShowResponsiveMenu()")
        document.getElementsByTagName("body")[0].appendChild(backContainer);

        element.classList.add("zmdi-close");
        element.classList.remove("zmdi-menu");
        responsiveMenu.style.right = "0px";

        //disable scroll
        document.getElementsByTagName("body")[0].style.height = "100%";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
}

function ShowSubMenu(elementId) {
    document.getElementById(elementId).style.visibility = "visible";
    document.getElementById(elementId).style.opacity = "1";
    document.getElementById("sub-" + elementId).style.display = "flex";


}

function HideSubMenu(elementId) {

    document.getElementById(elementId).style.visibility = "hidden";
    document.getElementById(elementId).style.opacity = "0.8";
    document.getElementById("sub-" + elementId).style.display = "none";
}

function ShowDescription(elementId) {
    let element = document.getElementById(elementId);

    if (element.style.height == "") {
        element.style.visibility = "hidden";
        element.style.height = "0px";
    } else {
        element.style.visibility = "visible";
        element.style.height = "fit-content";

    }
}