var canvas = document.getElementById('myCanvas');
canvas.width =600;
canvas.height =600;
var c= canvas.getContext('2d');
var stack=[];
var row,col;
var w =50;
var i=0;
var kk;
let next;
console.log(c.height);
console.log(canvas.width);

var box =[];
var current ;
row= canvas.width/w;
col= canvas.height/w;



var current ;





function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.border.l = false;
    b.border.r = false;
  } else if (x === -1) {
    a.border.r = false;
    b.border.l = false;
  }
  let y = a.j - b.j;
  if (y === 1) {
    a.border.t = false;
    b.border.b = false;
  } else if (y === -1) {
    a.border.b = false;
    b.border.t = false;
  }
}


function reset(){
c.clearRect(0,0,canvas.width,canvas.height);
box =[];
 kk =0;
for(var i=0;i<row; i++){
for(var j=0;j<col;j++)
	box.push(new Cell(i,j));
}

for(var i=0;i<box.length;i++){
	
	box[i].wall();
 }
 current = box[0];
current.highlight();



}







	//c.fillStyle = "rgb("+Math.random()*255+", "+Math.random()*255+", "+Math.random()*255+")";
	//console.log('sreachinging ...');
//console.log(kk);
//c.clearRect(0,0,canvas.width,canvas.height);
//console.log('Limit crossed  ' + kk);
	//console.log(stop);