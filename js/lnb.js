$(document).ready(function(){

    let isActiveDepth = "dep2";
    $('.dep2>li>a').click(function(e){
        const clickedValue = $(this).siblings().attr('class');
        // const clickedValue = $(this).siblings().attr('class').split(' ')[1];
        // if (clickedValue !== "deal" && isActiveDepth !== clickedValue) {
        if (isActiveDepth !== clickedValue) {
            $(`.dep2-wrap.${clickedValue}`).slideDown(0);
            $(`.dep2-wrap.${clickedValue}`);
                $(`.dep2-wrap.${isActiveDepth}`).slideUp(0);
                isActiveDepth = clickedValue;
        }
        
    })

    // mb gnb
    var $dep2 = $('.dep2>li>a'),
    $dep3 = $('.dep3>li>a'),
    $dep4 = $('.dep4>li>a');

    $dep2.on('click',function (e) {
    if($(this).siblings('.dep3').toggle().length > 0){
    }

    $(this).find('.dep3>li>a').stop().slideUp().toggle();
    if(!$(this).parent().hasClass('active6')){
        $(this).parent().addClass('active6').siblings().removeClass('active6').find('.dep3').stop().slideUp();
        $(this).siblings().stop().slideDown();
    }
    });

    $dep3.on('click',function (e) {
        if($(this).siblings('.dep4').toggle().length > 0){
        }
    
        $(this).find('.dep4>li>a').stop().slideUp().toggle();
        if(!$(this).parent().hasClass('active8')){
            $(this).parent().addClass('active8').siblings().removeClass('active8').find('.dep4').stop().slideUp();
            $(this).siblings().stop().slideDown();
        }
        });

    $dep4.on('click',function (e) {
        if($(this).siblings('.dep4').length > 0){
        }
    
        $(this).find('.dep4>li>a').stop().slideUp();
        if(!$(this).parent().hasClass('active7')){
            $(this).parent().addClass('active7').siblings().removeClass('active7');
            $(this).siblings();
        }
        });

})

