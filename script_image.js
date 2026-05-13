document.querySelectorAll('.overlay').forEach(overlay => {
  const rows = 10;
  const cols = 10;

  for (let i = 0; i < rows * cols; i++) {
    const block = document.createElement('div');
    overlay.appendChild(block);
  }

  overlay.addEventListener('click', () => {
    const sound = document.getElementById('mine-sound');
    sound.currentTime = 0;
    sound.play();

    setTimeout(() => {
    sound.pause();
    sound.currentTime = 0;
    }, 3500);

    const blocks = Array.from(overlay.children);

    blocks.forEach((block, idx) => {
      setTimeout(() => {
        const angle = Math.random() * 360;
        const x = (Math.random() - 0.5) * 200;
        const y = 300 + Math.random() * 100;
        block.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
        block.style.opacity = 0;
      }, idx * 30);
    });

    setTimeout(() => {
      overlay.style.display = 'none';
    }, blocks.length * 30 + 500);
  });
});