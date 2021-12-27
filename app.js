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
    refs.mlsCup.setAttribute("hidden", true);
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
  }

  refs.videoPlayBtn.addEventListener('click', onVideoPlayBtnClick)
  function onVideoPlayBtnClick() {
      if (refs.video.paused) {
        refs.video.play() 
      } else {
        refs.video.pause()  
      }
  }