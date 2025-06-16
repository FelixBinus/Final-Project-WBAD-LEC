const likeButtons = document.querySelectorAll('.like');
const saveButtons = document.querySelectorAll('.save');

likeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});


saveButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});


