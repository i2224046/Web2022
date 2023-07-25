//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200){//上から200pxスクロールしたら
        $('#next').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
        $('#next').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
    }else{
        if(
            $('#next').hasClass('LeftMove')){//すでに#page-topにLeftMoveというクラス名がついていたら
            $('#next').removeClass('LeftMove');//LeftMoveというクラス名を除き
            $('#next').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
        }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});