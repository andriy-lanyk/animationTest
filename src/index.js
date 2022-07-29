import "./styles.scss";
import anime from "animejs/lib/anime.es.js";

import {
  animateLeftBarrel,
  animateCenterBarrel,
  animateRightBarrel,
  animateHead,
} from "./js/animation";
import disabledButton from "./js/disabledButton";
import notification from "./js/notification";
import {
  ANIMATION_DURATION,
  ANIMATION_LOOP,
  PLAY_AGAIN,
  WIN,
  LOST,
  FIRST_PLAY,
} from "./js/constants";

let numberOfGame = 0;
let clickOnBarrel = 0;

const startButton = document.querySelector(".start__button");
startButton.addEventListener("click", startGame);

const barrelsContainer = document.querySelector(".barrel__container");
barrelsContainer.addEventListener("click", openBarrel);

function animateOpenBarrel(attribute) {
  anime({
    targets: `.barrel__image--${attribute}`,
    keyframes: [
      { translateX: -60, translateY: -80, rotate: -25 },
      { translateX: 0, translateY: 0, rotate: 0 },
    ],
    duration: ANIMATION_DURATION,
    easing: "easeInOutSine",
    loop: 1,
  });
  disabledButton(1);

  if (numberOfGame > 1) {
    const coin = document.querySelector(`.barrel__coin--${attribute}`);
    coin.style.opacity = "1";
  }
}

function openBarrel(e) {
  const targetName = e.target.name;
  const isBarrelClick =
    targetName === "right" || targetName === "center" || targetName === "left";
  if (isBarrelClick && numberOfGame === 0) {
    notification(FIRST_PLAY);
    return;
  }
  if (isBarrelClick && clickOnBarrel === 1) {
    notification(PLAY_AGAIN);
    return;
  }
  if (isBarrelClick && clickOnBarrel < 1) {
    clickOnBarrel += 1;
    animateOpenBarrel(targetName);
    if (numberOfGame === 1) {
      notification(LOST);
      animateHead();
    }
    if (numberOfGame > 1) {
      notification(WIN);
    }
  }
}

function startGame() {
  clickOnBarrel = 0;
  disabledButton(ANIMATION_LOOP);
  animateLeftBarrel();
  animateCenterBarrel();
  animateRightBarrel();
  numberOfGame += 1;
}

function startShowCoin() {
  anime({
    targets: ".barrel__image--center",
    keyframes: [
      { translateX: -60, translateY: -80, rotate: -25 },
      { translateX: 0, translateY: 0, rotate: 0 },
    ],
    duration: ANIMATION_DURATION,
    easing: "easeInOutSine",
    loop: 1,
  });
  disabledButton(1);
  const allCoins = document.querySelectorAll(".barrel__coin");
  setTimeout(() => {
    allCoins.forEach((elem) => (elem.style.opacity = "0"));
  }, ANIMATION_DURATION);
}

startShowCoin();
