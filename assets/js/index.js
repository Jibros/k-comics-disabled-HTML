var isAnim = false;
// var cdn = 'https://howlight.speedgabia.com/';
var cdn = '';

function checkMobile() {
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
    if(varUA.indexOf('android') > -1) {
        //안드로이드
        return "android";
    } else if(varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 || varUA.indexOf("ipod") > -1) {
        //IOS
        return "ios";
    } else {
        //아이폰, 안드로이드 외
        return "other";
    }
}

$(document).ready(function() {
    var isMo = isMobile();
    if("ios" == checkMobile()) $("#footer > span").css("top", "5px");

    if(!isMo) {
        $(".item-box").on("mouseover", function(e) {
            TweenMax.to($(this).children(".icon-img").children("img"), 0.7, {
                opacity : 1,
                scale : $(this).children(".icon-img").hasClass("yt-btn") ? 1.1 : 1
            });
        });
        $(".item-box").on("mouseout", function(e) {
            TweenMax.to($(this).children(".icon-img").children("img"), 0.2, {
                opacity : $(this).children(".icon-img").hasClass("yt-btn") ? 0.6 : 0,
                scale : 1
            });
        });
    }

    if(isMo) {
        $('.wrapper').on('scroll', function(e) {
            if($('.bg').offset().left < -100) {
                TweenMax.to($('#arrow'), 0.5, {autoAlpha : 0, display : 'none'});
            } else {
                TweenMax.to($('#arrow'), 0.5, {autoAlpha : 0.9, display : 'block'});
            }
        });
    }

    $(".items").each(function(idx, dom) {
        var name = $(".items").eq(idx).attr("director");
        if(name == "" || name == undefined || !name || $(".items").eq(idx).hasClass("no")) return;
        var item_splits = $(".items").eq(idx).attr("alt").split("|")[0].split("]")
        var item_name = item_splits[0] + "]";
        // var item_summary_idx = item_splits[1].lastIndexOf(" ");
        // var item_summary = item_splits[1].substr(0, item_summary_idx);

        // $(".items").eq(idx).append("<span><p class='fir'>" + name + "</p><p>" + item_name + "</p><p>" + item_summary + "</span>");
    });

    $(".simpleBtns").on('click', function(e) {
        var tId = this.id;
        switch(tId) {
            case "page0" :
                changePage(0);
                break;
            case "page1" :
                changePage(1);
                break;
            case "page2" :
                changePage(2);
                break;
            case "page3" :
                changePage(3);
                break;
            case "page4" :
                changePage(4);
                break;
            case "page5" :
                changePage(5);
                break;
            case "page6" :
                changePage(6);
                break;
            case "page7" :
                changePage(7);
                break;
            case "page8" :
                changePage(8);
                break;
            case "page9" :
                changePage(9);
                break;
            case "page10" :
                changePage(10);
                break;
            case "page11" :
                changePage(11);
                break;
            case "page99" :
                $(".wrapper").stop().animate({
                        scrollLeft : $(".wrapper")[0].scrollWidth - window.innerWidth
                    },
                    {
                        progress : function() {
                            if(!isMo) {
                                var percentage = Math.round($(".wrapper").scrollLeft() / ($(".wrapper")[0].scrollWidth - window.innerWidth) * 100);
                                $(".scroll-nav-jog").css("left", percentage + "%");
                            }
                        }
                    }, 700);
                break;

            case "popContentsLeft" :
                popArrHandler(true);
                break;
            case "popContentsRight" :
                popArrHandler(false);
                break;

            case "naver" :
                window.open("https://blog.naver.com/komacon01", '_blank');
                break;
            case "youtube" :
                window.open("https://www.youtube.com/channel/UCcMqhLUStnwZUab4_e4REbg", '_blank');
                break;
            case "facebook" :
                window.open("https://www.facebook.com/profile.php?id=100001623896949", '_blank');
                break;

            case "video1" :
                $("#vodPop").find("#vodContainer").append("<iframe src='https://tv.naver.com/embed/22635308?autoPlay=true' frameborder='no' scrolling='no' marginwidth='0' marginheight='0' width='100%' height='100%' allow='autoplay' allowfullscreen></iframe>");
                $("#vodPop").fadeIn();
                break;
            case "video2" :
                $("#vodPop").find("#vodContainer").append("<iframe src='https://tv.naver.com/embed/22635218?autoPlay=true' frameborder='no' scrolling='no' marginwidth='0' marginheight='0' width='100%' height='100%' allow='autoplay' allowfullscreen></iframe>");
                $("#vodPop").fadeIn();
                break;
            case "video3" :
                $("#vodPop").find("#vodContainer").append("<iframe src='https://tv.naver.com/embed/22635225?autoPlay=true' frameborder='no' scrolling='no' marginwidth='0' marginheight='0' width='100%' height='100%' allow='autoplay' allowfullscreen></iframe>");
                $("#vodPop").fadeIn();
                break;
            case "video4" :
                $("#vodPop").find("#vodContainer").append("<iframe src='https://www.youtube.com/embed/uvDgghGtcOQ?autoplay=1' title='YouTube video player' frameborder='0' width='100%' height='100%' allow='autoplay' allowfullscreen></iframe>");
                $("#vodPop").fadeIn();
                break;
            case "video5" :
                $("#vodPop").find("#vodContainer").append("<iframe src='https://www.youtube.com/embed/0VEXLKYjg28?autoplay=1' title='YouTube video player' frameborder='0' width='100%' height='100%' allow='autoplay;' allowfullscreen></iframe>");
                $("#vodPop").fadeIn();
                break;
        }
    });

    function changePage($idx) {
        $("body").attr('class', '').addClass("floor" + $idx);
        stopVideo();

        $(".flos").hide();

        $(".flo" + $idx).show();
        $(".scroll-nav-jog").css("left", "0");
        $(".menus > div").removeClass("active");
        if($idx == 0) {
            $("#page" + $idx).addClass("active");
        } else {
            $("#page99").addClass("active");
        }
        // $("#page" + $idx).addClass("active");
        $(".wrapper").scrollLeft(0);
    }

    changePage(0);

    $(".closeBtns, #slidePop .dimd, #vodPop .dimd").on('click', function(e) {
        // video1~5 숨기고 영역 삭제
        $("#vodPop").hide();
        $("#vodPop").find("#vodContainer").html("");

        $("#ytPop").hide();
        hidePopup();
        $(".mo, .infody").css("overflow-y", "hidden");

        stopVideo();
    });

    $(".page0").on("click", function() {
        if($(this).hasClass("yt")) {
            ytPopHandler($(this));
            return;
        }
        var idx = $(".page1.intro").index(this);
        showTextPopup(idx);
    });

    $(".detail,.page1,.page2,.page3,.page4,.page5,.page6,.page7,.page8,.page9,.page10,.page11").on("click", function() {
        if($(this).hasClass("yt")) {
            ytPopHandler($(this));
            return;
        }

        showArtPopup(this);
    });

    function ytPopHandler($this) {
        var w = Number($this.attr("w"));
        var h = Number($this.attr("h"));
        ytPlayer.loadVideoById($this.attr("vid"));
        $("#ytPop .popup_wrapper").css({
            "width" : w + "vw",
            "height" : h + "vw",
            "margin-top" : "-" + h / 2 + "vw",
            "margin-left" : "-" + w / 2 + "vw"
        });
        $("#ytPop").fadeIn();
        playVideo();
    }

    function showTextPopup($idx) {
        popupInit();
        $("#slidePop > .popup_wrapper .contents").append("<div>" + INTRO_DATA[$idx] + "</div><b>" + INTRO_NAME[$idx] + "</b>");
    }

    function popupInit() {
        $("#slidePop").fadeIn();
        $("#slidePop > .popup_wrapper> .contents").html("");
        $("#slidePop .popup_wrapper .nav").html("");
        $("#slidePop .popup_wrapper .bliss").html("");
        $("#slidePop .popup_wrapper .alt").html("");
        $("#slidePop .popup_wrapper .arrow").hide();
        $("#slidePop .popup_wrapper .nav div").off("click");
        $("#slidePop .popup_wrapper .bliss div").off("click");
        arrIdx = 0;
    }

    var arrIdx = 0;
    var arrMax = 0;
    var altArr = [];

    function showArtPopup($this) {
        var len = Number($($this).attr("itemlength"));
        var itemName = $($this).attr("itemName");
        var appendDom = "";

        altArr = []; // alt초기화
        if($this.id === "info"){ // 자세히보기 팝업
            $("#slidePop").addClass("infoPopup")
            popupInit();
            arrMax = len - 1;
            for(var i = 0; i < len; i++) {
                appendDom += "<img src='" + cdn + "assets/images/" + itemName + "_" + String(i + 1) + ".png'/>";
                if(arrMax!=0){
                    $("#slidePop .popup_wrapper .bliss").append("<div></div>");
                }
            }

            if(arrMax!=0){
                $("#slidePop .popup_wrapper .bliss div").eq(0).addClass("active");
                $("#slidePop.infoPopup .popup_wrapper .left").hide();
                $("#slidePop.infoPopup .popup_wrapper .right").show();
            }
            $("#slidePop.infoPopup .popup_wrapper .contents").append(appendDom);

            $("#slidePop .popup_wrapper .bliss div").on("click", function() {
                var idx = $("#slidePop .popup_wrapper .bliss div").index(this);
                if(idx == arrIdx) return;
                itemChangeHandler(idx);
            });
        }else{
            altArr = $($this).attr("alt").split("|");
            $("#slidePop").removeClass("infoPopup")
            popupInit();
            arrMax = len - 1;
            for(var i = 0; i < len; i++) {
                appendDom += "<img src='" + cdn + "assets/images/arts/" + itemName + "_" + String(i + 1) + ".png'/>";
                $("#slidePop .popup_wrapper .nav").append("<div></div>");
                if(arrMax>2 && i != 0){
                    $("#slidePop .popup_wrapper .bliss").append("<div></div>");
                }
                $("#slidePop .popup_wrapper .bliss div").hide();
            }

            $("#slidePop .popup_wrapper .nav div").eq(0).addClass("active");
            $("#slidePop .popup_wrapper .left, #slidePop .popup_wrapper .right").hide();
            $("#slidePop .popup_wrapper .contents").append(appendDom);
            $("#slidePop .popup_wrapper .nav div").on("click", function() {
                var idx = $("#slidePop .popup_wrapper .nav div").index(this);
                if(idx == arrIdx) return;
                itemChangeHandler(idx);
            });

            $("#slidePop .popup_wrapper .bliss div").on("click", function() {
                var idx = $("#slidePop .popup_wrapper .bliss div").index(this) + 1;

                if(idx == arrIdx) return;
                itemChangeHandler(idx);
            });
        }
    }

    $(function() {
        //Enable swiping...
        /* $(".popup_wrapper> .contents").swipe({
            swipe : function(event, direction, distance, duration, fingerCount, fingerData) {
                console.log(direction, isAnim);
                if(direction == null) return;
                (direction == "right") ? popArrHandler(true) : popArrHandler(false);
            },
            threshold : 0,
            duration: 0
        }); */
    });

    function popArrHandler(isLeft) {
        if(isAnim) return;
        isAnim = true;
        var nextIdx = isLeft ? arrIdx - 1 : arrIdx + 1;

        if(nextIdx < 0 || nextIdx > arrMax) {
            isAnim = false;
            return;
        }

        itemChangeHandler(nextIdx);
    }

    function itemChangeHandler(nextIdx) {
        var isLeft = arrIdx > nextIdx;
        var $cItem = $("#slidePop .popup_wrapper .contents img").eq(arrIdx);
        var $nItem = $("#slidePop .popup_wrapper .contents img").eq(nextIdx);

        $cItem.css("left", "0");
        $nItem.css("left", isLeft ? "-100%" : "100%");

        TweenMax.to($cItem, 0, {left : isLeft ? "100%" : "-100%"});
        TweenMax.to($nItem, 0, {
            left : "0%", onComplete : function() {
                isAnim = false;
                arrIdx = nextIdx;
            }
        });

        $("#slidePop .popup_wrapper .arrow").show();

        if(nextIdx == arrMax) $("#slidePop .popup_wrapper .right").hide();


        if(nextIdx < 1) {
            $("#slidePop .popup_wrapper .left").hide();
        }

        var infoPop = $("#slidePop").hasClass("infoPopup");
        if(!infoPop){
            if(nextIdx <= 1) {
                $("#slidePop .popup_wrapper .left").hide();
            }
            if(nextIdx == 0 || arrMax < 2) {
                $("#slidePop .popup_wrapper .left, #slidePop .popup_wrapper .right").hide();
            }
            if(arrMax < 2 || nextIdx < 1) {
                $("#slidePop .popup_wrapper .bliss div").hide();
            } else {
                $("#slidePop .popup_wrapper .bliss div").show();
            }
        }


        // $("#slidePop .popup_wrapper .alt").html((nextIdx - 1 >= 0) ? altArr[nextIdx - 1] : "");
        $("#slidePop .popup_wrapper .nav div").removeClass("active");
        $("#slidePop .popup_wrapper .nav div").eq(nextIdx).addClass("active");
        if(!infoPop) {
            $("#slidePop .popup_wrapper .bliss div").removeClass("active");
            $("#slidePop .popup_wrapper .bliss div").eq(nextIdx - 1).addClass("active");
        } else {
            $("#slidePop .popup_wrapper .bliss div").removeClass("active");
            $("#slidePop .popup_wrapper .bliss div").eq(nextIdx).addClass("active");
        }
    }

    function hidePopup() {
        $("#slidePop").hide().removeClass("infoPopup");

    }

    $(".video").on("click", function(e) {
        slidePopId = $(this).attr("contents");
        showslidePop(slidePopId);
        return false;
    });
    $(".pdf").on("click", function(e) {
        var redirectWindow = window.open($(this).attr("pdf"), '_blank');
        redirectWindow.location;
    });


// var sqIdx = 0;
// var SQ_MAX_IDX = 15;
// function sqAnim(){
//   setTimeout(function(){
//     if($(".wrapper").scrollLeft()/$(".bg").width() > 0.05 ){
//       $(".sq > img").css("visibility","hidden");
//       return;
//     }
//     $(".sq > img").css("visibility","hidden");
//     $(".sq > img").eq(sqIdx).css("visibility","initial");//initial
//     sqIdx++;
//     if(sqIdx > SQ_MAX_IDX) sqIdx = 0;
//     sqAnim();
//   },50);
// }
// sqAnim();

// ===================================================================================
// scroll Handler
// ===================================================================================
    var $slider = document.querySelector('.wrapper');
    var $jog = document.querySelector(".scroll-nav-jog");
    var isDown = false;
    var startX;
    var scrollLeft;

    if(!isMo) {
        $slider.addEventListener('mousedown', function(e) {
            isDown = true;
            $slider.classList.add('active');
            startX = e.pageX - $slider.offsetLeft;
            scrollLeft = $slider.scrollLeft;
            cancelMomentumTracking();
        });

        $slider.addEventListener('mouseleave', function() {
            isDown = false;
            $slider.classList.remove('active');
        });

        $slider.addEventListener('mouseup', function() {
            isDown = false;
            $slider.classList.remove('active');
            beginMomentumTracking();
        });

        $slider.addEventListener('mousemove', function(e) {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - $slider.offsetLeft;
            const walk = (x - startX) * 2; //scroll-fast
            var prevScrollLeft = $slider.scrollLeft;
            $slider.scrollLeft = scrollLeft - walk;
            velX = $slider.scrollLeft - prevScrollLeft;

            updateNavigation($slider.scrollLeft);
        });

        // Momentum

        var velX = 0;
        var momentumID;

        $slider.addEventListener('wheel', function(e) {
            cancelMomentumTracking();
            e = window.event || e;
            console.log(e.deltaX);
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            document.getElementById('contents').scrollLeft -= (delta * 100); // Multiplied by 40
            e.preventDefault();

            updateNavigation(document.getElementById('contents').scrollLeft);
        });
        // if (document.getElementById('contents').addEventListener) {
        //     // IE9, Chrome, Safari, Opera
        //     document.getElementById('contents').addEventListener("mousewheel", scrollHorizontally, false);
        //     // Firefox
        //     document.getElementById('contents').addEventListener("DOMMouseScroll", scrollHorizontally, false);
        // } else {
        //     // IE 6/7/8
        //     document.getElementById('contents').attachEvent("onmousewheel", scrollHorizontally);
        // }

        function beginMomentumTracking() {
            cancelMomentumTracking();
            momentumID = requestAnimationFrame(momentumLoop);
        }

        function cancelMomentumTracking() {
            cancelAnimationFrame(momentumID);
        }

        function momentumLoop() {
            if($slider.scrollLeft >= $slider.scrollWidth - window.innerWidth) {
                cancelAnimationFrame(momentumID);
                return;
            }

            $slider.scrollLeft += velX;
            velX *= 0.95;
            if(Math.abs(velX) > 0.5) {
                momentumID = requestAnimationFrame(momentumLoop);
            } else {
                cancelAnimationFrame(momentumID);
            }

            updateNavigation($slider.scrollLeft);
        }

        function updateNavigation(velX) {
            var maxLeftSize = $slider.scrollWidth - window.innerWidth;
            var leftPer = (velX / maxLeftSize) * 100;
            $(".scroll-nav-jog").css("left", leftPer + "%");
        }

        let isDownJog = false;
        var jogStartX = 0;
        var jogOriX = 0;

        $(".scroll-nav-jog").on("mousedown", function(e) {
            isDownJog = true;
            jogStartX = event.clientX;
            $(".scroll-nav-jog").css("transform", "scale( 1.2 )");
            jogOriX = Number($(".scroll-nav-jog").css("left").split("px")[0]);
        });
        $(window).on("mouseup", function(e) {
            isDownJog = false;
            $(".scroll-nav-jog").css("transform", "scale( 1 )");
        });

        $(window).on("mousemove", function(e) {
            if(!isDownJog) return;
            var maxLeftSize = $slider.scrollWidth - window.innerWidth;
            var val = jogOriX - (jogStartX - event.clientX);
            var scrollW = $(".scroll-nav").width();
            var sleft = maxLeftSize * (val / scrollW);

            if(val < 0) val = 0;
            else if(val > scrollW) val = scrollW;
            $(".scroll-nav-jog").css("left", val + "px");

            console.log(val / scrollW, maxLeftSize);
            $slider.scrollLeft = sleft;
        });
    } else {
        $(".introCover").hide();
        $("html").addClass("mo");
    }

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
});

/*!
 * jQuery.scrollTo
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * https://github.com/flesler/jquery.scrollTo
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function(factory) {
    'use strict';
    if(typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if(typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    'use strict';

    var $scrollTo = $.scrollTo = function(target, duration, settings) {
        return $(window).scrollTo(target, duration, settings);
    };

    $scrollTo.defaults = {
        axis : 'xy',
        duration : 0,
        limit : true
    };

    function isWin(elem) {
        return !elem.nodeName ||
            $.inArray(elem.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) !== -1;
    }

    $.fn.scrollTo = function(target, duration, settings) {
        if(typeof duration === 'object') {
            settings = duration;
            duration = 0;
        }
        if(typeof settings === 'function') {
            settings = {onAfter : settings};
        }
        if(target === 'max') {
            target = 9e9;
        }

        settings = $.extend({}, $scrollTo.defaults, settings);
        // Speed is still recognized for backwards compatibility
        duration = duration || settings.duration;
        // Make sure the settings are given right
        var queue = settings.queue && settings.axis.length > 1;
        if(queue) {
            // Let's keep the overall duration
            duration /= 2;
        }
        settings.offset = both(settings.offset);
        settings.over = both(settings.over);

        return this.each(function() {
            // Null target yields nothing, just like jQuery does
            if(target === null) return;

            var win = isWin(this),
                elem = win ? this.contentWindow || window : this,
                $elem = $(elem),
                targ = target,
                attr = {},
                toff;

            switch(typeof targ) {
                // A number will pass the regex
                case 'number':
                case 'string':
                    if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                        targ = both(targ);
                        // We are done
                        break;
                    }
                    // Relative/Absolute selector
                    targ = win ? $(targ) : $(targ, elem);
                /* falls through */
                case 'object':
                    if(targ.length === 0) return;
                    // DOMElement / jQuery
                    if(targ.is || targ.style) {
                        // Get the real position of the target
                        toff = (targ = $(targ)).offset();
                    }
            }

            var offset = $.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;

            $.each(settings.axis.split(''), function(i, axis) {
                var Pos = axis === 'x' ? 'Left' : 'Top',
                    pos = Pos.toLowerCase(),
                    key = 'scroll' + Pos,
                    prev = $elem[key](),
                    max = $scrollTo.max(elem, axis);

                if(toff) {// jQuery / DOMElement
                    attr[key] = toff[pos] + (win ? 0 : prev - $elem.offset()[pos]);

                    // If it's a dom element, reduce the margin
                    if(settings.margin) {
                        attr[key] -= parseInt(targ.css('margin' + Pos), 10) || 0;
                        attr[key] -= parseInt(targ.css('border' + Pos + 'Width'), 10) || 0;
                    }

                    attr[key] += offset[pos] || 0;

                    if(settings.over[pos]) {
                        // Scroll to a fraction of its width/height
                        attr[key] += targ[axis === 'x' ? 'width' : 'height']() * settings.over[pos];
                    }
                } else {
                    var val = targ[pos];
                    // Handle percentage values
                    attr[key] = val.slice && val.slice(-1) === '%' ?
                        parseFloat(val) / 100 * max
                        : val;
                }

                // Number or 'number'
                if(settings.limit && /^\d+$/.test(attr[key])) {
                    // Check the limits
                    attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                }

                // Don't waste time animating, if there's no need.
                if(!i && settings.axis.length > 1) {
                    if(prev === attr[key]) {
                        // No animation needed
                        attr = {};
                    } else if(queue) {
                        // Intermediate animation
                        animate(settings.onAfterFirst);
                        // Don't animate this axis again in the next iteration.
                        attr = {};
                    }
                }
            });

            animate(settings.onAfter);

            function animate(callback) {
                var opts = $.extend({}, settings, {
                    // The queue setting conflicts with animate()
                    // Force it to always be true
                    queue : true,
                    duration : duration,
                    complete : callback && function() {
                        callback.call(elem, targ, settings);
                    }
                });
                $elem.animate(attr, opts);
            }
        });
    };

    // Max scrolling position, works on quirks mode
    // It only fails (not too badly) on IE, quirks mode.
    $scrollTo.max = function(elem, axis) {
        var Dim = axis === 'x' ? 'Width' : 'Height',
            scroll = 'scroll' + Dim;

        if(!isWin(elem))
            return elem[scroll] - $(elem)[Dim.toLowerCase()]();

        var size = 'client' + Dim,
            doc = elem.ownerDocument || elem.document,
            html = doc.documentElement,
            body = doc.body;

        return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
    };

    function both(val) {
        return $.isFunction(val) || $.isPlainObject(val) ? val : {top : val, left : val};
    }

    // Add special hooks so that window scroll properties can be animated
    $.Tween.propHooks.scrollLeft =
        $.Tween.propHooks.scrollTop = {
            get : function(t) {
                return $(t.elem)[t.prop]();
            },
            set : function(t) {
                var curr = this.get(t);
                // If interrupt is true and user scrolled, stop animating
                if(t.options.interrupt && t._last && t._last !== curr) {
                    return $(t.elem).stop();
                }
                var next = Math.round(t.now);
                // Don't waste CPU
                // Browsers don't render floating point scroll
                if(curr !== next) {
                    $(t.elem)[t.prop](next);
                    t._last = this.get(t);
                }
            }
        };

    // AMD requirement
    return $scrollTo;
});


/*==========================================================================================================================================================*/

/* !-----  Youtube */

/*==========================================================================================================================================================*/
//유튜브 변수
var videoReady = false;

function ytInit() {
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// ytInit();

function playVideo() {
    if(ytPlayer && videoReady) ytPlayer.playVideo();
}

function stopVideo() {
    if(!videoReady) return;
    if(ytPlayer) ytPlayer.stopVideo();
}

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('ytContainer', {
        height : '100%',
        width : '100%',
        videoId : 'gmR_5PcG_1Q',
        playerVars : {'rel' : 0, 'autoplay' : 0, 'showinfo' : 0},
        events : {
            'onReady' : onPlayerReady,
            'onStateChange' : onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    videoReady = true;
}

function onPlayerStateChange(event) {
    switch(event.data) {
        case YT.PlayerState.PLAYING :
            break;
        case -1 :
            break;
    }
}
