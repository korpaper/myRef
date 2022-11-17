var $layerPopup = document.querySelector('.main-modal');
var $btnLayerPopupClose = document.querySelector('.close-modal-btn');
var $btnLayerPopupTodayHide = document.querySelector('.nolook-btn');

if(!$.cookie('modalCookie')){
	layerPopupShow();
}

//닫기
$btnLayerPopupClose.addEventListener('click', function(){
    layerPopupHide(0);
});

//오늘 하루 보지 않기
$btnLayerPopupTodayHide.addEventListener('click', function(){
    layerPopupHide(1);
});

function layerPopupShow(){
    $layerPopup.style.display = 'block'
}
function layerPopupHide(state){
    $layerPopup.style.display = 'none'

    //오늘하루보지않기 버튼을 누른 경우
    if(state === 1){
        if($.cookie('modalCookie') == undefined){
            $.cookie('modalCookie', 'Y', { expires: 1, path: '/' });
        }        
    }
}