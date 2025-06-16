



document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

 //localstorange simpan
  function saveUser(user) {
    let users = JSON.parse(localStorage.getItem("users")) || [];


    // Cek email
    if(users.find(u => u.email === user.email)) {
      return false; 
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  }





 
  function validEmail(email) {
    return email.includes("@") && email.endsWith(".com");
  }







  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullName = signupForm.querySelector("input[placeholder='Full Name']").value.trim();
      const username = signupForm.querySelector("input[placeholder='Username']").value.trim();
      const gender = signupForm.querySelector("input[name='gender']:checked")?.value;
      const email = signupForm.querySelector("input[type='email']").value.trim();
      const password = signupForm.querySelector("input[placeholder='Password']").value;
      const confirmPassword = signupForm.querySelector("input[placeholder='Re - Password']").value;

      if (!validEmail(email)) {
        alert("Email harus mengandung '@' dan diakhiri dengan '.com'");
        return;
      }

      if (password.length < 8) {
        alert("Password harus minimal 8 karakter");
        return;
      }

      if (password !== confirmPassword) {
        alert("Password dan Konfirmasi Password harus sama");
        return;
      }

      if (!fullName || !username || !gender) {
        alert("Harap isi semua field!");
        return;
      }

      
      const newUser = {
        fullName,
        username,
        gender,
        email,
        password,
        deskripsiprofile: "Hi! I'm new in Bridge Design hope everyone want to be my friend. Let's explore creative world together !!!",
        profileImage: "./asset/default-profile.png"
      };

      if(!saveUser(newUser)) {
        alert("Email sudah terdaftar, coba login.");
        return;
      }

      alert("Registrasi berhasil! Silakan login.");
      window.location.href = "signin.html";
    });
  }




  if (signinForm) {
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = signinForm.querySelector("input[type='email']").value.trim();
      const password = signinForm.querySelector("input[type='password']").value;

      if (!validEmail(email)) {
        alert("Email tidak valid. Harus mengandung '@' dan diakhiri dengan '.com'");
        return;
      }

      if (password.length < 8) {
        alert("Password harus minimal 8 karakter");
        return;
      }

      // localStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        alert("Email atau password salah!");
        return;
      }

      
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login berhasil!");
      window.location.href = "../index.html"; 
    });
  }
});