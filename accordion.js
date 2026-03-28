// Accordion — Common Questions (index.html)
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');

    // Close all
    document.querySelectorAll('.accordion-btn').forEach(b => {
      b.classList.remove('open');
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });

    // Open clicked if it was closed
    if (!isOpen) {
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      body.classList.add('open');
    }
  });
});
