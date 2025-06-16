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



  // Buka popup saat tombol komentar ditekan
  document.querySelectorAll('.fa-comment').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('commentPopup').style.display = 'block';
    });
  });

  // Tutup popup saat tombol close ditekan
  document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('commentPopup').style.display = 'none';
  });

  

