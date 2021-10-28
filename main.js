const todos= document.querySelectorAll(".todo");
const all_item = document.querySelectorAll(".item");
let draggableTodo = null;

todos.forEach((todo) =>{
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("dragend", dragEnd);
});

function dragStart(){
    draggableTodo = this;
    console.log("dragStart");
}
function dragEnd(){
    draggableTodo = null;
    console.log("dragEnd");
}
all_item.forEach((item)=>{
    item.addEventListener("dragover", dragOver);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
    item.addEventListener("drop",dragDrop);
});

function dragOver(e){
    e.preventDefault();
    console.log("dragOver");
}

function dragEnter(){
    console.log("dragEnter");
}

function dragLeave(){
    console.log("dragLeave");
}

function dragDrop(){
    this.appendChild(draggableTodo);
    console.log("dropped");

}


