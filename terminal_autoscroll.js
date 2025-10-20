
function scrollToBottom() {
  const output = document.querySelector('.terminal-output');
  if (output) {
    output.scrollTop = output.scrollHeight;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.terminal-input');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        setTimeout(scrollToBottom, 100); // Delay to allow output to render
      }
    });
  }
});
