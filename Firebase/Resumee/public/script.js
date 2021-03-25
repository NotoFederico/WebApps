"use strict";

let currYear = new Date().getFullYear();

$(document).ready(function () {
  $("#portfolio .thumbnail").hover(
    function () {
      $(this).children(".cust-caption").slideDown();
    },
    function () {
      $(this).children(".cust-caption").fadeOut();
    }
  );

  // spy and scroll menu boogey
  $("#navbar a.hash").click(function (e) {
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    let hash = this.hash;

    // Destination
    let scrollOffset = $(this.hash).offset().top;

    // animate
    $("html, body").animate(
      {
        scrollTop: scrollOffset,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
  });
});

document.querySelector(".year").textContent = currYear;
