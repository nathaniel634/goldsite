/*==================================================
SCROLL ANIMATION MODULE
==================================================*/

(function () {

    function initAnimations() {

        const elements = document.querySelectorAll(".pmx-reveal");

        if (!elements.length) return;

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

        elements.forEach((element) => observer.observe(element));

    }

    window.PMX = window.PMX || {};

    window.PMX.initAnimations = initAnimations;

})();