const refs = {
    mlsCupCloseBtn: document.querySelector('.mlsCupCloseButton'),
    mlsCup: document.querySelector('.mlsCup'),
    videoBackdrop: document.querySelector('.videoBackdrop'),
    hotSpotBtn: document.querySelector('.hotSpotButton'),
    videoCloseBtn: document.querySelector('.videoCloseButton'),
    videoPlayBtn: document.querySelector('.videoPlayButton'),  
    video: document.querySelector('.video'),  
};
  
  refs.mlsCupCloseBtn.addEventListener('click', onMlsCupCloseBtnClick)
  function onMlsCupCloseBtnClick() {
    refs.mlsCup.classList.add('is-hidden')
    onVideoCloseBtnClick()
  }

  refs.hotSpotBtn.addEventListener('click', onHotSpotBtnClick)
  function onHotSpotBtnClick() {
      refs.videoBackdrop.classList.remove('is-hidden')
      refs.hotSpotBtn.classList.add('is-hidden')
  }

  refs.videoCloseBtn.addEventListener('click', onVideoCloseBtnClick)
  function onVideoCloseBtnClick() {
      refs.videoBackdrop.classList.add('is-hidden')
      refs.hotSpotBtn.classList.remove('is-hidden')
      refs.video.pause() 
      refs.videoPlayBtn.classList.remove('videoPlayButton--transparent')
  }

  refs.videoPlayBtn.addEventListener('click', onVideoPlayBtnClick)
  function onVideoPlayBtnClick() {
      if (refs.video.paused) {
        refs.video.play() 
        refs.videoPlayBtn.classList.add('videoPlayButton--transparent')
      } else {
        refs.video.pause()
        refs.videoPlayBtn.classList.remove('videoPlayButton--transparent')  
      }
  }

  window.addEventListener("load", function(){
    var tl = gsap.timeline();
    tl.to(".mlsCup",{duration: 1, opacity:1})
      .to(".overlay",{duration: 2, y:0})
      .to(".confetti",{duration: 3.5, yPercent:-145, ease: "back.out(1.15)",}, "-=1")
      .to(".leftDoor",{duration: 1.8, x:0}, "-=1.5")
      .to(".rightDoor",{duration: 1.8, x:0}, "-=1.8")
      .to(".sloganList__item:first-child",{duration: 0.8, y:0})
      .to(".sloganList__item:nth-child(2)",{duration: 1, y:0}, "-=0.2")
      .to(".sloganList__item:last-child",{duration: 1.2, y:0}, "-=0.2")
      .to(".leftDoor__emblem",{duration: 1, opacity:1, scale:1})
      .to(".rightDoor__emblem",{duration: 1, opacity:1, scale:1}, "-=1")
      .to(".banner ",{duration: 0.01, opacity:1})
      .to(".sloganList",{duration: 1.5, yPercent:-300}, "+=2")
      .to(".leftDoor",{duration: 2, xPercent:-100}, "-=1")
      .to(".rightDoor",{duration: 2, xPercent:100}, "-=2")
});

