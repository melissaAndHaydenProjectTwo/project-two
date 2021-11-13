document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        let displayMenu = false;
        const menu = document.getElementById("socialHide");
        const hamburgerMenu = document.getElementById("hamburger");
        hamburgerMenu.addEventListener("click", function () {
            displayMenu = !displayMenu;
            menu.style.display = displayMenu ? 'block' : 'none';
        });
    }
}
