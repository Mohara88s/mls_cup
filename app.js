const refs = {
    mlsCupCloseBtn: document.querySelector('.mlsCupCloseButton'),
    mlsCup: document.querySelector('.mlsCup'),
  };
  
  refs.mlsCupCloseBtn.addEventListener('click', mlsCupClos)
  function mlsCupClos() {
    refs.mlsCup.setAttribute("hidden", true);
  }