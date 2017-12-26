'use strict';

(function () {
  var pinOffset = 6;
  var maxDeposit = 6000000;
  var rangeInput = document.querySelector('.invest-income__slider-input');
  var depositBox = document.querySelector('.invest-income__deposit-value');
  var sliderPin = document.querySelector('.invest-income__slider-pin');
  var sliderValue = document.querySelector('.invest-income__slider-value');

  var onRangeChanged = function(e){
      var percent = e.target.value;
      var calculatedIncome = percent * maxDeposit / 100;
      depositBox.value = calculatedIncome;
      moveSliderPin(percent);
  };

  var onDepositChanged = function(e){
      var amount = e.target.value;
      if (!isNaN(amount)){
          var percent = amount * 100 / maxDeposit;
          rangeInput.value = percent;
          moveSliderPin(percent);
      }
    };

  var moveSliderPin = function(percent){
      if (percent < 0 || percent > 100){
          return;
      }

      var parentWidth = sliderPin.parentElement.offsetWidth;
      var pinPosition = percent * (parentWidth - sliderPin.offsetWidth) / 100 + pinOffset;
      sliderPin.style.left = pinPosition + "px";
      sliderValue.style.width = pinPosition + "px";
  };

  rangeInput.addEventListener('change', onRangeChanged);
  rangeInput.addEventListener('input', onRangeChanged);
  depositBox.addEventListener('keyup', onDepositChanged);
})();
