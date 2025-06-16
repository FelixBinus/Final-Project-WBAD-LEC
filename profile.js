
//follow button

function toggleFollow(el) {
    const followerDisplay = document.querySelector('.folljs');

    
    let currentFollowers = parseInt(followerDisplay.textContent.replace(/\./g, ''));
    const isFollowing = el.textContent === "Unfollow";

    
    el.textContent = isFollowing ? "Follow" : "Unfollow";
    el.classList.toggle("unfollow");

    
    currentFollowers = isFollowing ? currentFollowers - 1 : currentFollowers + 1;

    
    followerDisplay.textContent = currentFollowers.toLocaleString('id-ID');
  }


//profile nama pengguna 

 document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const nameElement = document.getElementById("userFullName");

  if (user && user.fullName) {
    nameElement.textContent = user.fullName;
  } else {
    nameElement.textContent = "Guest";
  }
});

//profile deskripsi pengguna 
document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const nameElement = document.getElementById("userDesc");

  if (user && user.deskripsiprofile) {
    nameElement.textContent = user.deskripsiprofile;
  } else {
    nameElement.textContent = "Hi! i'm new in Bridge Design hope everyone want to be my friend. Lets explore creative world together !!!";
  }
});

//profile img pengguna 

document.addEventListener("DOMContentLoaded", function () {
  const profilePreview = document.getElementById("profilePreview");
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (user && user.profileImage) {
    profilePreview.src = user.profileImage;
  } else {
    
    profilePreview.src = "./asset/diki.JPG";
  }
});





//postingan prfoiel 

document.addEventListener("DOMContentLoaded", function () {
  const postsContainer = document.getElementById("postsContainer");
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  if (posts.length === 0) {
    postsContainer.innerHTML = "<p>Belum ada post.</p>";
    return;
  }

  posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("cardpostprofile");
    postElement.innerHTML = `
      <div class="overlay">
        <div class="title"><p>${post.text}</p></div>
      </div>
      <img src="${post.image}" alt="Post Image" />
    `;
    postsContainer.appendChild(postElement);
  });
});


















//edit profile 



//edit full name

document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const inputElement = document.getElementById("namapengguna");

  if (user && user.fullName) {
   
    inputElement.value = user.fullName; 
  } else {
    
    inputElement.value = "Guest"; 
  }
});

//edit deskripi

document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const inputDesc = document.getElementById("descprofile");

  if (user && user.deskripsiprofile) {
    inputDesc.value = user.deskripsiprofile;
  } else {
    inputDesc.value = "Hi! I'm new in Bridge Design hope everyone want to be my friend. Let's explore creative world together !!!";
  }
});


//savebutton deskripsi 

document.getElementById("saveDescBtn").addEventListener("click", function () {
  const newDesc = document.getElementById("descprofile").value.trim();
  const newUserName = document.getElementById("namapengguna").value.trim();
  

  let user = JSON.parse(localStorage.getItem("loggedInUser"));
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (user) {
    user.deskripsiprofile = newDesc;
    user.fullName = newUserName;
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // Update data users
    const updatedUsers = users.map(u => {
      if (u.email === user.email) {
        u.deskripsiprofile = newDesc;
        u.fullName = newUserName;
      }
      return u;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
   
    alert("Deskripsi berhasil diperbarui!");
  }
});









//edit profile pic 




document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("uploadModal");
  const closeModalBtn = document.querySelector(".close-btn");
  const profilePicInput = document.getElementById("profilePicInput");
  const saveBtn = document.getElementById("saveProfilePic");
  const profilePreview = document.getElementById("profilePreview");



  //buka tutup buton
  openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });


  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });




  

  // Simpan foto
  
  saveBtn.addEventListener("click", () => {
    const file = profilePicInput.files[0];
    if (!file) {
      alert("Choose the picture");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const imageDataUrl = e.target.result;

      
      profilePreview.src = imageDataUrl;

      // localStorage
      let user = JSON.parse(localStorage.getItem("loggedInUser"));
      let users = JSON.parse(localStorage.getItem("users")) || [];

      if (user) {
        user.profileImage = imageDataUrl;
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        //update
        users = users.map(u => {
          if (u.email === user.email) {
            u.profileImage = imageDataUrl;
          }
          return u;
        });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Foto profil berhasil diperbarui!");
        modal.style.display = "none";
      }
    };
    reader.readAsDataURL(file);
  });



  //get items
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (storedUser && storedUser.profileImage) {
    profilePreview.src = storedUser.profileImage;
  }
});





