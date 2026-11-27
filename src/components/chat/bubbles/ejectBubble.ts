export default function ejectBubble(bubble: HTMLElement) {
  // BenchGram Anti-Delete: prevent DOM removal of deleted messages
  try {
    const cfg = JSON.parse(localStorage.getItem('benchgram_config') || '{}');
    if (cfg.antiDelete !== false) {
      if (!bubble.classList.contains('bench-deleted-bubble')) {
        bubble.classList.add('bench-deleted-bubble');
        bubble.style.opacity = '0.75';
        bubble.style.filter = 'contrast(0.9)';
        const textEl = bubble.querySelector('.message') || bubble;
        if (textEl && !textEl.querySelector('.bench-del-badge')) {
          const badge = document.createElement('span');
          badge.className = 'bench-del-badge';
          badge.textContent = ' 🚫 [Удалено]';
          badge.style.color = '#ff5959';
          badge.style.fontWeight = 'bold';
          badge.style.fontSize = '11px';
          badge.style.marginLeft = '6px';
          textEl.appendChild(badge);
        }
      }
      return;
    }
  } catch (e) {}

  // Default behaviour: remove bubble from DOM
  bubble.remove();
  bubble.middlewareHelper?.destroy?.();
}