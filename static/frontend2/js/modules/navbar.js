/*==================================================
PMX NAVBAR MODULE
==================================================*/

(function () {

    const NAVBAR_SCROLL_OFFSET = 80;

    function initNavbar() {

        const navbar = document.getElementById("pmxNavbar");

        if (!navbar) return;

        function handleScroll() {

            if (window.scrollY > NAVBAR_SCROLL_OFFSET) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        }

        // Set initial state
        handleScroll();

        // Listen for scrolling
        window.addEventListener("scroll", handleScroll);

    }

    window.PMX = window.PMX || {};

    window.PMX.initNavbar = initNavbar;

})();