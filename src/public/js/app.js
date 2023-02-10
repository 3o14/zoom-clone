const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", { payload: input.value }, () => {  // <-> webSocket : socket.send()
    console.log("server is done!");
    });
    // emit(event, argument1, argument2, ...)
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);