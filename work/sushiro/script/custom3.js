$(document).ready(function(){
  const $header=$('header');
  let $headerOffsetT=$('#sec1').offset().top;

  $(window).scroll(function(){

    if($(this).scrollTop()>=$headerOffsetT){
      $header.addClass('active');
    }else{
      $header.removeClass('active')
    }
  })

  $('.gnb>li').mouseenter(function(){
    $(this).find('.subWrap').stop().slideDown(500)
  }).mouseleave(function(){
    $(this).find('.subWrap').stop().slideUp(500)
  })//gnb e

  const $slidesWrap=$('.slidesWrap'),
  $slides=$slidesWrap.find('.slides'),
  $slidesA=$slides.find('a'),

  $arrowWrap=$('.arrowWrap'),
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
    $slides.stop().animate({left:(-100*idx)+'%'},1500),
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
    })//slide e 

  const $menuSlidesContainer=$('.menuSlides_container')
  $menuSlidesContainerDIV=$('.menuSlides_container>div')
  $menuSlidesBtn=$('.menuSlides_btn a'),
  $bestMenu=$menuSlidesContainer.children('.bestMenu'),
  $limitedMenu=$menuSlidesContainer.children('.limitedMenu'),
  $rollMenu=$menuSlidesContainer.children('.rollMenu'),
  $ramenMenu=$menuSlidesContainer.children('.ramenMenu'),
  $sideMenu=$menuSlidesContainer.children('.sideMenu'),
  $dessertMenu=$menuSlidesContainer.children('.dessertMenu');
  //나중에 메뉴 추가하면 변수 추가 하시길~~~~
  
  $menuSlidesBtn.eq(0).click(function(){
    $menuSlidesBtn.removeClass('on')
    $(this).addClass('on')
    $menuSlidesContainerDIV.removeClass('on')
    $bestMenu.addClass('on')
  })
  $menuSlidesBtn.eq(1).click(function(){
    $menuSlidesBtn.removeClass('on')
    $(this).addClass('on')
    $menuSlidesContainerDIV.removeClass('on')
    $limitedMenu.addClass('on')
  })
  $menuSlidesBtn.eq(2).click(function(){
    $menuSlidesBtn.removeClass('on')
    $(this).addClass('on')
    $menuSlidesContainerDIV.removeClass('on')
    $rollMenu.addClass('on')
  })
  $menuSlidesBtn.eq(3).click(function(){
    $menuSlidesBtn.removeClass('on')
    $(this).addClass('on')
    $menuSlidesContainerDIV.removeClass('on')
    $ramenMenu.addClass('on')
  })
  $menuSlidesBtn.eq(4).click(function(){
    $menuSlidesBtn.removeClass('on')
    $(this).addClass('on')
    $menuSlidesContainerDIV.removeClass('on')
    $sideMenu.addClass('on')
  })
  $menuSlidesBtn.eq(5).click(function(){
    $menuSlidesBtn.removeClass('on')
    $(this).addClass('on')
    $menuSlidesContainerDIV.removeClass('on')
    $dessertMenu.addClass('on')
  })

  const $menuItem=$('.menu_item'),
  $prev2=$('.prev2'),
  $next2=$('.next2'),
  $menuItemLi=$menuItem.children('li');

  let menuItemLgn=$menuItemLi.length,
  currentMenu=0;
  console.log(menuItemLgn);

  $prev2.click(function(){
    if(currentMenu===0){
      gotomenuSlide(5)
    }else{
      gotomenuSlide(currentMenu-1)
    }
  })

  $next2.click(function(){
    if(currentMenu<5){
      gotomenuSlide(currentMenu+1)
    }else{
      gotomenuSlide(0)
    }
  })
  function gotomenuSlide(num){
    $menuItem.css('left',(-20*num)+'%');
    currentMenu=num;
  }

  // $sec7=$('#sec7').offset().top;
  // $('#sec4').css({'background-color':'yellow'})
  // if(scroll>=$sec4 && scroll < $sec4Two){
  //   alert('test')
  // }

  const $scrollindicator=$('.scrollindicator'),
  $scrollindicatorA=$scrollindicator.children('a');
  let $sec1=0,
  $sec2=$('#sec2').offset().top,
  $sec3=$('#sec3').offset().top,
  $sec4=$('#sec4').offset().top,
  $sec4Two=$('#sec4-2').offset().top,
  $sec5=$('#sec5').offset().top,
  $sec6=$('#sec6').offset().top;

  // console.log($sec1+'/'+$sec2+'/'+$sec3+'/'+$sec4+'/'+$sec4Two+'/'+$sec5+'/'+$sec6+'/'+sec7)
  console.log($sec1+'/'+$sec2+'/'+$sec3+'/'+$sec4+'/'+$sec4Two+'/'+$sec5+'/'+$sec6+'/'+sec7)

  console.log('$sec4:'+$sec4)
  $(window).scroll(function(){
    let scroll=$(this).scrollTop();
    
    $sec2=$('#sec2').offset().top-200;
    $sec3=$('#sec3').offset().top-200;
    $sec4=$('#sec4').offset().top-300;
    $sec4Two=$('#sec4-2').offset().top-300;
    $sec5=$('#sec5').offset().top;
    $sec6=$('#sec6').offset().top-400;
    $sec7=$('#sec7').offset().top-500;
    // $sec8=$('#sec8').offset().top;

   

  
  // 초기값
  $('#sec4 .about_ImgWrap').css({'margin-left':'-400px','opacity':'0'});
  $('#sec4-2 .about_ImgWrap').css({'margin-left':'400px','opacity':'0'});
  // $('#sec7 .sns_inner').css({'margin-bottom':'400px','opacity':'0'});

  // $('#sec6 .storeWrap').css({'bacground-position':'-400px','opacity':'0'});

    if(scroll>=0 && scroll < $sec2){
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(0).addClass('on');

    }else if(scroll>=$sec2 && scroll < $sec3){
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(1).addClass('on');
      // $('.codawariWrap .codawari_inner').animate({'margin-top':0,'opacity':1},1000,'linear')

    }else if(scroll>=$sec3 && scroll < $sec4){
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(2).addClass('on');
      $('.codawariWrap .codawari_inner').animate({'margin-top':0,'opacity':1},1000,'linear')

  
    }else if(scroll>= $sec4 && scroll < $sec4Two){

      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(3).addClass('on');
      // animate 
      $('.aboutWrap .about_maintx').animate({'top':-140,'opacity':1},1000,'linear')
        $('.aboutWrap .about_txtwrap').animate({'margin-left':'5%'},1000,'linear')
        $('#sec4 .about_ImgWrap').animate({'margin-left':'0','opacity':'1'},1000)

    }else if(scroll>=$sec4Two && scroll <$sec5){
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(4).addClass('on');
       //animate
       $('#sec4-2 .about_maintx').animate({'top':-150,'opacity':1},1000,'linear')
       $('#sec4-2 .about_txtwrap').animate({'margin-right':'5%'},1000,'linear')
       $('#sec4-2 .about_ImgWrap').animate({'margin-left':'0','opacity':'1'},1000)

    }else if(scroll>=$sec5 && scroll <$sec6){
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(5).addClass('on');
     

    }else if(scroll>=$sec6 && scroll <$sec7){
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(6).addClass('on');
      $('#sec6 .storebg img').animate({'bottom':'0'},1000,'linear')

    // }else if(scroll>=$sec7 && scroll <$sec8){
    //   $scrollindicatorA.removeClass('on')
    //   $scrollindicatorA.eq(7).addClass('on');

      
    // }else if(scroll>=$sec4Two && scroll < $sec5){
    //   $scrollindicatorA.removeClass('on')
    //   $scrollindicatorA.eq(4).addClass('on');

    // }else if(scroll>=$sec5 && scroll < $sec6){
    //   $scrollindicatorA.removeClass('on')
    //   $scrollindicatorA.eq(5).addClass('on');
    //    //animate
    //   //  $('.storeWrap').animate({'background-position':'0'},1200,'linear')

    // }else if(scroll>=$sec6 && scroll < $sec7){
    //   $scrollindicatorA.removeClass('on')
    //   $scrollindicatorA.eq(6).addClass('on');
     
    }else{
      // (scroll>=$sec6 && scroll < $sec7)
      $scrollindicatorA.removeClass('on')
      $scrollindicatorA.eq(7).addClass('on');
    }
  })


  // const $snsItem=$('.snsitem'),
  // $snsPrev=$('.snsprev'),
  // $snsNext=$('.snsnext'),
  // $snsItemSns=$snsItem.children('.sns');

  // let snsItemSnsLng=$snsItemSns.length,
  // currentSns=0;
  // console.log(snsItemSnsLng);

  // $snsPrev.click(function(){
  //   if(currentSns===0){
  //     gotosnsSlide(2)
  //   }else{
  //     gotosnsSlide(currentSns-1)
  //   }
  // })

  // $snsNext.click(function(){
  //   if(currentSns<2){
  //     gotosnsSlide(currentSns+1)
  //   }else{
  //     gotosnsSlide(0)
  //   }
  // })
  // function gotosnsSlide(num){
  //   $snsItem.css('left',(-33.3333*num)+'%');
  //   currentSns=num;
  // }
})