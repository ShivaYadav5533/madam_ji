// 🎉 Confetti effect using JS (optional library-free simple burst)
document.addEventListener("DOMContentLoaded", () => {
  const confettiCount = 100;
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none';
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.top = Math.random() * window.innerHeight + 'px';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.opacity = '0.8';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.borderRadius = '50%';
    confetti.style.animation = `fall ${2 + Math.random() * 3}s ease-out forwards`;
    confettiContainer.appendChild(confetti);
  }
});

// Add keyframes for falling confetti
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(style);
