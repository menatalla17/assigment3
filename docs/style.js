const wrapper = document.getElementById('formWrapper');
const toSignup = document.getElementById('toSignup');
const toLogin = document.getElementById('toLogin');

toSignup.addEventListener('click', () => {
  wrapper.style.transform = 'translateX(0)';
});

toLogin.addEventListener('click', () => {
  wrapper.style.transform = 'translateX(-50%)';
});

function togglePassword(inputId, toggleId) {
  const input = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);

  toggle.addEventListener('click', () => {
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    toggle.textContent = show ? '🙈' : '👁️';
  });
}

togglePassword('signupPass', 'toggleSignup');
togglePassword('loginPass', 'toggleLogin');
