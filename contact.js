// Contact form — basic submit handler with success message
const form    = document.getElementById('contact-form');
const success = document.getElementById('form-success');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.style.display = 'none';
    success.style.display = 'block';
  });
}
