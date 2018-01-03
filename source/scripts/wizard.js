'use strict';

(function () {
  var navLinks = document.querySelectorAll('.balance-form__nav');
  var tabs = document.querySelectorAll('.balance-form__main-bottom');
  var balanceForm = document.querySelector('.balance-form');
  var accountTitleButton = document.querySelector('.account-title__button');
  var withdrawTable = document.querySelector('.withdraw__table');
  var switchTo = function(contentId){
    if (contentId) {
      var currentIndex = navLinks.length - 1;
      for(var i = 0; i < navLinks.length; i++){
        if (navLinks[i].attributes.href.value === contentId) {
          currentIndex = i;
          navLinks[i].classList.add('balance-form__nav--active');
          navLinks[i].classList.add('balance-form__nav--done');
        } else {
          navLinks[i].classList.remove('balance-form__nav--active');
        }

        if (currentIndex > i) {
          navLinks[i].classList.add('balance-form__nav--done');
        }
      }

      for(var i = 0; i < tabs.length; i++){
        var tab = tabs[i];
        if ("#" + tab.attributes.id.value === contentId) {
          tab.classList.remove('balance-form__main-bottom--invisible');
        } else {
          tab.classList.add('balance-form__main-bottom--invisible');
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

  accountTitleButton.onclick = function(evt) {
    evt.preventDefault();
    balanceForm.classList.remove('balance-form--hidden');
    withdrawTable.classList.add('withdraw__table--hidden');
  }
})();
