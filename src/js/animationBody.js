import anime from "animejs/lib/anime.es.js";

function animatePartOfHand(style, translateX, translateY, rotateValue) {
  anime({
    targets: style,
    translateX,
    translateY,
    rotate: {
      value: rotateValue,
      easing: "easeInOutSine",
    },
    // delay: 10,
    duration: 330,
    direction: "alternate",
    loop: 36,
    easing: "easeInOutSine",
  });
}

export function animateHands() {
  animatePartOfHand(".knight__shoulder--left", [0, 0], [0, -2], 4);
  animatePartOfHand(".knight__hand--left", [0, -25], [0, -10], 20);
  animatePartOfHand(".knight__wrist--left", [0, -35], [0, 30], 40);

  animatePartOfHand(".knight__shoulder--right", [0, 0], [0, 2], -4);
  animatePartOfHand(".knight__hand--right", [0, 25], [0, -10], -20);
  animatePartOfHand(".knight__wrist--right", [0, 35], [0, 30], -40);
}
