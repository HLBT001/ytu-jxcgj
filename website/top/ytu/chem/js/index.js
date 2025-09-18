$(function() {
    $('.banner .slick').slick({
        autoplay: true,
        dots: true,
        arrows: true,
        accessibility: true,
        speed: 1500,
        responsive: [{
            breakpoint: 1201,
            settings: {
                dots: true
            }
        }]
    });
    $(".section2 .s1-tit ul li").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
        var i = $(this).index();
        $(".section2 .s1-bd>ul").eq(i).addClass("on").siblings().removeClass("on");
    })
});
