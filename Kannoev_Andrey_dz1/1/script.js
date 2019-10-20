"use strict";

/**
 * Переводит цельсии в фаренгейты.
 */
function check() {
  var elemCel = document.getElementById("cel").value;
  var far = ((9 / 5) * elemCel + 32);
  var elemFar = document.getElementById("cal");
  elemFar.innerHTML = far;
}
