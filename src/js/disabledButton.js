import { ANIMATION_DURATION } from "./constants";

function disabledButton(number) {
  const startButton = document.querySelector(".start__button");
  const duration = ANIMATION_DURATION * number;
  startButton.setAttribute("disabled", "disabled");
  setTimeout(() => {
    startButton.removeAttribute("disabled");
  }, duration);
}

export default disabledButton;
