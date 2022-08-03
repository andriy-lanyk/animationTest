import { ANIMATION_DURATION } from "./constants";

function disabledButton(number = 0) {
  const startButton = document.querySelector(".start__button");
  startButton.setAttribute("disabled", "disabled");
  if (number) {
    const duration = ANIMATION_DURATION * number;
    setTimeout(() => {
      startButton.removeAttribute("disabled");
    }, duration);
  }
}

export default disabledButton;
