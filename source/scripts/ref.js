(function () {
  var account = document.querySelector(".account");
  var copyButton = document.querySelector(".ref__btn");
  var refLink = document.querySelector(".ref__ref-link");
  
  window.copyToClipboard(refLink, copyButton, account, "account");
})();