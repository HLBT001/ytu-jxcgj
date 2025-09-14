function BrowserType() {
    var userAgent = navigator.userAgent;
    var isOpera = userAgent.indexOf("Opera") > -1;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
    var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion < 9) {
            alert("浏览器版本过低，请升级或更换浏览器（谷歌、火狐等）")
            return false;
        }
    }
    if (isEdge) {
        alert("浏览器版本过低，请升级或更换浏览器（谷歌、火狐等）")
        return false;
    }
}
BrowserType()
$(function() {
    head_scroll()
    function head_scroll() {
        if ($(window).scrollTop() > 1) {
            $(".nav").stop().addClass("on");
        } else {
            $(".nav").stop().removeClass("on");
        }
    }
    $(window).scroll(function() {
        head_scroll()
    })
    $(".search-con button").click(function() {
        $(".yc-search").stop().fadeIn();
        $("html").css("overflow", "hidden");
    })
    $(".yc-search-bg").click(function() {
        $(".yc-search").stop().fadeOut();
        $("html").css("overflow-y", "visible");
    })
    $(".nav>ul>li").hover(function() {
        if ($(this).children("div").html()) {
            $(this).addClass("on");
            $(this).children("div").stop(false, true).slideDown()
        }
    }, function() {
        $(this).removeClass("on");
        $(this).children("div").stop(false, true).slideUp()
    });
    $(".menu").click(function() {
        $(".m-nav").animate({
            "right": "0"
        }, 300);
        $(this).hide()
        $(".close-menu").fadeIn();
        $("html").css("overflow", "hidden");
    })
    $(".close-menu").click(function() {
        $(".close-menu").fadeOut()
        $(".m-nav").animate({
            "right": "-100%"
        }, 300);
        $(".menu").fadeIn();
        $("html").css("overflow", "visible");
    })
    $(".m-nav>ul>li>span").click(function() {
        $(this).toggleClass("on").parent().siblings("li").find("span").removeClass("on")
        $(this).siblings("ul").slideToggle().parent().siblings("li").find("ul").slideUp()
    })
    $(".leftNav>h2 span").click(function() {
        $(this).toggleClass("on");
        $(".leftNav>ul").stop().slideToggle();
    })
    $(".leftNav>ul>li>span").click(function() {
        $(this).parent().stop().toggleClass("on").siblings("li").removeClass("on");
        $(this).siblings("ul").stop().slideToggle(300).parent().siblings().find("ul").stop().slideUp();
    })
})
