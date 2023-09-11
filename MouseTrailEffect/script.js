let cursorPosition = { x: 0, y: 0 };
let isCursorMoving = false;
let cursorMoveTimeout;
let circles = [];
let circleRemovalInterval;

const cursor = document.getElementById("main");

document.addEventListener("mousemove", (e) => {
  cursorPosition.x = e.clientX;
  cursorPosition.y = e.clientY;
  cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";

  isCursorMoving = true;

  clearTimeout(cursorMoveTimeout);

  cursorMoveTimeout = setTimeout(() => {
    isCursorMoving = false;
    setTimeout(() => {
      clearInterval(circleRemovalInterval);
      circleRemovalInterval = setInterval(() => {
        if (circles.length > 0) {
          let circle = circles.shift();
          circle.remove();
        } else {
          clearInterval(circleRemovalInterval);
        }
      }, 25);
    }, 1000);
  }, 100);
});

setInterval(() => {
  if (isCursorMoving) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    document.body.appendChild(circle);

    circle.style.left = cursorPosition.x - circle.offsetWidth / 2 + "px";
    circle.style.top = cursorPosition.y - circle.offsetHeight / 2 + "px";

    circles.push(circle);
  }
}, 10);
