// 초보 투자자 탭
$('.begin-tab-nav > li').on('click keyup',function(e){

    let tabNum=$(this).index();

    console.log($(this).parent().attr('class').split(/\s+/))
    const classList = $(this).parent().attr('class').split(/\s+/);

    if (classList.includes('begin')) {
        $(this).addClass('active2').siblings().removeClass('active2');
        const boxCon=$('.begin-tab-list > li');
        boxCon.eq(tabNum).show().addClass('on').siblings().hide().removeClass('on');
    }
});
// 알기쉬운 전체 탭
$('.etk-navi.etk-tab > li').on('click keyup',function(e){

    let tabNum=$(this).index();

    console.log($(this).parent().attr('class').split(/\s+/))
    const classList = $(this).parent().attr('class').split(/\s+/);

    if (classList.includes('etk-tab')) {
        $(this).addClass('active5').siblings().removeClass('active5');
        // const boxCon=$('.etk-tab-list.etk > li');
        // boxCon.eq(tabNum).show().addClass('on5').siblings().hide().removeClass('on5');
    }
});
// 옵션 가격결정 탭
$('.begin-tab-nav.op > li').on('click keyup',function(e){

    let tabNum=$(this).index();

    console.log($(this).parent().attr('class').split(/\s+/))
    const classList = $(this).parent().attr('class').split(/\s+/);

    if (classList.includes('op')) {
        $(this).addClass('active3').siblings().removeClass('active3');
        // const boxCon=$('.begin-tab-list.op-deal > li');
        boxCon.eq(tabNum).show().addClass('on3').siblings().hide().removeClass('on3');
    }
});
// 다양한 옵션투자 탭
$('.begin-tab-nav.op-va > li').on('click keyup',function(e){

    let tabNum=$(this).index();

    console.log($(this).parent().attr('class').split(/\s+/))
    const classList = $(this).parent().attr('class').split(/\s+/);

    if (classList.includes('op-va')) {
        $(this).addClass('active4').siblings().removeClass('active4');
        const boxCon=$('.begin-tab-list.op-vari > li');
        boxCon.eq(tabNum).show().addClass('on4').siblings().hide().removeClass('on4');
    }
});

// 알기쉬운 파생상품 아코디언
$(".etk-inner-cont").hide();
    $(".etk-title").click(function() {
        $(this).next(".etk-inner-cont").stop().slideToggle(300);
        $(this).next(".etk-inner-cont").siblings(".etk-inner-cont").slideUp(300); // 1개씩 펼치기
    });
