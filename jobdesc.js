const saveButtons = document.querySelectorAll('.save');

saveButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});