//导航栏部分
window.addEventListener('load', function () {
    // 1. 获取元素
    var cloud = document.querySelector('.cloud');
    var navitems = document.querySelector('.navitems');
    var lis = navitems.querySelectorAll('li');
    // 2. 给所有的小li绑定事件 
    // 这个current 做为筋斗云的起始位置
    var current = 0;
    for (var i = 0; i < lis.length; i++) {
        // (1) 鼠标经过把当前小li 的位置做为目标值
        lis[i].addEventListener('mouseenter', function () {
            animate(cloud, this.offsetLeft);
        });
        // (2) 鼠标离开就回到起始的位置 
        lis[i].addEventListener('mouseleave', function () {
            animate(cloud, current);
        });
        // (3) 当我们鼠标点击，就把当前位置做为目标值
        lis[i].addEventListener('click', function () {
            current = this.offsetLeft;
        });
    }
})

//搜索框
window.addEventListener('load', function () {
    var text = document.querySelector('.text');
    text.onfocus = function () { //得到焦点
        if (this.value === '请输入搜索内容...') {
            this.value = '';
        }
        this.style.color = '#333333';
    }
    text.onblur = function () { //失去焦点
        if (this.value === '') {
            this.value = '请输入搜索内容...';
        }
        this.style.color = '#999999';
    }
    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 83) {
            text.focus();
        }
    })
})

// 悬浮导航
/*联系方式tab切换*/
$(window).on('load', function () {
    $(".contact .tags_title .one").hover(function () {
        $(this).removeClass('ron');
        $(".contact .tags_title .two").addClass('ron');
        $(".contact .content2").hide();
        $(".contact .content1").show();
    }, function () {

    });
    $(".contact .tags_title .two").hover(function () {
        $(this).removeClass('ron');
        $(".contact .tags_title .one").addClass('ron');
        $(".contact .content1").hide();
        $(".contact .content2").show();
    }, function () {

    });

    /* -----QQ 侧边悬浮 ---- */
    $(".suspension .a").bind("mouseenter", function () {
        var _this = $(this);
        var s = $(".suspension");
        var isService = _this.hasClass("a-service");
        var isServicePhone = _this.hasClass("a-service-phone");
        var isQrcode = _this.hasClass("a-qrcode");
        if (isService) {
            s.find(".d-service").show().siblings(".d").hide();
        }
        if (isServicePhone) {
            s.find(".d-service-phone").show().siblings(".d").hide();
        }
        if (isQrcode) {
            s.find(".d-qrcode").show().siblings(".d").hide();
        }
    });
    $(".suspension, .suspension .a-top").bind("mouseleave", function () {
        $(".suspension").find(".d").hide();
    });
    $(".suspension .a-top").bind("mouseenter", function () {
        $(".suspension").find(".d").hide();
    });
    $(".suspension .a-top").bind("click", ".suspension .a-top", function () {
        $("html,body").animate({
            scrollTop: 0
        });
    });
    $(window).scroll(function () {
        var st = $(document).scrollTop();
        var $top = $(".suspension .a-top");
        if (st > 400) {
            $top.css({
                display: 'block'
            });
        } else {
            if ($top.is(":visible")) {
                $top.hide();
            }
        }
    })
})