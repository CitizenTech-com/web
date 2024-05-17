"use strict";
document.addEventListener("DOMContentLoaded", function () {

    $(function ($) {
        // Home age hero section Sliders
        let consulMonthCarousel2 = document.querySelector('.live-playing');
        if (consulMonthCarousel2) {
            const swiper = new Swiper(consulMonthCarousel2, {
                loop: 1,
                speed: 5000,
                autoplay: {
                    delay: false,
                    disableOnInteraction: false,
                },
                spaceBetween: 24,
                slidesPerView: 1,
                paginationClickable: true,
                breakpoints: {
                    1799: {
                        slidesPerView: 3.5,
                    },
                    1499: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 1.5,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                }
            });
        }

        let consulMonthCarousel3 = document.querySelector('.live-playing2');
        if (consulMonthCarousel3) {
            const swiper = new Swiper(consulMonthCarousel3, {
                loop: 1,
                speed: 5000,
                autoplay: {
                    delay: false,
                    disableOnInteraction: false,
                },
                spaceBetween: 24,
                slidesPerView: 1,
                paginationClickable: true,
                breakpoints: {
                    1799: {
                        slidesPerView: 4,
                    },
                    1499: {
                        slidesPerView: 3,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 1.5,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                }
            });
        }

        // Foooter Brand Sliders Starts
        let brandConsul = document.querySelector('.brand-slider');
        if (brandConsul) {
            const swiper = new Swiper(brandConsul, {
                loop: 50,
                speed: 2000,
                autoplay: {
                    delay: false,
                    disableOnInteraction: false,
                },
                spaceBetween: 24,
                slidesPerView: 3,
                paginationClickable: true,
                breakpoints: {
                    1799: {
                        slidesPerView: 15,
                    },
                    1499: {
                        slidesPerView: 13,
                    },
                    1199: {
                        slidesPerView: 10,
                    },
                    991: {
                        slidesPerView: 8,
                    },
                    768: {
                        slidesPerView: 7,
                    },
                    575: {
                        slidesPerView: 5,
                    },
                    480: {
                        slidesPerView: 4,
                    },
                    375: {
                        slidesPerView: 4,
                    },
                }
            });
        }
        // Foooter Brand Sliders Ends

        /* niceSelect */
        $("select").niceSelect();
          
    });
});