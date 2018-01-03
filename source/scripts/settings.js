(function () {
  var emailButton = document.querySelector(".settings__btn_email");
  var email = document.querySelector("#email");
  var personalSubmit = document.querySelector(".settings__btn_personal");
  
  var account = document.querySelector(".account");
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
  
  window.copyToClipboard(authValue, copyButton, account, "account");
})();
