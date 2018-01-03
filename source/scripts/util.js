(function () {
  window.copyToClipboard = function (elementToCopy, copyButton) {
    copyButton.addEventListener('click', function () {
      var range = document.createRange();
      range.selectNode(elementToCopy);
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    });
  };
})();