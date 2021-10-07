$(document).ready(function(){
  $('.gnb>li').mouseenter(function(){
    $(this).find('.subWrap').stop().fadeIn(500)
  }).mouseleave(function(){
    $(this).find('.subWrap').stop().fadeOut(500)
  })//gnb

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
        // goToSlider(nextIdx);
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


    const $categorys=$('.categorys'),
    $prev2=$('.prev2'),
    $next2=$('.next2'),
    $categorysA=$categorys.children('a');

    let categoryLgn=$categorysA.length,
    currentIdx2=0;
    console.log(categoryLgn)

    $prev2.click(function(){
      if(currentIdx2===0){
        $prev2.addClass('active')
      }else{
        $next2.removeClass('active')
        $next2.removeClass('active')
        gotoCategory(currentIdx2-1)
      }
    })
    $next2.click(function(){
      if(currentIdx2<10){
        $prev2.removeClass('active')
        $next2.removeClass('active')
        gotoCategory(currentIdx2+1)
      }else{
        $next2.addClass('active')
      }
    })

    function gotoCategory(num){
      $categorys.css('left',(-33.3333*num)+'%');
      currentIdx2=num;
    }

    
})