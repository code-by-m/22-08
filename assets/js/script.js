
const isMobile = () => {
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};


const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

const cursor = document.querySelector(".heart-cursor");

if (!isMobile() && !isTouchDevice()) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
} else {
  // Mobilde cursor'u gizle
  if (cursor) cursor.style.display = 'none';
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});



function createFallingHearts() {
  const heartsContainer = document.querySelector(".falling-hearts");
  
  // Mobilde daha az kalp oluştur
  if (isMobile() && document.querySelectorAll('.falling-heart').length >= MOBILE_SETTINGS.maxHearts) {
    return;
  }
  
  const heart = document.createElement("div");
  heart.className = "falling-heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createFallingHearts, MOBILE_SETTINGS.heartInterval);

function createConfetti() {
  const colors = ["#ff6b9d", "#ffd700", "#87ceeb", "#ffb6c1", "#dda0dd"];

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }, i * 50);
  }
}

function createAdvancedConfetti() {
  const colors = [
    "#0066cc",
    "#0080ff",
    "#3399ff",
    "#66b3ff",
    "#99ccff",
    "#004d99",
    "#0073e6",
    "#1a8cff",
    "#4da6ff",
    "#80bfff",
    "#b3d9ff",
    "#003d7a",
    "#005ce6",
    "#2693ff",
    "#59b3ff",
  ];
  const shapes = ["💙", "🩵", "💎", "🔷", "🔹", "💠", "🌀", "❄️", "💧", "🌊"];

  for (let i = 0; i < 150; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "advanced-confetti";
      confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.fontSize = Math.random() * 20 + 15 + "px";
      confetti.style.animationDuration = Math.random() * 4 + 3 + "s";
      confetti.style.animationDelay = Math.random() * 2 + "s";

      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 8000);
    }, i * 30);
  }
}

function createHeartExplosion() {
  const blueHearts = [
    "💙",
    "🩵",
    "💎",
    "🔷",
    "🔹",
    "💠",
    "🌀",
    "❄️",
    "💧",
    "🌊",
  ];

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "explosion-heart";
    heart.innerHTML = blueHearts[Math.floor(Math.random() * blueHearts.length)];

    const angle = (360 / 20) * i;
    const distance = Math.random() * 300 + 200;

    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = Math.random() * 20 + 25 + "px";
    heart.style.color = `hsl(${200 + Math.random() * 60}, 80%, ${
      50 + Math.random() * 30
    }%)`;
    heart.style.filter = `drop-shadow(0 0 15px #0080ff) hue-rotate(${
      Math.random() * 60
    }deg)`;

    const duration = Math.random() * 2 + 3;
    heart.style.animation = `circularHeartBurst ${duration}s ease-out forwards`;
    heart.style.setProperty("--angle", angle + "deg");
    heart.style.setProperty("--distance", distance + "px");

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "explosion-heart";
      heart.innerHTML =
        blueHearts[Math.floor(Math.random() * blueHearts.length)];

      heart.style.left = Math.random() * 100 + "%";
      heart.style.top = Math.random() * 100 + "%";
      heart.style.fontSize = Math.random() * 15 + 20 + "px";
      heart.style.color = `hsl(${200 + Math.random() * 60}, 85%, ${
        45 + Math.random() * 35
      }%)`;
      heart.style.filter = `drop-shadow(0 0 12px #4da6ff) saturate(1.5)`;

      const duration = Math.random() * 2 + 2.5;
      heart.style.animation = `randomHeartBurst ${duration}s ease-out forwards`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }, i * 100);
  }
}

function createScreenShake() {
  document.body.style.animation = "enhancedScreenShake 0.8s ease-in-out";
  setTimeout(() => {
    document.body.style.animation = "";
  }, 1000);
}

function createFloatingHearts() {
  const blueHearts = ["💙", "🩵", "💎", "🔷", "🔹", "💠"];

  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.innerHTML =
        blueHearts[Math.floor(Math.random() * blueHearts.length)];
      heart.style.left = Math.random() * 100 + "%";
      heart.style.fontSize = Math.random() * 12 + 18 + "px";
      heart.style.color = `hsl(${200 + Math.random() * 60}, 90%, ${
        50 + Math.random() * 25
      }%)`;
      heart.style.filter = `drop-shadow(0 0 10px #0080ff)`;
      heart.style.animation = `floatUpAnimation ${
        Math.random() * 3 + 5
      }s linear forwards`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 8000);
    }, i * 150);
  }
}

function playLoveMusic() {
  const audio = document.getElementById("loveAudio");

  if (audio) {
    audio.currentTime = 0;

    audio.volume = 0.4;

    audio.play().catch((error) => {
      console.log("Müzik çalınamadı:", error);
    });
  }
}

function stopLoveMusic() {
  const audio = document.getElementById("loveAudio");
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

gsap.from(".main-title", {
  duration: 2,
  y: -100,
  opacity: 0,
  ease: "power2.out",
  delay: 2,
});

gsap.from(".subtitle", {
  duration: 2,
  y: 100,
  opacity: 0,
  ease: "power2.out",
  delay: 2.5,
});

gsap.from(".photo-frame", {
  duration: 1.5,
  scale: 0,
  rotation: 360,
  ease: "back.out(1.7)",
  delay: 3,
  stagger: 0.2,
});

$(document).ready(function () {
  var envelope = $("#envelope");
  var num = 0;

  envelope.click(function () {
    num += 1;
    num %= 2;
    if (num == 0) {
      close();
    } else {
      open();
    }
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

window.addEventListener("load", () => {
  const curtainOverlay = document.querySelector(".curtain-overlay");
  const container = document.querySelector(".container");

  setTimeout(() => {
    curtainOverlay.classList.add("open");

    setTimeout(() => {
      container.classList.add("visible");

      setTimeout(() => {
        curtainOverlay.style.display = "none";
      }, 500);
    }, 1500);
  }, 2000);
});

function love() {
  const button = document.querySelector(".love-button");
  if (button) {
    button.classList.add("clicked");
    button.innerHTML = "💙Seni Seviyorum 💙";
  }

  document.body.classList.add("blue-theme");

  playLoveMusic();

  createScreenShake();

  setTimeout(() => {
    createAdvancedConfetti();
  }, 400);

  setTimeout(() => {
    createHeartExplosion();
  }, 600);

  setTimeout(() => {
    createFloatingHearts();
  }, 1000);
}

function createFlowers() {
  const flowers = ["🌸", "🌺", "🌻", "🌷", "🌹", "💐", "🌼", "🏵️"];

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDuration = Math.random() * 3 + 2 + "s";
      flower.style.fontSize = Math.random() * 20 + 20 + "px";

      document.body.appendChild(flower);

      setTimeout(() => {
        flower.remove();
      }, 5000);
    }, i * 100);
  }
}



function celebrate() {
  console.log("MEGA KUTLAMA BAŞLADI! 🎉🌸💥");

  createMegaConfetti();

  setTimeout(() => {
    createExtendedFlowerRain();
  }, 100);

  setTimeout(() => {
    createRainbowConfetti();
  }, 500);

  setTimeout(() => {
    createSuperFireworks();
  }, 1000);

  setTimeout(() => {
    confetti({
      particleCount: 500,
      spread: 150,
      origin: { y: 0.4 },
      colors: [
        "#ff6b9d",
        "#ffd700",
        "#87ceeb",
        "#ffb6c1",
        "#dda0dd",
        "#ff69b4",
        "#00ff7f",
        "#ff4500",
        "#9c27b0",
        "#e91e63",
        "#00bcd4",
        "#4caf50",
      ],
    });
  }, 3000);

  setTimeout(() => {
    confetti({
      particleCount: 600,
      spread: 180,
      origin: { y: 0.3 },
      colors: [
        "#ff1744",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4caf50",
        "#8bc34a",
        "#cddc39",
        "#ffeb3b",
        "#ffc107",
        "#ff9800",
        "#ff5722",
      ],
    });
  }, 5000);

  if (typeof createScreenShake === "function") {
    createScreenShake();
  }
}

// Touch gesture desteği
if (isTouchDevice()) {
  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartY = 0;
  let touchEndY = 0;

  document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  });

  document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        // Sağa swipe - özel aksiyon
        createFloatingHearts();
      } else {
        // Sola swipe - özel aksiyon
        createAdvancedConfetti();
      }
    }
  }

  // Double tap desteği
  let lastTap = 0;
  document.addEventListener('touchend', function(e) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
      // Double tap algılandı
      createHeartExplosion();
      e.preventDefault();
    }
    lastTap = currentTime;
  });
}

function createCanvasConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#ff6b9d", "#ffd700", "#87ceeb", "#ffb6c1", "#dda0dd", "#ff69b4"],
  });
}

function createHeartConfetti() {
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.7 },
    shapes: ["circle"],
    colors: ["#ff1744", "#e91e63", "#f06292", "#ffb3ba"],
    scalar: 1.2,
  });
}

function createFireworks() {
  const duration = 3000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#ff6b9d", "#ffd700", "#87ceeb"],
      })
    );

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#ffb6c1", "#dda0dd", "#ff69b4"],
      })
    );
  }, 250);
}

function createRainbowConfetti() {
  confetti({
    particleCount: 150,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: [
      "#ff0000",
      "#ff8000",
      "#ffff00",
      "#80ff00",
      "#00ff00",
      "#00ff80",
      "#00ffff",
      "#0080ff",
      "#0000ff",
      "#8000ff",
      "#ff00ff",
      "#ff0080",
    ],
  });

  confetti({
    particleCount: 150,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: [
      "#ff0000",
      "#ff8000",
      "#ffff00",
      "#80ff00",
      "#00ff00",
      "#00ff80",
      "#00ffff",
      "#0080ff",
      "#0000ff",
      "#8000ff",
      "#ff00ff",
      "#ff0080",
    ],
  });
}

function createFlowerRain() {
  const flowers = ["🌸", "🌺", "🌻", "🌷", "🌹", "💐", "🌼", "🏵️", "🌿", "🍀"];

  const flowerInterval = setInterval(() => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const flower = document.createElement("div");
        flower.className = "falling-flower";
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.position = "fixed";
        flower.style.top = "-50px";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.fontSize = Math.random() * 15 + 20 + "px";
        flower.style.zIndex = "9999";
        flower.style.pointerEvents = "none";
        flower.style.animation = `flowerFall ${
          Math.random() * 2 + 3
        }s linear forwards`;

        document.body.appendChild(flower);

        setTimeout(() => {
          flower.remove();
        }, 5000);
      }, i * 100);
    }
  }, 200);

  setTimeout(() => {
    clearInterval(flowerInterval);
  }, 3000);
}

function createSuperConfetti() {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 },
    colors: [
      "#ff6b9d",
      "#ffd700",
      "#87ceeb",
      "#ffb6c1",
      "#dda0dd",
      "#ff69b4",
      "#00ff7f",
      "#ff4500",
    ],
  });

  setTimeout(() => {
    confetti({
      particleCount: 150,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.3 },
      colors: ["#ff1744", "#e91e63", "#f06292", "#ffb3ba"],
    });
  }, 300);

  setTimeout(() => {
    confetti({
      particleCount: 150,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.3 },
      colors: ["#00bcd4", "#26c6da", "#4dd0e1", "#80deea"],
    });
  }, 600);

  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { x: 0.5, y: 1 },
      colors: ["#4caf50", "#66bb6a", "#81c784", "#a5d6a7"],
    });
  }, 900);
}

function createExtendedFlowerRain() {
  const flowers = [
    "🌸",
    "🌺",
    "🌻",
    "🌷",
    "🌹",
    "💐",
    "🌼",
    "🏵️",
    "🌿",
    "🍀",
    "🌱",
    "🌾",
    "🌵",
    "🌴",
    "🎋",
  ];

  const flowerInterval = setInterval(() => {
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const flower = document.createElement("div");
        flower.className = "falling-flower";
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.position = "fixed";
        flower.style.top = "-50px";
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.fontSize = Math.random() * 20 + 25 + "px";
        flower.style.zIndex = "9999";
        flower.style.pointerEvents = "none";
        flower.style.animation = `flowerFall ${
          Math.random() * 3 + 4
        }s linear forwards`;

        document.body.appendChild(flower);

        setTimeout(() => {
          flower.remove();
        }, 8000);
      }, i * 50);
    }
  }, 150);

  setTimeout(() => {
    clearInterval(flowerInterval);
  }, 8000);
}

function createMegaConfetti() {
  confetti({
    particleCount: 400,
    spread: 120,
    origin: { y: 0.6 },
    colors: [
      "#ff6b9d",
      "#ffd700",
      "#87ceeb",
      "#ffb6c1",
      "#dda0dd",
      "#ff69b4",
      "#00ff7f",
      "#ff4500",
      "#9c27b0",
      "#e91e63",
    ],
  });

  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 200,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.4 },
        colors: [
          "#ff1744",
          "#e91e63",
          "#f06292",
          "#ffb3ba",
          "#ff9800",
          "#ffc107",
        ],
      });

      confetti({
        particleCount: 200,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.4 },
        colors: [
          "#00bcd4",
          "#26c6da",
          "#4dd0e1",
          "#80deea",
          "#4caf50",
          "#66bb6a",
        ],
      });

      confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.7 },
        colors: [
          "#9c27b0",
          "#ba68c8",
          "#ce93d8",
          "#e1bee7",
          "#673ab7",
          "#9575cd",
        ],
      });
    }, i * 500);
  }
}

function createSuperFireworks() {
  const duration = 6000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 80 * (timeLeft / duration);

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#ff6b9d", "#ffd700", "#87ceeb"],
      })
    );

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#ffb6c1", "#dda0dd", "#ff69b4"],
      })
    );

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.4, 0.6), y: Math.random() - 0.1 },
        colors: ["#00ff7f", "#ff4500", "#9c27b0"],
      })
    );

    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.2, 0.8), y: Math.random() - 0.3 },
        colors: ["#e91e63", "#00bcd4", "#4caf50"],
      })
    );
  }, 200);
}

function celebrate() {
  console.log("MEGA KUTLAMA BAŞLADI! 🎉🌸💥");

  createMegaConfetti();

  setTimeout(() => {
    createExtendedFlowerRain();
  }, 100);

  setTimeout(() => {
    createRainbowConfetti();
  }, 500);

  setTimeout(() => {
    createSuperFireworks();
  }, 1000);

  setTimeout(() => {
    confetti({
      particleCount: 500,
      spread: 150,
      origin: { y: 0.4 },
      colors: [
        "#ff6b9d",
        "#ffd700",
        "#87ceeb",
        "#ffb6c1",
        "#dda0dd",
        "#ff69b4",
        "#00ff7f",
        "#ff4500",
        "#9c27b0",
        "#e91e63",
        "#00bcd4",
        "#4caf50",
      ],
    });
  }, 3000);

  setTimeout(() => {
    confetti({
      particleCount: 600,
      spread: 180,
      origin: { y: 0.3 },
      colors: [
        "#ff1744",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4caf50",
        "#8bc34a",
        "#cddc39",
        "#ffeb3b",
        "#ffc107",
        "#ff9800",
        "#ff5722",
      ],
    });
  }, 5000);

  if (typeof createScreenShake === "function") {
    createScreenShake();
  }
}

