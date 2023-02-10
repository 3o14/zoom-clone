const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function backendDone(msg) {
  console.log(`The backend says: `, msg);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, backendDone);
  // socketIO : socket.emit()  <->  webSocket : socket.send()
  // emit(event, argument1, argument2, ...) 함수function도 가능
  // emit의 parameter로 함수를 전달하기 위해서는 반드시 마지막 argument에 위치해야 한다.
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
