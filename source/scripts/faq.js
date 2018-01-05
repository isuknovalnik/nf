'use strict';

(function() {
  var questionLink = document.querySelectorAll('.faq__questions-link');
  var answerContent = document.querySelectorAll('.faq__answer');


  var openAnswer = function(contentId) {
    if(contentId) {
      for (var i = 0; i < questionLink.length; i++) {
        if(questionLink[i].attributes.href.value === contentId) {
          questionLink[i].classList.add('faq__questions-link--active');
        }else {
          questionLink[i].classList.remove('faq__questions-link--active');
        }
      }
      for(var i = 0; i < answerContent.length; i++){
        var tab = answerContent[i];
        if ("#" + tab.attributes.id.value === contentId) {
          tab.classList.remove('faq__answer--hidden');
        } else {
          tab.classList.add('faq__answer--hidden');
        }
      }
    }
  }

  window.onhashchange  = function(e){
    openAnswer(e.target.location.hash);
  };
})();
