// teks confession
const text = [
  "Hai Cantik 🌸💕",
  "Aku cuma mau bilang sesuatu...",
  "Aku masih sering kepikiran kamu 🐰",
  "Kadang kangen, tapi diam aja 🥺",
  "Takut kalau aku ngomong, malah bikin aneh...",
  "Mungkin kita bukan siapa-siapa lagi...",
  "Tapi aku berharap bisa kayak dulu lagi ✨",
  "Jujurly aku masih suka jealous 🙈",
  "Tapi gapapa, aku tau kok itu",
  "Tapi itu kan teman kamu kok",
  "Aku paham itu juga kok hehe gapapa arum",
  "Aku ini cuman berlebihan jealous aku",
  "Dan aku juga ga berhak juga kok",
  "Apa lagi Ganggu kamu kayak spam chat kayak gimana",
  "Takut kamu gasuka atau gimana gitu",
  "Aku minta maaf yaa udah repot mengaledinin aku apa lagi itu menguras energi kamu",
  "I LOVE YOU ❤️",
  "— Dari seseorang yang masih sayang banget sama kamu ❤️"
];

let index = 0, charIndex = 0;
const typingElement = document.getElementById("typing");
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const messageBox = document.getElementById("messageBox");
const ending = document.getElementById("ending");
const loveText = document.getElementById("loveText");
const bgMusic = document.getElementById("bgMusic");

function type() {
  if (index < text.length) {
    if (charIndex < text[index].length) {
      typingElement.innerHTML += text[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 50);
    } else {
      typingElement.innerHTML += "<br><br>";
      charIndex = 0;
      index++;
      setTimeout(type, 200);
    }
  } else {
    // selesai -> slide out -> ending
    setTimeout(() => {
      messageBox.classList.add("slide-out");
      setTimeout(() => {
        messageBox.classList.add("hidden");
        showEnding();
      }, 800);
    }, 2000);
  }
}

// ending typing effect
function showEnding() {
  ending.classList.add("show");
  const loveMsg = "I Love You";
  let i = 0;
  function typeLove() {
    if (i < loveMsg.length) {
      loveText.innerHTML += loveMsg.charAt(i);
      i++;
      setTimeout(typeLove, 200);
    }
  }
  typeLove();

  // hati kecil beterbangan di ending
  function spawnEndingHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 16 + Math.random() * 30 + "px";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";
    document.querySelector(".ending").appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }
  setInterval(spawnEndingHeart, 500);
}

// buka amplop
openBtn.addEventListener("click", () => {
  // mulai musik setelah klik
  if (bgMusic) {
    bgMusic.play().catch(err => console.log("Autoplay dicegah:", err));
  }

  envelope.classList.add("open");
  openBtn.style.display = "none";
  setTimeout(() => {
    envelope.style.display = "none";
    messageBox.classList.remove("hidden");
    type();
  }, 1200);
});

// hearts floating di background awal
function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 24 + "px";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(spawnHeart, 400);
