document.addEventListener('DOMContentLoaded', () => {
  const openFormBtn = document.getElementById('open-form');
  const signupForm = document.getElementById('signup-form');
  const mainContent = document.getElementById('main-content');
  
  openFormBtn.addEventListener('click', () => {
    signupForm.style.display = 'flex';
    mainContent.style.filter = 'blur(5px)';
  });
});
