$(document).ready(function(){
  
  const $header=$('header');
  let $headerOffsetT=$('#slidesWrap').offset().top;

  $(window).scroll(function(){
    let wind=$(this),
    winWidth=wind.width();

    
      $header.addClass('active');
      if(winWidth<=980){
        if($(this).scrollTop()>0){
          $header.addClass('active')
        }else{
          $header.removeClass('active')
        }
      }
      else(winWidth>980){
        $header.addClass('active')
      }
  })//
  //header active

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
  console.log(slidesLeg);

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
    $slides.stop().animate({left:(-100*idx)+'%'},1000),
    currentidx=idx;//이동된 번호가 현재의 번호로 변경
    arrowHid()
    $indicator.find('a').eq(currentidx).addClass('active').siblings().removeClass('active');
  }

  //이벤트
  $indicator.find('a').click(function(){
    let $idx=$(this).index() //index 번호는 0부터시작 each도!!
    console.log('idx:'+$idx)
    goToSlider($idx);
    $(this).addClass('active').siblings().removeClass('active')
  })

  //next, prev
  $arrowWrap.find('a').click(function(e){
    e.preventDefault();
    console.log("c:"+currentidx)

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
      $('.kNvd1').get(0).play();
    }
    // videoPlay();
    function videoPause(){
      $('.kNvd1').get(0).pause();
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
            if(winWid<768){
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
            if(winWid<768){
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
            if(winWid<768){
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

  const 
  $headeroff=$header.offset().top,
  $sec1SlidesWrap=$('#slidesWrap').offset().top,
  $sec2Knot=$('#kNot').offset().top,
  $sec3Mostp=$('#mostP').offset().top,
  $sec4Celebrity=$('#celebrity').offset().top,
  $sec5Wedding=$('#wedding').offset().top,
  $sec6Tapwrap=$('#tapWrap').offset().top,
  $sec7Category=$('#category').offset().top,
  $sec8Sns=$('#sns').offset().top,
  $sec9Present=$('#present').offset().top;

  console.log($headeroff+'/'+$sec1SlidesWrap+'/'+$sec2Knot+'/'+$sec3Mostp+'/'+$sec4Celebrity+'/'+$sec5Wedding+'/'+$sec6Tapwrap+'/'+$sec7Category+'/'+$sec8Sns+'/'+$sec9Present)

  const  $scrollindicator=$('.scrollindicator'),
  $scrollindicatorA=$scrollindicator.children('a');
  // $scrollindicatorA.css('display','none')

  $(window).scroll(function(){
    let scroll=$(this).scrollTop();
    $scrollindicatorA.css('display','none')
    // --scrollindicator
    console.log($sec2Knot+'/'+scroll)
    if(scroll<$sec2Knot){
      $scrollindicatorA.css('display','none')
    }else if(scroll>=$sec1SlidesWrap && scroll <= $sec2Knot){
        $scrollindicatorA.css('display','block')
        $scrollindicatorA.removeClass('on')
        $scrollindicatorA.eq(0).addClass('on')


      }else if(scroll>=$sec2Knot && scroll < $sec3Mostp){
        $scrollindicatorA.css('display','block')
        $scrollindicatorA.removeClass('on')
        $scrollindicatorA.eq(1).addClass('on')
      

      }else if(scroll>=$sec3Mostp && scroll < $sec4Celebrity){
        $scrollindicatorA.css('display','block')
        $scrollindicatorA.removeClass('on')
        $scrollindicatorA.eq(2).addClass('on')
      }else if(scroll>=$sec4Celebrity && scroll < $sec5Wedding){
        $scrollindicatorA.css('display','block')
        $scrollindicatorA.removeClass('on')
        $scrollindicatorA.eq(3).addClass('on')
        $('.wedding_txt').animate({'top':'50%','opacity':1},2000,'linear')

      }else if(scroll>=$sec5Wedding && scroll < $sec6Tapwrap){
        $scrollindicatorA.css('display','block')
        $scrollindicatorA.removeClass('on')
        $scrollindicatorA.eq(4).addClass('on')
      }else if(scroll>=$sec6Tapwrap && scroll < $sec7Category){
        $scrollindicatorA.css('display','block')
        $scrollindicatorA.removeClass('on')
        $scrollindicatorA.eq(5).addClass('on')
      }else if(scroll>=$sec7Category && scroll < $sec8Sns){
        $scrollindicatorA.css('display','block')
        $scrollindicatorA.removeClass('on')
        $scrollindicatorA.eq(6).addClass('on')
      }else if(scroll>=$sec8Sns && scroll < $sec9Present){
        $scrollindicatorA.css('display','block')
        $scrollindicatorA.removeClass('on')
        $scrollindicatorA.eq(7).addClass('on')
      }else{
        $scrollindicatorA.css('display','block')
        $scrollindicatorA.removeClass('on')
        $scrollindicatorA.eq(8).addClass('on')
      }


    })
    
})