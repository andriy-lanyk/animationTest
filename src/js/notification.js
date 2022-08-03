import Toastify from "toastify-js";

function notification(printText, duration = 3000) {
  Toastify({
    text: printText,
    duration,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      fontSize: "20px",
    },
    onClick() {}, // Callback after click
  }).showToast();
}

export default notification;
