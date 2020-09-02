const form = document.querySelector('form');
const email = document.querySelector('#email');
const errorText = document.querySelector('#error-text');
const errorIcon = document.querySelector('#error-icon');

email.addEventListener('keyup', (event) => {
  if (!email.value) hideError();
});

form.addEventListener(
  'submit',
  (event) => {
    event.preventDefault();
    checkEmail(email.value) ? hideError() : showError();
  },
  false
);

function checkEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function showError() {
  errorIcon.style.display = 'block';
  errorText.style.display = 'block';
  email.style.border = '2px solid hsl(0, 93%, 68%)';
}

function hideError() {
  errorIcon.style.display = 'none';
  errorText.style.display = 'none';
  email.style.border = '1px solid hsl(0, 36%, 70%)';
  form.reset();
}
