function ShowResponsiveMenu(element = document.getElementById("menu-icon")) {

    let responsiveMenu = document.getElementById("responsive-menu");

    if (responsiveMenu.style.right == "0px") {

        let backContainer = document.getElementsByClassName("back-container");
        backContainer[0].remove();

        element.classList.add("zmdi-menu");
        element.classList.remove("zmdi-close");
        responsiveMenu.style.right = "-220px";
    } else {
        let backContainer = document.createElement("div");
        backContainer.classList.add("back-container");

        backContainer.setAttribute("onclick", "ShowResponsiveMenu()")
        document.getElementsByTagName("body")[0].appendChild(backContainer);

        element.classList.add("zmdi-close");
        element.classList.remove("zmdi-menu");
        responsiveMenu.style.right = "0px";
    }
}