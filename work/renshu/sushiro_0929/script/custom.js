$(document).ready(function(){
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
})