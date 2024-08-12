/**
* Template Name: Personal
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Updated: Aug 01 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
    "use strict";

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
    }
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
            if (document.querySelector('.mobile-nav-active')) {
                mobileNavToogle();
            }
        });

    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function (e) {
            e.preventDefault();
            this.parentNode.classList.toggle('active');
            this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
            e.stopImmediatePropagation();
        });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
    }
    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    window.addEventListener('load', aosInit);

    /**
     * Init typed.js
     */
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
        let typed_strings = selectTyped.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 3000
        });
    }

    /**
     * Initiate Pure Counter
     */
    new PureCounter();

    /**
     * Animate the skills items on reveal
     */
    let skillsAnimation = document.querySelectorAll('.skills-animation');
    skillsAnimation.forEach((item) => {
        new Waypoint({
            element: item,
            offset: '80%',
            handler: function (direction) {
                let progress = item.querySelectorAll('.progress .progress-bar');
                progress.forEach(el => {
                    el.style.width = el.getAttribute('aria-valuenow') + '%';
                });
            }
        });
    });

    /**
     * Init swiper sliders
     */
    function initSwiper() {
        document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
            let config = JSON.parse(
                swiperElement.querySelector(".swiper-config").innerHTML.trim()
            );

            if (swiperElement.classList.contains("swiper-tab")) {
                initSwiperWithCustomPagination(swiperElement, config);
            } else {
                new Swiper(swiperElement, config);
            }
        });
    }

    window.addEventListener("load", initSwiper);

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
        selector: '.glightbox'
    });

    /**
     * Init isotope layout and filters
     */
    document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        let initIsotope;
        imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
            initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
                itemSelector: '.isotope-item',
                layoutMode: layout,
                filter: filter,
                sortBy: sort
            });
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
            filters.addEventListener('click', function () {
                isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
                this.classList.add('filter-active');
                initIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                if (typeof aosInit === 'function') {
                    aosInit();
                }
            }, false);
        });

    });

})();



/* ================================================
          Glitch effect (the cake is a lie)
   ================================================*/


   const letters_set1 = "z̶̗̰̹̯͕͛̾́γ̸̨̡̻̳̲͍̼̤͙͓̮̙͍̗̞̣͍̖̼͚̼̞̓̈́̽̊̈̾̿͛̈͌̅̒̾̕͝x̸͖̒̃̆̾͋̔̏̄͛̉͒͌̃̚̕͘w̴̻̤͎͔͔̪͂̈́̉̌̒̿̅͋̄͒̒̍̈́͐͠ṽ̵̛͓͉͖͇̟̝͎̝̦̦͈͖͇̤͈̫͜͝͝ū̴̗̺̦̜̦̠̻͓͔̹͍̹̱͓̜̹͙͇̼̤ɟ̸̡͓̪̳̳͈͓̞̖̄͐͠ƨ̵̡̨̘̯̬̰̳̰̦͇̳͖̻̮͚͓̇̚͝ɿ̴̧̛̘̱̤̗͍͚͖̹͈̲͈̽̂̋̈́̈́̈͘͜p̴̛̛̫̠̥͔̱̲̬͕̹̩̙̣̋̄̄̂͆̓̐̽̀̊̿̓͜͝͠q̴͖̞̣̠͉̮̦̜͔̭͖̣̫̈́͆͗̓̋͂ơ̷̻̘̬̞̻̙̥̼̼̬̝̙̰̹͍̪̞͍̣̺̙̲̇͗̊͊̑͋̋̀̄̀̑̃͑͌̎̈́͋͒͐̽̐̊͊́̎̚͘ͅn̵̢̨͍̹̠͎̬̩̬̅̀̽̏̓͛̿̀̓̉͠m̶̡̧̨̧͖͕̱̱̥̦̳̠̠͔͈̥̮̳͖̫̳͕̣͎̘͊͆̐̃͌͜͜͜͠ͅͅl̴͈̤̝̟̖͍̣̯͕̗̇͌̿ʞ̴̧̧̨͇̞̺̤̱͓͔͎͓̰̹̫̰͎͔̪̰͑ᒑ̵̛͉̮̱͙̩̖̗͈̼̥̦̼̼̲̅̂̓͊̽̃̿̌̒͋̈͒̀̑̾̔̊̔̈́͘͝͝͝ͅi̶̞͎͈̥͖̥͙̤͙̖͑̓̇̀͗͋͗̉̆͋̄͂̔͌̈́̎̅̐͋̇̏͆͝͝⑁̷̢̧̡͎̯͚̼̟͎̲̻̮̪̭͔̩̥̓͂̑̌̄̉̾͌̚͜͜ͅͅϱ̶̡̛͓̟͇͈͔͙̣̑͗̂̀͒̋̏̔̇͛̄̅̽̂́͝ʇ̷̢̨̧̢̼͙̯͍̺͈͙͇̞̖͍̪̹̪̬͎̭̲̈́̑̔͐̓̃̾͗̂͂̑͋̀̆̀̃͐̄̒́̀͋ͅɘ̵̢̡̡̡̻̱̟̫̤͓̣̲̮̤̖̖͊́͂̋̑̒͜b̷̡̧̨̧̟͚͖̭̱̤͔͓̬̩̳̘̞͊̃̈́͒͛̓̉̈́̃̎̓͌̑̓̚͜ɔ̶̢̡̗̣̝͙͈̞̬̭̺̘͉̲̥̯̩̭̮̝͓̥͊̅̓̾͑̽ͅd̶̡̢̧̢̡̫̬̦̣͕̯̪̫̘̜̰̉̀̅̈͆̾̊̆̋̈́̀̒̓́̓͑͘͝͝͝͠ͅɒ̴̨̨̙̞̲͉̺͖͉͚̘̤̻̻͇̄̅̈́͒̉̒͂͛̋͛͗͑̈́͋̓̏͌̑̈́͘͘͘";



   const letters_set2 = "abcdefghijklmnopqrstuvwxyz";


   const glitch_text_set = [
    "lies",
    "are you still there?",
    "remember me?"
];

   const colour_set = [
    "ff00c1", 
    "3498db",
    "fffc4f"
];

let i_count = 3;
for (let i = 0; i < i_count; i++) {
    let bg = document.getElementById("span_text");
    let glitchBox = document.createElement("div");
    glitchBox.className = "glitch_box";
    bg.appendChild(glitchBox);
}
setInterval(function () {
    let glitch = document.getElementsByClassName("glitch_box");
    
    for (let i = 0; i < glitch.length; i++) {
        glitch[i].style.left = [Math.floor(Math.random() * 20)] + "vh";
        glitch[i].style.top = [Math.floor(Math.random() * 10)] + "vw";
        glitch[i].style.width = [Math.floor(Math.random() * 2000)] + "px";
        glitch[i].style.height = [Math.floor(Math.random() * 10)] + "px";
        glitch[i].style.backgroundPosition = [(Math.random() * 100)] + "%";
        glitch[i].innerText = glitch_text_set[Math.floor(Math.random() * glitch_text_set.length)];
        glitch[i].style.fontSize = [Math.floor(Math.random() * 5)] + "em";
        glitch[i].style.color = "#" + colour_set[Math.floor(Math.random() * colour_set.length)];
    }
}, 195)


/* ================================================
          Glitch effect-typed (the cake is a lie)
   ================================================*/


// document.querySelector("span").onmousemove = event => {

//     let ite = 0;

//     const inter = setInterval(() => {
//         event.target.innerText = event.target.innerText.split("")
//             .map((letter, ind) => {
//                 if (ind < ite) {
//                     return event.target.dataset.value[ind];
//                 }

//                 return letters_set2[Math.floor(Math.random() * 26)]
//             })
//             .join("");

//         if (ite >= event.target.dataset.value.length)
//             clearInterval(inter);

//         ite += 1 / 3;
//     }, 50);
// }

document.querySelector("h2").onmouseover = event => {

    let iteH2 = 0;

    const interH2 = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, indH2) => {
                if (indH2 < iteH2) {
                    return event.target.dataset.value[indH2];
                }

                return letters_set1[Math.floor(Math.random() * letters_set1.length)]
            })
            .join("");

        if (iteH2 >= event.target.dataset.value.length)
            clearInterval(interH2);

        iteH2 += 1 / 13;
    }, 1000);
}

document.querySelector("p").onmouseover = event => {

    let iteP = 0;

    const interP = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, indP) => {
                if (indP < iteP) {
                    return event.target.dataset.value[indP];
                }

                return letters_set1[Math.floor(Math.random() * letters_set1.length)]
            })
            .join("");

        if (iteP >= event.target.dataset.value.length)
            clearInterval(interP);

        iteP += 1 / 36;
    }, 500);
}