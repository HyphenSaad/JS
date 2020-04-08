const text = document.querySelector(".text");
const circle = document.querySelector(".circle");

// to display on-load
window.addEventListener("load", () => {
  text.innerText = "Checking";
  // to animate dots
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      text.innerText += ".";
    }, (1000 / 3) * i);
  }
});

// to check internet conection after 1s
setInterval(() => {
  if (window.navigator.onLine) {
    circle.style.backgroundColor = "green";
    text.innerText = "Online";
  } else {
    circle.style.backgroundColor = "red";
    text.innerText = "Offline";
  }
}, 1000);
