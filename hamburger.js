document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        let displayMenu = false;
        const menu = document.getElementById("socialHide");
        const hamburgerMenu = document.getElementById("hamburger");
        hamburgerMenu.addEventListener("click", function () {
            menu.style.display = "block";
            // displayMenu = !displayMenu;
            // menu.style.display = displayMenu ? 'block' : 'none';
            if (displayMenu === false) {
                displayMenu = true;
                menu.style.display = "block";
            } else {
                displayMenu = false;
                menu.style.display = "none";
            }
        });
        // console.log(hamburgerMenu)

    }
}
