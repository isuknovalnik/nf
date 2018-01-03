(function () {
  var copyButton = document.querySelector(".ref__btn");
  var refLink = document.querySelector(".ref__ref-link");
  
  window.copyToClipboard(refLink, copyButton);
})();