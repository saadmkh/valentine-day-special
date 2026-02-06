const messages = [
  "Wait… what? 😶",
  "That wasn’t what I hoped for… 😕",
  "My heart just skipped… and not in a good way 💔",
  "Please don’t do this to me 🥺",
  "I’m being serious now 😔",
  "Okay. The universe says yes ✨💖"
];

let index = 0;

const noButton = document.getElementById("nobutton");
const yesButton = document.getElementById("yesBtton");
const output = document.getElementById("output");
const pic1 = document.getElementById("pic1");
const hearBroke = document.getElementById("hearBroke");

noButton.addEventListener("click", () => {
  if (index === 1) {
    pic1.style.backgroundImage = "url(pic6.gif)";
  }

  if (index === 3) {
    hearBroke.style.display = "block";
    pic1.style.backgroundImage = "url(pic2.gif)";
  }

  if (index === messages.length - 1) {
    noButton.textContent = "Yes";
    noButton.style.backgroundColor = "rgb(5, 163, 5)";
    noButton.style.color = "white";

    noButton.animate(
      [{ opacity: 0.2 }, { opacity: 1 }],
      { duration: 1000, fill: "forwards" }
    );

    noButton.onclick = yes;
  }

  if (index < messages.length) {
    output.textContent = messages[index];
    index++;
  }
});

yesButton.addEventListener("click", yes);

function yes() {
  hearBroke.style.display = "none";
  noButton.style.display = "none";
  yesButton.style.display = "none";
  output.textContent = "Finally 💘 You’re stuck with me now.";
  pic1.style.backgroundSize = "contain";
  pic1.style.backgroundImage = "url(pic3.gif)";
}
