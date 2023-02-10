const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", { payload: input.value }, () => {  // <-> webSocket : socket.send()
    console.log("server is done!");
    });
    // emit(event, argument(object도 가능), (server에서 호출하는) function ) 
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);