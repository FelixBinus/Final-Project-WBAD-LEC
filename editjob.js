document.getElementById('edit').addEventListener('click', function () {
    window.location.href = 'editjob.html';
});

const saveBtn = document.getElementById('saveButton');

  saveBtn.addEventListener('click', function () {
    this.classList.add('clicked');
  });

  saveBtn.addEventListener('click', function () {
  this.classList.toggle('clicked');
});


document.getElementById('savebuttonn').addEventListener("click", function () {
    window.location.href = "savejob.html"; 
  });