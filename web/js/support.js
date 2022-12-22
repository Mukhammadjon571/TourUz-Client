const socket = io();
const messagesList = document.getElementById("messagesList");
const messageInput = document.getElementById("messageInput");
const nicknameInput = document.getElementById("nicknameInput");

const sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", function () {
  socket.emit(
    "chat message",
    nicknameInput.value + ": " + messageInput.value
  );
  messageInput.value = "";
});
socket.on("chat message", function (msg) {
  messagesList.innerHTML += `<li>${msg}</li>`;
  window.scrollTo(0, document.body.scrollHeight);
});

messageInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendButton.click();
  }
});