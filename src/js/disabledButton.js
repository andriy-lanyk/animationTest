import { ANIMATION_DURATION } from "./constants";

let timerId;

function disabledButton(number = 0) {
  const startButton = document.querySelector(".start__button");
  startButton.setAttribute("disabled", "disabled");

  if (timerId) {
    clearTimeout(timerId);
  }

  if (number) {
    const duration = ANIMATION_DURATION * number;
    timerId = setTimeout(() => {
      startButton.removeAttribute("disabled");
    }, duration);
  }
}

export default disabledButton;
