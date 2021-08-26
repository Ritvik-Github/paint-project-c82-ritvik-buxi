canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var current_position_of_mouse_x, current_position_of_mouse_y;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
  mouseEvent = "mouseDown";
  color = document.getElementById("color_in").value;
  width = document.getElementById("width_in").value;
  radius = document.getElementById("radius_in").value;
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius, 0, 2*Math.PI, false);
    ctx.stroke();
  }
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
  mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
  mouseEvent = "mouseleave";
}

function clear(){
  canvas.clearRect(600,800,this.canvas.width,this.canvas.height);
}