import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

const saveFormState = () => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const updateFormState = () => {
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
};

form.addEventListener('input', throttle(saveFormState, 500));

window.addEventListener('load', updateFormState);

form.addEventListener('submit', event => {
  event.preventDefault();
  if (emailInput.value || messageInput.value) {
    console.log('Form submitted:', {
      email: emailInput.value,
      message: messageInput.value,
    });
  }
  if (emailInput.value && messageInput.value) {
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
});
