  const btn = document.getElementById("joinBtn");

  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    this.textContent = this.classList.contains("active") ? "Joined" : "Join";
  });

    const btn2 = document.getElementById("joinBtn2");

  btn2.addEventListener("click", function () {
    this.classList.toggle("active");
    this.textContent = this.classList.contains("active") ? "Joined" : "Join";
  });

    const btn3 = document.getElementById("joinBtn3");

  btn3.addEventListener("click", function () {
    this.classList.toggle("active");
    this.textContent = this.classList.contains("active") ? "Joined" : "Join";
  });