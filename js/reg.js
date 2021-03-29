window.onload = function () {
    var regtel = /^1[3|4|5|7|8]\d{9}$/; //手机号码的正则表达式
    var regqq = /^[1-9]\d{4,}$/; //qq号码的正则表达式
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/; //昵称的正则表达式
    var regmsg = /^\d{6}$/;
    var regpwd = /^[a-zA-Z0-9-_]{6,16}$/;
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');

    regexp(tel, regtel);
    regexp(qq, regqq);
    regexp(nc, regnc);
    regexp(pwd, regpwd);

    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class = "success_icon"></i>恭喜您输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class = "error_icon"></i>格式不正确，请重新输入';
            }
        }
    };
    surepwd.onblur = function () {
        if (this.value === pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class = "success_icon"></i>密码一致';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class = "error_icon"></i>两次密码不一致，请重新输入';
        }
    }
}