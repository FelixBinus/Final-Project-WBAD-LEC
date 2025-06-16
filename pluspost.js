document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submitbtn").addEventListener("click", function () {
    const text = document.getElementById("text").value.trim();
    const imageInput = document.getElementById("imageUpload");
    const file = imageInput.files[0];

    if (!text || !file) {
      alert("Isi teks dan pilih gambar!");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;

      const post = {
        text: text,
        image: imageUrl,
        createdAt: new Date().toISOString(),
      };

      let posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.push(post);
      localStorage.setItem("posts", JSON.stringify(posts));

      alert("Post berhasil disimpan!");
      window.location.href = "profile.html";
      console.log("Submit diklik");
    };

    reader.readAsDataURL(file);
  });
});