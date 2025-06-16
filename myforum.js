  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".myforumcard");
    const chatSections = document.querySelectorAll(".chat-section");

    cards.forEach(card => {
      card.addEventListener("click", function () {
        // 1. Sembunyikan semua chat section
        chatSections.forEach(section => {
          section.style.display = "none";
        });

        // 2. Ambil ID chat target dari atribut data-target
        const targetId = card.getAttribute("data-target");
        const targetChat = document.getElementById(targetId);

        // 3. Tampilkan chat yang sesuai
        if (targetChat) {
          targetChat.style.display = "flex";
        }

        // 4. (Opsional) Highlight card yang aktif
        cards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
      });
    });
  });