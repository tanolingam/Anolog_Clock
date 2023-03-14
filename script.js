function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes() + seconds / 60;
    const hours = now.getHours() % 12 + minutes / 60;
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");
    hourHand.style.transform = `rotate(${hours * 30}deg)`;
    minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
    secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  }
  setInterval(setTime, 1000);
  