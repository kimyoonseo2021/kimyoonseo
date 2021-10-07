$(document).ready(function(){
  // alert('test')
  $('.gnb>li').mouseenter(function(){
    $(this).children('.sub').stop().slideDown(500)
  }).mouseleave(function(){
    $(this).children('.sub').stop().slideUp(500)
  })//gnb

  let num=0;

  $('.slides').animate({'left':'num'})

  setInterval(function(){
    if(num<2){
      num++
    }else{
      num=0;
    }
    $('.slides').animate({'left':-100*num+'%'})
  },3500)//slide

  const $tabBtn=$('.tab_btn a'),
  $contsNotice=$('.conts_notice'),
  $contsGallery=$('.conts_gallery');

  $tabBtn.eq(0).click(function(){
    $tabBtn.removeClass('on')
    $(this).addClass('on')
    $contsNotice.addClass('on')
    $contsGallery.removeClass('on');
  })
  $tabBtn.eq(1).click(function(){
    $tabBtn.removeClass('on')
    $(this).addClass('on')
    $contsGallery.addClass('on')
    $contsNotice.removeClass('on');
  })//tab

  let num2=0;
  $('.gallery_slides>a').eq(num).addClass('active')

  setInterval(function(){
    if(num2<2){
      num2++
    }else{
      num2=0
    }
    $('.gallery_slides>a').removeClass('active')
    $('.gallery_slides>a').eq(num2).addClass('active')
  },3500)//gallery slide

  $('.goto_txt').animate({'left':'50%'},700,'linear')//goto

  $('.notice').find('li').click(function(){
    $('.modal_wrap').show()
  })
  $('.btn_close').click(function(){
    $('.modal_wrap').hide()
  })
})