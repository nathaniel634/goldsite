/*==================================================
BACK TO TOP MODULE
==================================================*/

(function () {

    function initBackToTop() {

        const button = document.getElementById("pmxBackToTop");

        if (!button) return;

        function toggleButton() {

            if (window.scrollY > 300) {

                button.classList.add("show");

            } else {

                button.classList.remove("show");

            }

        }

        window.addEventListener("scroll", toggleButton);

        button.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    window.PMX = window.PMX || {};

    window.PMX.initBackToTop = initBackToTop;

})();