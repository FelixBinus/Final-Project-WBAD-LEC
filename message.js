   function sendMessage() {
      const input = document.getElementById("chatInput");
      const messageText = input.value.trim();
      if (!messageText) return;

      const chatBox = document.getElementById("chatBox");
      const messageDiv = document.createElement("div");
      messageDiv.className = "message sent";
      messageDiv.textContent = messageText;

      chatBox.appendChild(messageDiv);
      chatBox.scrollTop = chatBox.scrollHeight;
      input.value = "";
    }



  const chatData = {
    "Felix Komut": [
      { sender: "Felix", message: "Hai, lagi apa?" },
      { sender: "You", message: "Lagi belajar 😁" }
    ],
    "Stephanie Vany": [
      { sender: "Stephanie", message: "Sudah selesai tugasnya?" },
      { sender: "You", message: "Belum, kamu?" }
    ]
  };

  function openChat(userName) {
    const chatBox = document.getElementById("chatBox");
    const chats = chatData[userName];
    chatBox.innerHTML = ""; // Clear existing chat

    chats.forEach(chat => {
      const div = document.createElement("div");
      div.className = "message";
      div.style.alignSelf = chat.sender === "You" ? "flex-end" : "flex-start";
      div.textContent = chat.message;
      chatBox.appendChild(div);
    });
  }

