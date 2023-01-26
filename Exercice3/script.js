//select the div to move
let boxe = document.getElementById("box"); 
// attribute to activate so that the object can be moved
boxe.setAttribute("draggable", true); 
//selection of the deposit area
let zone = document.getElementById("target"); 

// different events for moving and depositing the object

// this event is used to define the moment when the move has started
boxe.addEventListener("dragstart", dragStart); 
// this event indicates the moment when the object on flight the drop zone
zone.addEventListener("dragover", allowDrop); 
// this event indicates the moment when the object is dropped
zone.addEventListener("drop", dragDrop); 

function allowDrop(event) {
  event.preventDefault();
}

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function dragDrop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let box = document.getElementById(data);
  event.target.appendChild(box);
}
