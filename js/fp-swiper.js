//fullpage script
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#000', '#fff', '#f9f9f9', '#fff'], //섹션 배경 컬러
	    navigation: false, //오른쪽 도트 네비게이션
	    scrollingSpeed: 800, //스크롤속도
	    continuousVertical: false //마지막 구역에서 아래로 스크롤할때 첫번째 구역으로 스크롤
    });
});

// swiper
var swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' custom-b"></span>';
        },
    },
});

// 랜덤 light
function randomLight() {
    let num = Math.floor(Math.random() * 3);
    if (!document.querySelectorAll('.img-bg')[num].classList.contains('light')) {
        if (document.querySelector('.img-bg.light')) {
            document.querySelector('.img-bg.light').classList.remove('light');
        }
        document.querySelectorAll('.img-bg')[num].classList.add('light')
    } else {
        if (num === 0) {
            num += 1;
        } else if (num === 2) {
            num = 0;
        } else if (num === 1) {
            num = 2;
        }
        if (document.querySelector('.img-bg.light')) {
            document.querySelector('.img-bg.light').classList.remove('light');
        }
        document.querySelectorAll('.img-bg')[num].classList.add('light')
    }
}

window.addEventListener('load', function () {
    setInterval(() => {
        randomLight()
    }, 2500);
})