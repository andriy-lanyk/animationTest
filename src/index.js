import "./styles.scss";
import anime from "animejs/lib/anime.es.js";

import {
  animateLeftBarrel,
  animateCenterBarrel,
  animateRightBarrel,
  animateHead,
} from "./js/animation";
import { animateHands } from "./js/animationBody";
import disabledButton from "./js/disabledButton";
import notification from "./js/notification";
import {
  ANIMATION_DURATION,
  ANIMATION_LOOP,
  PLAY_AGAIN,
  WIN,
  LOST,
  FIRST_PLAY,
  CHOOSE_YOUR_BARREL,
  ENTER_NAME,
  PRESS_BUTTON,
  WATCH_MY_HANDS,
} from "./js/constants";
import spinner from "./js/loader";
import photoObj from "./js/image";

let numberOfGame = 0;
let clickOnBarrel = 0;

window.addEventListener("resize", resizeGameSection);
const gameSection = document.querySelector(".game");

function resizeGameSection() {
  if (window.innerWidth < 768) {
    const vh = window.innerHeight * 0.01;
    gameSection.style.setProperty("--vh", `${vh}px`);
  }
}

let playerName;
const targetForSpinner = document.querySelector(".game");
const greetingPage = document.querySelector(".game__greeting");
const greetingContainer = document.querySelector(".game__greeting__container");
const greetingInput = document.querySelector(".game__greeting__input");
const greetingButton = document.querySelector(".game__greeting__button");
greetingButton.addEventListener("click", onGreetingButtonClick);

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

  if (clickOnBarrel === 2 && numberOfGame === 1) {
    const coin = document.querySelector(`.barrel__coin--${attribute}`);
    coin.style.opacity = "1";
  }
  if (numberOfGame > 1 && clickOnBarrel === 1) {
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
  // if (isBarrelClick && clickOnBarrel === 1) {
  //   notification(PLAY_AGAIN);
  //   return;
  // }
  if (isBarrelClick) {
    clickOnBarrel += 1;
    animateOpenBarrel(targetName);
    if (numberOfGame === 1 && clickOnBarrel === 1) {
      notification(LOST);
      animateHead();
    }
    if (numberOfGame > 1 && clickOnBarrel === 1) {
      notification(WIN);
    }
  }
}

function disabledAllCoins() {
  const allCoins = document.querySelectorAll(".barrel__coin");
  setTimeout(() => {
    allCoins.forEach((elem) => (elem.style.opacity = "0"));
  }, ANIMATION_DURATION);
}

function startGame() {
  clickOnBarrel = 0;
  disabledAllCoins();
  disabledButton();
  animateLeftBarrel();
  animateCenterBarrel();
  animateRightBarrel();
  animateHands();
  numberOfGame += 1;
  const duration = ANIMATION_DURATION * ANIMATION_LOOP;
  notification(WATCH_MY_HANDS, duration);
  setTimeout(() => {
    notification(`${playerName}, ${CHOOSE_YOUR_BARREL}`);
  }, duration);
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
  disabledAllCoins();
  setTimeout(() => {
    notification(`${playerName} ${PRESS_BUTTON}`);
  }, ANIMATION_DURATION);
}

function onGreetingButtonClick(e) {
  e.preventDefault();

  if (!greetingInput.value) {
    notification(ENTER_NAME);
    return;
  }

  playerName = greetingInput.value;
  greetingContainer.classList.add("visually-hidden");
  spinner.spin(targetForSpinner);
  setTimeout(() => {
    spinner.stop();
    greetingPage.classList.add("visually-hidden");
    startShowCoin();
  }, 1000);
}
