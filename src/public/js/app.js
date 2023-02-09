// 프론트에서 백 연결
const socket = new WebSocket(`ws://${window.location.host}`);

const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

socket.addEventListener("open", () => {
    console.log("Connected to Browser ✅");
})

socket.addEventListener("message", (message) => {
    console.log("New message: ", message.data);
});  

socket.addEventListener("close", () => {
    console.log("Disconnected from the Browser ❌");
})

function handleSubmit(event) {
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(input.value);
    input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);