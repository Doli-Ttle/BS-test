const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}



// Bootstrap multiple item carousel

// var multipleCardCarousel = document.querySelector("#carouselExampleControls");

// if (window.matchMedia("(min-width: 576px)").matches) {
//     var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//         interval: false
//     });
//     var carouselWidth = $(".min-holder")[0].scrollWidth;
//     var cardWidth = $(".min-item").width();
//     var scrollPosition = 0;
//     $("#carouselExampleControls .next").on("click", function () {
//         if (scrollPosition < carouselWidth - cardWidth * 3) {
//         scrollPosition += cardWidth;
//         $("#carouselExampleControls .min-holder").animate(
//             { scrollLeft: scrollPosition },
//             600
//         );
//         }
//     });
//     $("#carouselExampleControls .prev").on("click", function () {
//         if (scrollPosition > 0) {
//         scrollPosition -= cardWidth;
//         $("#carouselExampleControls .min-holder").animate(
//             { scrollLeft: scrollPosition },
//             600
//         );
//         }
//     });
//     } else {
//     $(multipleCardCarousel).addClass("slide");
// }
