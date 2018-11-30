$(document).ready(function () {

  var elSelector = '#main-menu-nav',
    element = document.querySelector(elSelector);
  if (!element) return true;
  var elHeight = 0,
    mouseY = 0,
    elTop = 0,
    dHeight = 0,
    wHeight = 0,
    wScrollCurrent = 0,
    wScrollBefore = 0,
    wScrollDiff = 0;
  document.addEventListener('mousemove', function (e) {
    mouseY = e.clientY || e.pageY;
    if (mouseY < element.offsetHeight) {
      element.style.top = '0px';
    }
  }, false);
  if ($('body').hasClass('bw-mobile') || $('body').hasClass('dv-tablet')) {
    document.addEventListener('touchmove', function (e) {
      mouseY = e.clientY || e.pageY;
      mouseY = 104;
      if (mouseY < element.offsetHeight) {
        element.style.top = '0px';
      }
    }, false);
  }
  window.addEventListener('scroll', function (e) {
    elTop = elHeight = element.offsetHeight;
    dHeight = document.body.offsetHeight;
    wHeight = window.innerHeight;
    wScrollCurrent = window.pageYOffset;
    wScrollDiff = wScrollBefore - wScrollCurrent;
    if ($('body').hasClass('bw-mobile') || $('body').hasClass('dv-tablet')) {
      elHeight = 88;
    }
    if (wScrollCurrent <= 0) { // scrolled to the very top; element sticks to the top
      element.style.top = '0px';
    } else if (wScrollDiff > 0) // scrolled up; element slides in
    {
      element.style.top = (elTop > 0 ? 0 : elTop) + 'px';
    } else if (wScrollDiff < 0) // scrolled down
    {
      if (wScrollCurrent + wHeight >= dHeight - elHeight) { // scrolled to the very bottom; element slides in
        element.style.top = '0px';
      } else // scrolled down; element slides out
      {
        if (mouseY < elHeight) {
          element.style.top = '0px';
        } else if (mouseY > elHeight && wScrollCurrent < elHeight) {
          element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : 0) + 'px';
        } else {
          element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : -elTop) + 'px';
        }
      }
    }
    wScrollBefore = wScrollCurrent;
  });

});