/*==================================================
COUNTER MODULE
==================================================*/

(function () {

    function initCounter() {

        const counters = document.querySelectorAll("[data-counter]");

        if (!counters.length) return;

        counters.forEach(counter => {

            const target = Number(counter.dataset.counter);

            let current = 0;

            const step = Math.max(1, Math.ceil(target / 80));

            const timer = setInterval(() => {

                current += step;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.textContent = current;

            }, 20);

        });

    }

    window.PMX = window.PMX || {};

    window.PMX.initCounter = initCounter;

})();