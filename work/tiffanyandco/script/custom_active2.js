$(document).ready(function(){
// sldier
const $slidesWrap=$('#slidesWrap'),
$slides=$slidesWrap.find('.slides'),
$slidesA=$slides.find('a'),

$arrowWrap=$slidesWrap.find('.arrowWrap'),
$prev=$arrowWrap.find('.prev'),
$next=$arrowWrap.find('.next'),

$indicator=$slidesWrap.find('.indicator'),
$indicatorA=$indicator.find('a');

let slidesLeg=$slidesA.length,
currentidx=0, //현재 보고 있는 a의 인덱스 번호
indicatorHtml='',
timer;

// gnb
$('.gnb>li').mouseenter(function(){
    $(this).find('.subWrap').stop().fadeIn(500)
  }).mouseleave(function(){
    $(this).find('.subWrap').stop().fadeOut(500)
  })//gnb
  $('.mb_icon').click(function(){
    $('nav').toggleClass('on');
    $(this).toggleClass('close');
  })
  $('.mb_icon_close').click(function(){
    $('nav').css('display','none');
  })

  // console.log(slidesLeg);
  $slidesA.each(function(i){
    indicatorHtml+="<a href='#none'>"+(i+1)+"</a>"
    $indicator.html(indicatorHtml)
  })
  $slides.css('width',(slidesLeg*100)+"%")

  //바로실행
  goToSlider(currentidx);//실행
  autoPlay()

  //함수
  function goToSlider(idx){
    $slides.stop().animate({left:(-100*idx)+'%'},1300),
    currentidx=idx;//이동된 번호가 현재의 번호로 변경
    arrowHid()
    $indicator.find('a').eq(currentidx).addClass('active').siblings().removeClass('active');
  }

  //이벤트
  $indicator.find('a').click(function(){
    let $idx=$(this).index() //index 번호는 0부터시작 each도!!
    // console.log('idx:'+$idx)
    goToSlider($idx);
    $(this).addClass('active').siblings().removeClass('active')
  })

  //next, prev
  $arrowWrap.find('a').click(function(e){
    e.preventDefault();
    // console.log("c:"+currentidx)

    if($(this).hasClass('prev')){
      goToSlider(currentidx-1);
    }else{
      //next 
      goToSlider(currentidx+1)
    }
    $indicator.find('a').eq(currentidx).addClass('active').siblings().removeClass('active');
  })

  //next, prev 첫번째, 마지막 안보이게 처리
  function arrowHid(){
    if(currentidx===0){
      $prev.addClass('hid');
    }else{$prev.removeClass('hid');}
    if(currentidx===slidesLeg-1){
      $next.addClass('hid');
    }else{$next.removeClass('hid');}
  }

  //자동슬라이드
  function autoPlay(){
    //일정시간마다 반복실행 setInterval(할일,시간)
    timer=setInterval(function(){
      let nextIdx=(currentidx+1)%slidesLeg;
      // %남음값(즉 ,몫) 1%4=1 2%4=2 3%4=3 4%4=0
      goToSlider(nextIdx);
    },4000)
  }

  function stop(){
    clearInterval(timer); 
    //setInterval 멈추게해라~둘이 짝꿍임
  }
  //slidesWrap에 마우스가 올라가면 멈추고 벗어나면 autoplay
  $slidesWrap.mouseenter(function(){
    stop()
  }).mouseleave(function(){
    autoPlay()
  })
  //video
  function videoPlay(){
    $('.kN_topvideo').get(0).play();
    $('.kN_botvideo').get(0).play();
  }
  // videoPlay();
  function videoPause(){
    $('.kN_topvideo').get(0).pause();
    $('.kN_botvideo').get(0).pause();
  }
  
  // $videoPlay.click(videoPlay);
  // $videoPause.click(videoPause)
  const $tapBtn=$('.tap_btn li'),
  $tap_contsDiv=$('.tap_conts>div'),
  $t_ttWrap=$('.t_ttWrap'),
  $t_kNwrap=$('.t_kNwrap'),
  $t_hardWrap=$('.t_hardWrap'),
  $t_vicWrap=$('.t_vicWrap'),
  $t_returnWrap=$('.t_returnWrap'),
  $t_atlasWrap=$('.t_atlasWrap'),
  $t_elsaWrap=$('.t_elsaWrap');

  $tapBtn.eq(0).click(function(){
    $tapBtn.removeClass('on')
    $(this).addClass('on')
    $tap_contsDiv.removeClass('on')
    $t_ttWrap.addClass('on')
  })

  $tapBtn.eq(1).click(function(){
    $tapBtn.removeClass('on')
    $(this).addClass('on')
    $tap_contsDiv.removeClass('on')
    $t_kNwrap.addClass('on')
  })
  $tapBtn.eq(2).click(function(){
    $tapBtn.removeClass('on')
    $(this).addClass('on')
    $tap_contsDiv.removeClass('on')
    $t_hardWrap.addClass('on')
  })
  $tapBtn.eq(3).click(function(){
    $tapBtn.removeClass('on')
    $(this).addClass('on')
    $tap_contsDiv.removeClass('on')
    $t_vicWrap.addClass('on')
  })
  $tapBtn.eq(4).click(function(){
    $tapBtn.removeClass('on')
    $(this).addClass('on')
    $tap_contsDiv.removeClass('on')
    $t_returnWrap.addClass('on')
  })
  $tapBtn.eq(5).click(function(){
    $tapBtn.removeClass('on')
    $(this).addClass('on')
    $tap_contsDiv.removeClass('on')
    $t_atlasWrap.addClass('on')
  })
  $tapBtn.eq(6).click(function(){
    $tapBtn.removeClass('on')
    $(this).addClass('on')
    $tap_contsDiv.removeClass('on')
    $t_elsaWrap.addClass('on')
  })//tap
  $('.tt').children('a').click(function(){
    $('.tap_subWrap').css('display','block')
  })
  $('.ts_close').click(function(){
    $('.tap_subWrap').css('display','none')
  })

  // categorys
  const $categoryscontainer=$('.categoryscontainer'),
        $categorysWrap=$('.categorysWrap'),
        $categorys=$('.categorys'),
        $categorysA=$('.categorys').find('a'),
        $catePrev=$('.prev2'),
        $cateNext=$('.next2');

  let categoryACount=$categorysA.length,
      currentCate=0;

  $(window).resize(function(){
    let win=$(this),
        winWid=win.width();
        currentCate=0;
        function gotoslideCate(i){
          if(winWid<880){
            $categorys.css('left',(-50*i)+'%');
            currentCate=i;
          }if(winWid<468){
            $categorys.css('left',(-100*i)+'%');
            currentCate=i;
          }else{
            $categorys.css('left',(-33.33333*i)+'%');
            currentCate=i;
          }
        }
        $catePrev.click(function(){
          if(winWid<880){
            if(currentCate==0){
              gotoslideCate(12)
            }else{
              gotoslideCate(currentCate-1)
            }
          }if(winWid<468){
            if(currentCate==0){
              gotoslideCate(15)
            }else{
              gotoslideCate(currentCate-1)
            }
          }else{
            if(currentCate==0){
              gotoslideCate(9)
            }else{
              gotoslideCate(currentCate-1)
            }
          } 
        })
        $cateNext.click(function(){
          if(winWid<880){
            if(currentCate<10){
              gotoslideCate(currentCate+1)
            }else{
              gotoslideCate(0)
            }
          }if(winWid<468){
            if(currentCate<15){
              gotoslideCate(currentCate+1)
            }else{
              gotoslideCate(0)
            }
          }else{
            if(currentCate<9){
              gotoslideCate(currentCate+1)
            }else{
              gotoslideCate(0)
            }
          } 
        })  
  }).resize();

  // ---go top---
  $('.go_top').click(function(){
    $('html,body').animate({'scrollTop':0})
  })
  // ---go top e--
//indicator
const $header=$('#header');
let headerH=$header.outerHeight();
console.log('headerH:'+headerH); //114

$(window).resize(function(){
  let winWidth=$(window).width();
  $header.removeClass('active');
  $(window).scroll(function(){
    if($(this).scrollTop()>=headerH){
      $header.addClass('active');
     if(winWidth>980){
       $header.addClass('active');
     }else{
       $header.removeClass('active');
     }
    }else{
      $header.removeClass('active');
    }
  })
}).resize();

const $scrollindicator=$('.scrollindicator'),
$scrollindicatorA=$scrollindicator.find('a');

$(window).scroll(function(){
  headerH=$header.outerHeight();
  let scroll=$(this).scrollTop();

  const $sec1SlidesWrap=$('#slidesWrap').offset().top,
  $sec2Knot=$('#kNot').offset().top,
  $sec3Mostp=$('#mostP').offset().top,
  $sec4Celebrity=$('#celebrity').offset().top,
  $sec5Wedding=$('#wedding').offset().top,
  $sec6Tapwrap=$('#tapWrap').offset().top,
  $sec7Category=$('#category').offset().top,
  $sec8Sns=$('#sns').offset().top,
  $sec9Present=$('#present').offset().top;

  // console.log(headerH)// 114-74
  // console.log('scroll/'+scroll);
  // console.log('$sec2Knot/'+$sec2Knot);
  // console.log('$sec3Mostp/'+$sec3Mostp);
  console.log('sample/'+$('#present').offset().top);
  console.log('sampleh/'+$('#present').outerHeight());

  // scrollindicator  보임/숨김
  if(scroll>=0 && scroll < $sec2Knot){ 
    $scrollindicator.css('display','none');
  }else{
    $scrollindicator.css('display','block');
    //스크롤  a태그 on클래스
    if(scroll>=($sec2Knot) && scroll < ($sec3Mostp)){ 
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(1).addClass('on')
      //animate
      // $('.main_txt>h2::before').animate({'margin-right':'220px','opacity':1},1000,'linear')
      // $('.main_txt>h2::after').animate({'margin-left':'220px','opacity':1},1000,'linear')
      
    }else if(scroll>=($sec3Mostp) && scroll < $sec4Celebrity){ 
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(2).addClass('on')
    }else if(scroll>=$sec4Celebrity && scroll <  $sec5Wedding){
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(3).addClass('on')
    }else if(scroll>=$sec5Wedding && scroll < $sec6Tapwrap){
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(4).addClass('on')
      $('.wedding_txt').animate({'top':'50%','opacity':1},1000,'linear')
    }else if(scroll>=$sec6Tapwrap && scroll < $sec7Category){
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(5).addClass('on')
    }else if(scroll>=$sec7Category && scroll < $sec8Sns){
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(6).addClass('on')
    }else if(scroll>=$sec8Sns && scroll < $sec9Present){
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(7).addClass('on')
    }else{
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(8).addClass('on')
      $('.presentleft').animate({'top':'-5%','opacity':1},1000,'linear')
      $('.presenttxt').animate({'top':'50%','opacity':1},1000,'linear')
    }//else
  }//else

})
})//document e