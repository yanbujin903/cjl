// 加载页
setTimeout(() => {
    var load = 0
    var arr = new Array();
    $('img').each(function (index, ele) {
        if ($(this).attr('src') !== '') {
            arr.push($(this).attr('src'))
        }
    })
    var len = arr.length
    for (var i in arr) {
        var bimg = new Image();
        bimg.src = arr[i];
        bimg.onload = function () {
            load += 1;
            $('.loading .warp .line div').css({
                width: load / len * 100 + '%',
            })
            if (len === load) {
                setTimeout(() => {
                    $('.loading').addClass('events_active')
                }, 1000)
            }
        }
    }
}, 10)


// 滚动条下拉，出现背景颜色，以及改变logo
window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    console.log(scroll)
    if (scroll > 50) {
        console.log(111)
        $('#navigation').css({
            'background': '#fff',
            'transition': '0.5s'
        })
        $('.content,li,.nae').css({
            'color': '#000'
        })
        $('.logo').css({
            'background-image': 'url(https://s1.ax1x.com/2022/08/06/vuT9z9.png)'
        })
    } else {
        $('#navigation').css({
            'background': 'none',
            'transition': '0.2s'
        })
        $('.content,li,.nae').css({
            'color': 'aliceblue'
        })
        $('.logo').css({
            'background-image': 'url(../img/logof.png)'
        })
        $('.logo').css({
            'background-image': 'url(https://s1.ax1x.com/2022/08/06/vuTpRJ.png)'
        })
    }
}

// 时间
// JS月份从0~11
let dTimeStart = new Date();
let dTimeEnd = new Date("2022-8-9 0:0:00");
let dTimes = (dTimeEnd - dTimeStart) / 1000;
function dTime() {
    if (dTimes >= 0) {
        dTimes -= 1;
        // 需要 秒 分钟 小时  天
        let second = Math.floor(dTimes % 60);
        let minute = Math.floor((dTimes / 60) % 60);
        let hour = Math.floor((dTimes / 3600) % 24);
        let day = Math.floor(dTimes / (3600 * 24));
        $('.StudyHard').text(day + " 天 " + hour + " 小时 " + minute + " 分 " + second + " 秒 ");
    }
}
function cTime() {
    // if(dTimes>=0){
    dTimes += 1;
    // 需要 秒 分钟 小时  天
    let second = Math.floor(dTimes % 60);
    let minute = Math.floor((dTimes / 60) % 60);
    let hour = Math.floor((dTimes / 3600) % 24);
    let day = Math.floor(dTimes / (3600 * 24));
    day >= 1 ? day : day += 1;
    $('#banner .establish h1 .time').text(+day + "天" + hour + "小时" + minute + "分" + second);
}
if (dTimes >= 0) {
    dTime();
    setInterval(dTime, 1000);
} else {
    dTimes = -dTimes
    cTime();
    setInterval(cTime, 1000);
    // $(".StudyHard").text("已经结束啦~");
}


//文本切换----------------------------------------------------
//点击切换
$(document).ready(function () {
    $("#cut").click(function () {
        typy: "GET"
        htmlobj = $.ajax({ url: "https://api.uixsj.cn/hitokoto/get", async: false });
        $("#copy").html(htmlobj.responseText);
    });
});
//刷新网页切换
$.ajax({
    type: "GET",
    url: "https://api.uixsj.cn/hitokoto/get",
    success: function (data) {
        $("#copy").html(data);
    }
})
// 文本切换结束-------------------------------------------------------


// 下拉按钮
$(".pull").click(function () {
    var top = $("main").offset();
    var scr = $("body,html").scrollTop();
    $("body,html").animate({
        scrollTop: top.top
    }, 1000)
})


// 搜索
$(".sstb").click(function () {
    var oPassword = document.getElementById("sear")
    if (oPassword.value == "") {
        alert("请输入你要搜索的内容！");
     }else{
        alert("此功能还未开通！！！");
     }
});
