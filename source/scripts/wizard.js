'use strict';

(function () {
  var navLinks = document.querySelectorAll('.balance__nav');
  var tabs = document.querySelectorAll('.balance__main-bottom');
  var switchTo = function(contentId){
    if (contentId) {
      var currentIndex = navLinks.length - 1;
      for(var i = 0; i < navLinks.length; i++){
        if (navLinks[i].attributes.href.value === contentId) {
          currentIndex = i;
          navLinks[i].classList.add('balance__nav--active');
          navLinks[i].classList.add('balance__nav--done');
        } else {
          navLinks[i].classList.remove('balance__nav--active');
        }

        if (currentIndex > i) {
          navLinks[i].classList.add('balance__nav--done');
        }
      }

      for(var i = 0; i < tabs.length; i++){
        var tab = tabs[i];
        if ("#" + tab.attributes.id.value === contentId) {
          tab.classList.remove('balance__main-bottom--invisible');
        } else {
          tab.classList.add('balance__main-bottom--invisible');
        }
      }
    }
  };

  window.onhashchange = function(e){
    switchTo(e.target.location.hash);
  };

  if (window.location.hash) {
    switchTo(window.location.hash);
  }
})();
