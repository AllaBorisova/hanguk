jQuery(document).ready(function ($) {
  $("[type=tel]").mask("+7 (999) 999-99-99");

  $(".count__plus").click(function () {
    let count = $(this).parent().find("input").val();
    count++;
    $(this).parent().find("input").val(count);
  });
  $(".count__minus").click(function () {
    let count = $(this).parent().find("input").val();
    if (count <= 1) {
      count = 1;
    } else {
      count--;
    }
    $(this).parent().find("input").val(count);
  });

  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("is-active");
    $("body").toggleClass("open-menu");
  });

  // $(".section-hero__slider").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   dots: false,
  //   autoplaySpeed: 2000,
  //   prevArrow: "<button type='button' class='slick-prev'></button>",
  //   nextArrow: "<button type='button' class='slick-next'></button>",
  // });

  $(".show-sidebar-cart").click(function (e) {
    e.preventDefault();
    $("body").addClass("sidebar-active");
  });
  $(".sidebar-cart__close, .hide-sidebar-cart").click(function () {
    $("body").removeClass("sidebar-active");
  });

  $(".open-popup-link").magnificPopup({
    type: "inline",
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });
  $(".vacancies__item").click(function () {
    $(this).toggleClass("active");
  });

  const resumeImg1 = $(".resume-img1");
  const resumeImg2 = $(".resume-img2");
  const resumeImg3 = $(".resume-img3");

  const mainImg1 = $(".main-img1");
  const mainImg2 = $(".main-img2");
  const mainImg3 = $(".main-img3");
  const mainImg4 = $(".main-img4");
  const mainImg5 = $(".main-img5");
  const mainImg6 = $(".main-img6");
  const mainStarBig = $(".main-star-big");
  const mainStarMin = $(".main-star-min");
  const mainImg7 = $(".main-img7");
  const mainImg8 = $(".main-img8");
  const mainImg9 = $(".main-img9");
  const mainImg10 = $(".main-img10");
  const mainImg11 = $(".main-img11");
  const mainImg12 = $(".main-img12");

  const vacancyImg1 = $(".vacancy-img1");
  const vacancyImg2 = $(".vacancy-img2");
  const vacancyImg3 = $(".vacancy-img3");
  const vacancyImg4 = $(".vacancy-img4");
  const vacancyImg5 = $(".vacancy-img5");

  const layer = $(".parallax");

  function count(Img, e, number, sign) {
    const valueX = (e.pageX * sign) / number;
    const valueY = (e.pageY * sign) / number;
    Img.css("transform", "translate3d(" + valueX + "px," + valueY + "px, 0)");
  }

  layer.mousemove(function (e) {
    count(resumeImg1, e, 20, -1);
    count(resumeImg2, e, 40, -1);
    count(resumeImg3, e, 60, 1);

    count(mainImg1, e, 20, -1);
    count(mainImg2, e, 40, -1);
    count(mainImg3, e, 60, 1);
    count(mainImg4, e, 20, 1);
    count(mainImg5, e, 30, -1);
    count(mainImg6, e, 70, -1);
    count(mainStarBig, e, 30, -1);
    count(mainStarMin, e, 70, -1);
    count(mainImg7, e, 20, -1);
    count(mainImg8, e, 40, 1);
    count(mainImg9, e, 80, -1);
    count(mainImg10, e, 40, 1);
    count(mainImg11, e, 60, -1);
    count(mainImg12, e, 40, 1);

    count(vacancyImg1, e, 100, 1);
    count(vacancyImg2, e, 20, -1);
    count(vacancyImg3, e, 60, 1);
    count(vacancyImg4, e, 20, 1);
    count(vacancyImg5, e, 50, -1);
  });

  // resumeImg1.css(
  //   "transform",
  //   "translate3d(" + valueX1 + "px," + valueY1 + "px, 0)"
  // );
  // resumeImg2.css(
  //   "transform",
  //   "translate3d(" + valueX2 + "px," + valueY2 + "px, 0)"
  // );
  // resumeImg3.css(
  //   "transform",
  //   "translate3d(" + valueX3 + "px," + valueY3 + "px, 0)"
  // );

  //like circle image
  const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add("reveal-circle");
      }
    });
  });

  observer.observe(document.querySelector(".section-six__center"));

  //like slider

  $(".section-hero__after div").click(function () {
    $(".section-hero__after div.active").removeClass("active");
    $(this).removeClass("first-transform second-transform third-transform");
    $(this).addClass("active");
    const nameImg = $(this).data("name");
    $(".section-hero__name").text(nameImg);

    const textImg = $(this).data("text");
    $(".section-hero__text").text(textImg);

    const linkImg = $(this).data("link");
    $(".section-hero__link").attr("href", linkImg);

    $(".section-hero__after div:not(.active)").each(function (index) {
      // $(this).removeClass("active");
      if (index === 1) {
        $(this).removeClass("second-transform third-transform");
        $(this).addClass("first-transform");

        //$(this).css("transform", "translate(-44.2rem, 0px)");
      } else if (index === 2) {
        $(this).removeClass("first-transform third-transform");
        $(this).addClass("second-transform");

        //$(this).css("transform", "translate(-31.8rem, 0px)");
      } else {
        $(this).removeClass("second-transform first-transform");
        $(this).addClass("third-transform");
        //$(this).css("transform", "translate(-19.4rem, 0px)");
      }
    });
  });
  $(".section-hero__arrow-left").click(function () {
    const prev = $(".section-hero__after div.active").prev();
    // $( ".section-hero__after div.active" ).prev().click();
    //console.log($(".section-hero__after div.active").index());
    if (prev.length == 0) {
      $(".section-hero__after div:last-child").click();
    } else {
      prev.click();
    }
  });
  $(".section-hero__arrow-right").click(function () {
    const next = $(".section-hero__after div.active").next();
    // $( ".section-hero__after div.active" ).prev().click();
    // console.log(next);
    if (next.length == 0) {
      $(".section-hero__after div:first-child").click();
    } else {
      next.click();
    }
  });
  setInterval(function () {
    // console.log("+");
    $(".section-hero__arrow-right").click();
  }, 4000);
});
