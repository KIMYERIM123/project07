$(function () {
  $(".main_slide").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
  });

  $(".main_visual .menu li").on("click", function (e) {
    e.preventDefault();
    const idx = $(this).index(); //
    $(".main_slide").slick("slickGoTo", idx);
  });

  $(".main_slide").on("init afterChange", function (e, s, c) {
    const current = $(".main_slide .slick-current");
    current.addClass("on").siblings().removeClass("on");

    $(".main_visual .menu li").eq(0).addClass("on");
    $(".main_visual .menu li")
      .eq(c)
      .addClass("on")
      .siblings()
      .removeClass("on");
  });

  // $(".con_slide").slick({
  //   arrows: false,
  //   centerMode: true,
  //   centerPadding: '100px',
  //   slidesToShow: 1,
  //   // variableWidth: true
  // });

  $(".con_slide").slick({
    // dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "300px",
  });
});
