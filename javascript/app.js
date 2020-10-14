$(document).ready(function () {
  $(".card").click(function () {
    window.location = $(this).find("a").attr("href");
  });
});

$(document).ready(function () {
  $(".carde").click(function () {
    window.location = $(this).find("a").attr("href");
  });
});

$(document).ready(function () {
  $(".items").click(function () {
    window.location = $(this).find("a").attr("href");
  });
});

$(function () {
  $(window).bind("resize", function () {
    console.log($(this).width());
    if ($(this).width() < 500) {
      $("#left_nav").removeClass("pad");
      $("#head").addClass("small_h1");
      $("#name").addClass("small_p")
      $(".item").addClass("small_i");
    } else {
      $("#left_nav").addClass("pad");
    }
  });
});

$(function () {
  if ($(window).width()<=500) {
    $("#left_nav").removeClass("pad");
    $("#head").addClass("small_h1");
    $("#name").addClass("small_p")
    $(".item").addClass("small_i");
  } else {
    $("#left_nav").addClass("pad");
  }
});