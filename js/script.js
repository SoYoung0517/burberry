$(document).ready(function(){
  //aos
    AOS.init(); 

  //배너스와이퍼
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      effect: "fade",
      autoplay: {
          delay: 2500
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });





  
  var ww = $(window).width();
  media();
  
  function media(){
    if(ww >= 1200){
       // 풀페이지 플러그인
      new fullpage('#wrap', {
      anchors: ['firstPage','secondPage','3rdPage','4rdPage','5rdPage','6rdPage'],
      // 새로고침해도 페이지가 상단으로 이동안하고 그자리에서 다시 새로고침 됨
      scrollBar: true
      //aos가 스크롤값을 못받아 풀페이지 스크롤을 다시 생성하게 만들어줌
    });


    //서브메뉴박스
    $('.menu li').mouseenter(function(){
      // $(this).addClass('active');
      // $(this).siblings().removeClass('active');

      var result = $(this).attr('data-alt');
      $('.sub-menu').removeClass('active');

      $(`#${result}`).addClass('active');

      $('.sub-menu-box').stop().slideDown().addClass('active');
    });

    //서브메뉴박스에서 마우스리브되야 메뉴가 없어짐
    $('.sub-menu-box').mouseleave(function(){
      $(this).stop().slideUp().removeClass('active');
    });
  

    //sec-4 fade-gallery
    $('.inner-gallery').mouseenter(function(){
      var ch = $(this).attr('data-image');
      $('.fade-gallery-photo').css({
        'background-image':`url(${ch})`
      });
    });

      $('.inner-gallery').mouseleave(function(){
      $('.fade-gallery-photo').css({
          'background-image':''
      });
      }); 
    }else{
      //스크롤 이벤트
      $(window).scroll(function(){
        if($(window).scrollTop() > 300){
          $('.header-area').addClass('active');
          $('.haeder-logo').addClass('active');
        }else{
          $('.header-area').removeClass('active');
          $('.haeder-logo').removeClass('active');
        }
      });
      //스크롤 탑 값이 300px 초가면 header-area, header-logo영역 active추가 그밖에 경우 제거
      



      //햄버거버튼 메뉴 설정
      $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
      });
      
    }

    $(window).resize(function(){
      ww = $(window).width();
      media();
    });
}// 미디어쿼리 함수안에 담아줌




    
});//end