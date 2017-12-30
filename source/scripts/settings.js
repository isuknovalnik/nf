(function () {
  var emailButton = document.querySelector(".settings__btn_email");
  var email = document.querySelector("#email");
  var personalSubmit = document.querySelector(".settings__btn_personal");
  
  // - var selectWrap = document.querySelector(".settings__input-wrap_select");
  // - var ipSelector = document.querySelector("#ip");
  
  var copyButton = document.querySelector(".settings__btn_copy");
  var authValue = document.querySelector(".settings__auth-value");
  
  emailButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (email.disabled) {
      email.disabled = false;
      email.focus();
    }
  });
  
  personalSubmit.addEventListener("click", function(event) {
    if (!email.disabled) {
      email.disabled = true;
    }
  });
  
  copyButton.addEventListener('click', function(event) {
    var range = document.createRange();
    range.selectNode(authValue);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  });
  
})();
