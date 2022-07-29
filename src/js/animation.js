import anime from "animejs/lib/anime.es.js";

import { ANIMATION_DURATION, ANIMATION_LOOP } from "./constants";

export function animateLeftBarrel() {
  if (window.innerWidth < 500) {
    anime({
      targets: ".barrel--left",
      keyframes: [
        { translateX: -28, translateY: 12 },
        { translateX: 50, translateY: 18 },
        { translateX: 110, translateY: 23 },
        { translateX: 180, translateY: 13 },
        { translateX: 130, translateY: 0 },
        { translateX: 90, translateY: -8 },
        { translateX: 40, translateY: -8 },
        { translateX: 0, translateY: 0 },
      ],
      duration: ANIMATION_DURATION,
      easing: "easeInOutSine",
      loop: ANIMATION_LOOP,
    });
    return;
  }
  if (window.innerWidth < 900) {
    anime({
      targets: ".barrel--left",
      keyframes: [
        { translateX: -38, translateY: 17 },
        { translateX: 80, translateY: 23 },
        { translateX: 170, translateY: 28 },
        { translateX: 300, translateY: 17 },
        { translateX: 240, translateY: 0 },
        { translateX: 170, translateY: -8 },
        { translateX: 80, translateY: -8 },
        { translateX: 0, translateY: 0 },
      ],
      duration: ANIMATION_DURATION,
      easing: "easeInOutSine",
      loop: ANIMATION_LOOP,
    });
  } else {
    anime({
      targets: ".barrel--left",
      keyframes: [
        { translateX: -40, translateY: 10 },
        { translateX: 110, translateY: 22 },
        { translateX: 250, translateY: 28 },
        { translateX: 500, translateY: 16 },
        { translateX: 420, translateY: 0 },
        { translateX: 250, translateY: -10 },
        { translateX: 120, translateY: -6 },
        { translateX: 0, translateY: 0 },
      ],
      duration: ANIMATION_DURATION,
      easing: "easeInOutSine",
      loop: ANIMATION_LOOP,
    });
  }
}

export function animateCenterBarrel() {
  if (window.innerWidth < 500) {
    anime({
      targets: ".barrel--center",
      keyframes: [
        { translateX: -55, translateY: -10 },
        { translateX: -100, translateY: 0 },
        { translateX: -40, translateY: 15 },
        { translateX: 40, translateY: 20 },
        { translateX: 70, translateY: 15 },
        { translateX: 130, translateY: 0 },
        { translateX: 50, translateY: -10 },
        { translateX: 0, translateY: 0 },
      ],
      duration: ANIMATION_DURATION,
      easing: "easeInOutSine",
      loop: ANIMATION_LOOP,
    });
    return;
  }
  if (window.innerWidth < 900) {
    anime({
      targets: ".barrel--center",
      keyframes: [
        { translateX: -80, translateY: -10 },
        { translateX: -190, translateY: 0 },
        { translateX: -70, translateY: 15 },
        { translateX: 60, translateY: 20 },
        { translateX: 130, translateY: 15 },
        { translateX: 180, translateY: 0 },
        { translateX: 70, translateY: -10 },
        { translateX: 0, translateY: 0 },
      ],
      duration: ANIMATION_DURATION,
      easing: "easeInOutSine",
      loop: ANIMATION_LOOP,
    });
  } else {
    anime({
      targets: ".barrel--center",
      keyframes: [
        { translateX: -120, translateY: -10 },
        { translateX: -250, translateY: 0 },
        { translateX: -80, translateY: 15 },
        { translateX: 90, translateY: 20 },
        { translateX: 190, translateY: 15 },
        { translateX: 220, translateY: 0 },
        { translateX: 80, translateY: -10 },
        { translateX: 0, translateY: 0 },
      ],
      duration: ANIMATION_DURATION,
      easing: "easeInOutSine",
      loop: ANIMATION_LOOP,
    });
  }
}

export function animateRightBarrel() {
  if (window.innerWidth < 500) {
    anime({
      targets: ".barrel--right",
      keyframes: [
        { translateX: -40, translateY: -10 },
        { translateX: -110, translateY: -5 },
        { translateX: -180, translateY: 5 },
        { translateX: -150, translateY: 20 },
        { translateX: -80, translateY: 15 },
        { translateX: -20, translateY: 10 },
        { translateX: 40, translateY: 4 },
        { translateX: 0, translateY: 0 },
      ],
      duration: ANIMATION_DURATION,
      easing: "easeInOutSine",
      loop: ANIMATION_LOOP,
    });
    return;
  }
  if (window.innerWidth < 900) {
    anime({
      targets: ".barrel--right",
      keyframes: [
        { translateX: -70, translateY: -10 },
        { translateX: -210, translateY: -5 },
        { translateX: -290, translateY: 5 },
        { translateX: -240, translateY: 25 },
        { translateX: -110, translateY: 20 },
        { translateX: -60, translateY: 10 },
        { translateX: 40, translateY: 4 },
        { translateX: 0, translateY: 0 },
      ],
      duration: ANIMATION_DURATION,
      easing: "easeInOutSine",
      loop: ANIMATION_LOOP,
    });
  } else {
    anime({
      targets: ".barrel--right",
      keyframes: [
        { translateX: -100, translateY: -10 },
        { translateX: -280, translateY: -5 },
        { translateX: -460, translateY: 5 },
        { translateX: -340, translateY: 25 },
        { translateX: -140, translateY: 20 },
        { translateX: -80, translateY: 10 },
        { translateX: 40, translateY: 4 },
        { translateX: 0, translateY: 0 },
      ],
      duration: ANIMATION_DURATION,
      easing: "easeInOutSine",
      loop: ANIMATION_LOOP,
    });
  }
}

export function animateHead() {
  anime({
    targets: ".knight__head",
    keyframes: [
      { translateY: 12 },
      { translateY: 0 },
      { translateY: -12 },
      { translateY: 0 },
      { translateY: 7 },
      { translateY: 0 },
      { translateY: -7 },
      { translateY: 0 },
    ],
    duration: ANIMATION_DURATION / 4,
    easing: "easeInOutSine",
  });
}
