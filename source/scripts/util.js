(function () {
  window.copyToClipboard = function (elementToCopy, copyButton, messageContainer, containerClass) {
    copyButton.addEventListener('click', function () {
      var range = document.createRange();
      var msg;
      var msgClass;
      range.selectNode(elementToCopy);
      window.getSelection().addRange(range);
      try {
        var successful = document.execCommand('copy');
        msg = successful ? 'success' : 'error';
      } catch(err) {
        msg = 'error';
      }
      msgClass = containerClass + "_" + msg;
      messageContainer.classList.add(msgClass);
      window.getSelection().removeAllRanges();
      setTimeout(function() { messageContainer.classList.remove(msgClass) }, 2000);
    });
  };
})();