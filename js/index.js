//电梯导航部分
$(function () {
    var scollTop = $(".remen").offset().top;
    //console.log(scollTop);
    var flag = true;

    function scoll() {
        if ($(document).scrollTop() >= scollTop - 150) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    $(window).scroll(function () {
        scoll();
        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top - 200) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
                }
            })
        }

    });


    $(".fixedtool li").click(function () {
        var index = $(this).index();
        //console.log(index);
        var current = $(".floor .w").eq(index).offset().top;
        flag = false;
        $("body, html").stop().animate({
            scrollTop: current,
        }, function () {
            flag = true;
        })
        $(this).addClass("current").siblings().removeClass("current");
    })

})

//轮播图部分
window.addEventListener('load', function () {
    //显示隐藏左右按钮
    var focus = document.querySelector('.focus');
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focusWidth = focus.offsetWidth;
    //console.log(focusWidth);
    focus.addEventListener('mouseover', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; // 清除定时器变量
    })
    focus.addEventListener('mouseout', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            //手动调用点击事件
            arrow_r.click();
        }, 2000);
    })
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    //console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
    }

    ol.children[0].className = 'current';
    li.addEventListener('click', function () {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        this.className = 'current';
        //点击小圆圈移动图片
        var index = this.getAttribute('index');
        num = circle = index;
        //console.log(focusWidth);
        animate(ul, -index * focusWidth);
        //console.log(index * focusWidth);
    })

    // 克隆第一张图片(li)放到ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            //console.log(num * focusWidth);

            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }

    });
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            //console.log(num * focusWidth);

            circle--;
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange();
        }

    });

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function () {
        //手动调用点击事件
        arrow_r.click();
    }, 2000);
})

//时间部分
$(function () {
    // 1. 获取元素 
    var hour = document.querySelector('.hour'); // 小时的黑色盒子
    var minute = document.querySelector('.minute'); // 分钟的黑色盒子
    var second = document.querySelector('.second'); // 秒数的黑色盒子
    var inputTime = +new Date('2019-5-1 18:00:00'); // 返回的是用户输入时间总的毫秒数
    countDown(); // 我们先调用一次这个函数，防止第一次刷新页面有空白 
    // 2. 开启定时器
    setInterval(countDown, 500);

    function countDown() {
        var nowTime = new Date(); // 返回的是当前时间总的毫秒数
        var h = nowTime.getHours(); //时
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h; // 把剩余的小时给 小时黑色盒子
        var m = nowTime.getMinutes(); // 分
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m;
        var s = nowTime.getSeconds(); // 当前的秒
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s;
    }
})

// 热门推荐部分
jQuery(document).ready(function ($) {
    var options = {
        $AutoPlay: true,
        $AutoPlaySteps: 1,
        $AutoPlayInterval: 0,
        $PauseOnHover: 4,
        $ArrowKeyNavigation: true,
        $SlideEasing: $JssorEasing$.$EaseLinear,
        $SlideDuration: 1600,
        $MinDragOffsetToSlide: 20,
        $SlideWidth: 250,
        //$SlideHeight: 400,
        $SlideSpacing: 0,
        $DisplayPieces: 7,
        $ParkingPosition: 0,
        $UISearchMode: 1,
        $PlayOrientation: 1,
        $DragOrientation: 1
    };

    var jssor_slider1 = new $JssorSlider$("slider1_container", options);

    function ScaleSlider() {
        var bodyWidth = document.body.clientWidth;
        if (bodyWidth)
            jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1400));
        else
            window.setTimeout(ScaleSlider, 50);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
});