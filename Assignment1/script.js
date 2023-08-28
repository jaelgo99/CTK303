const form = document.forms["myForm"];
const hintbtn = document.getElementById("inline-btn");
let videoFrame = document.getElementById("video-container");

let clickCount = 0;
hintbtn.addEventListener("click", () => {
  if (clickCount == 0) {
    alert("Another word for a guy who thinks he fly");
  }
  if (clickCount == 1) {
    alert("Also the name of a popular TV show from the early 2000's");
  }
  if (clickCount == 2) {
    alert("Something worn by medical professionals");
  }
  if (clickCount > 2) {
    alert("No more hints!");
  }
  clickCount++;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const guess = form.querySelector('input[type="text"]').value;
  correctGuess = guess.includes("Scrubs");
  if (correctGuess == true) {
    // create alert
    alert("Correct!");
    // create link to video
    let video = document.createElement("iframe");
    video.setAttribute(
      "src",
      "https://www.youtube.com/embed/FrLequ6dUdM?si=D-bd5lnYB1t4N7di"
    );

    video.setAttribute("allowfullscreen", "");
    video.setAttribute("width", "500");
    video.setAttribute("height", "300");
    video.setAttribute("frameborder", "0");

    // add video to page
    videoFrame.appendChild(video);

    // if false
  } else {
    alert("Wrong!");
  }
});
