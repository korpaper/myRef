$(document).ready(function(){
    let isActiveGNB = false;
    $(document).on('mouseover','header .header-bottom',function(){
        isActiveGNB = true
        if (isActiveGNB) {
            $('header nav .sub-bg').stop().slideDown();
            $('header nav .sub').stop().slideDown();
        }
    });
    
    $(document).on('mouseleave', '.pc-header',function(){
        isActiveGNB = false
        if (!isActiveGNB) {
            $('header nav .sub-bg').stop().slideUp();
            $('header nav .sub').stop().slideUp();
        }
    });
    // // 색 변하는 거
    $(document).on('mouseover','nav>ul>li',function(e){
        $(this).css({'color': '#00a8cd', 'font-weight': '700'});
        $(this).children('.sub').css({'background': '#00a8cd', 'color': '#fff'});
    });
    // // 색 변하는 거
    $(document).on('mouseout','nav>ul>li',function(){
        $(this).css({'color': '#1d1d1d', 'font-weight': '400'})
        $(this).children('.sub').css({'background':'none', 'color':'#1d1d1d'});
    });
    
    //헤더
    var scUp ="";
    var scDown ="";

    $(window).scroll(function() {
        setTimeout(function(){
            scUp = $(window).scrollTop();
        }, 10);
        setTimeout(function(){
            scDown = $(window).scrollTop();
        }, 20);

        setTimeout(function(){
            if(scUp > scDown){
                $(".pc-header").css('top', 0);
            }
            if(scUp < scDown){
                $(".pc-header").css('top', '-140px');
            }
        }, 20);
    });

    $('.menu-open').click(function(){
        $('.mb-menu').css('display', 'block');
    });
    
    $('.menu-close').click(function(){
        $('.mb-menu').css('display', 'none');
    });

    // gnb
    let isActiveDepth = "krx-academy";
    $('.mb-nav>li>a').click(function(e){
        const clickedValue = $(this).siblings().attr('class').split(' ')[1];
        // if (clickedValue !== "deal" && isActiveDepth !== clickedValue) {
        if (isActiveDepth !== clickedValue) {
            $(`.mb-depth2-wrap.${clickedValue}`).slideDown(0);
            $(`.mb-depth2-wrap.${clickedValue}`).css('z-index', '2');
                $(`.mb-depth2-wrap.${isActiveDepth}`).slideUp(0);
                isActiveDepth = clickedValue;
        }
        
    })
    $('.mb-nav > li:not(:first-of-type) .mb-depth2-wrap').slideUp();

    // mb gnb
    var $MGnbA = $('.mb-nav>li>a'),
    $Mdep2A = $('.mb-depth2>li>a'),
    $Mdep3A = $('.mb-depth3>li>a'),
    $Mdep4A = $('.mb-depth4>li>a');

    $MGnbA.on('click',function (e) {
    if($(this).siblings('.mb-depth2').length > 0){
    }
    if(!$(this).parent().hasClass('active3-1')){
        $(this).parent().addClass('active3-1').siblings().removeClass('active3-1');
    }
    });

    $Mdep2A.on('click',function (e) {
    if($(this).siblings('.mb-depth3').toggle().length > 0){
    }

    $(this).find('.mb-depth3>li>a').stop().slideUp().toggle();
    if(!$(this).parent().hasClass('active4')){
        $(this).parent().addClass('active4').siblings().removeClass('active4').find('.mb-depth3').stop().slideUp();
        $(this).siblings().stop().slideDown();
    }
    });

    $Mdep3A.on('click',function (e) {
        if($(this).siblings('.mb-depth4').toggle().length > 0){
        }
    
        $(this).find('.mb-depth4>li>a').stop().slideUp().toggle();
        if(!$(this).parent().hasClass('active5-1')){
            $(this).parent().addClass('active5-1').siblings().removeClass('active5-1').find('.mb-depth4').stop().slideUp();
            $(this).siblings().stop().slideDown();
        }
        });
    
    $Mdep4A.on('click',function (e) {
        if($(this).siblings('.dep4').length > 0){
        }
    
        $(this).find('.mb-depth4>li>a').stop().slideUp();
        if(!$(this).parent().hasClass('active5-3')){
            $(this).parent().addClass('active5-3').siblings().removeClass('active5-3');
            $(this).siblings();
        }
        });

})

