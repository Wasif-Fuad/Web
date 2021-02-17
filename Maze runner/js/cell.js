
function Cell(i,j){
this. i= i;
this.j=j;
this.border={l:true,r:true,t:true,b:true}
this.visited = false;

this.highlight =function(){

c.fillStyle = 'yellow';
//c.strokeStyle = "rgba(1, 1, 1, 0)";
c.fillRect(this.i*w,this.j*w,w,w);

}
this.fallbackhighlight =function(){

c.fillStyle = 'green';
//c.strokeStyle = "rgba(1, 1, 1, 0)";
c.fillRect(this.i*w,this.j*w,w,w);

}

this.wall=function(){

	if(this.visited){
	c.fillStyle = 'red';
		c.fillRect(this.i*w,this.j*w,w,w);
	}else{
			c.fillStyle = 'pink';
		c.fillRect(this.i*w,this.j*w,w,w);

	}

if(this.border.l){
	c.beginPath();
	//c.lineWidth = ;
c.moveTo(this.i* w, this.j* w);
c.lineTo(this.i*w  , this.j*w +w);
c.closePath();
c.strokeColor = 'black';
c.stroke();
}
if(this.border.r){
	c.beginPath();
	
c.moveTo(this.i* w +w, this.j* w);
c.lineTo(this.i*w +w , this.j*w +w);
c.closePath();
c.strokeColor = 'black';
c.stroke();
}
if(this.border.t){
	c.beginPath();
	
c.moveTo(this.i* w, this.j* w);
c.lineTo(this.i*w + w , this.j*w );
c.closePath();
c.strokeColor = 'black';
c.stroke();
}
if(this.border.b){
	c.beginPath();
	
c.moveTo(this.i* w, this.j* w+w);
c.lineTo(this.i*w + w , this.j*w +w);
c.closePath();
c.strokeColor = 'black';
c.stroke();
}


}

this.checkNeighbors = function() {
    let neighbors = [];

    let top = box[indexx(i, j - 1)];
    let right = box[indexx(i + 1, j)];
    let bottom = box[indexx(i, j + 1)];
    let left = box[indexx(i - 1, j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      let r = Math.floor(Math.random()*neighbors.length);
      return neighbors[r];
    } else {
      return undefined;
    }
  }

this.adjacent = function (stack){

 
    var temp =[];
       
if(current.border.l==false )
{ 
 let left = box[indexx(i - 1, j)];

	if(left && !left.visited )
	{temp.push(left);
		console.log( "    curr "+current.i+' '+ current.j);

console.log('left '+ left.i+' '+left.j);}

}
if(current.border.r==false)
{	let right = box[indexx(i + 1, j)];
	if(right && !right.visited)
	{temp.push(right);
		console.log( "    curr "+current.i+' '+ current.j);
console.log('right  '+right.i+'  '+right.j);}
}
if(current.border.t==false )
{ let top = box[indexx(i, j - 1)];
		if(top && !top.visited )
	{temp.push(top);
		console.log( "    curr "+current.i+' '+ current.j);
console.log('top  ' + top.i+" "+ top.j);}
}
if(current.border.b==false )
	{	let bottom = box[indexx(i, j + 1)];


		if(bottom && !bottom.visited )
	{temp.push(bottom);
console.log( "    curr "+current.i+' '+ current.j);
console.log('bottom  ' +bottom.i+ " "+ bottom.j);


}
}


if(temp.length>0)	
{
	var x= Math.floor(Math.random() * temp.length);

	next = temp[x];
	console.log(' temp   '+next+ 'x '+ x);
	for(var l =0;l<temp.length;l++){

		if(l!=x)
			stack.push(temp[l]);

	}



}
 // for(var m =0;m<stack.length;m++)
 //  {
 //  	console.log('stack  next  '+ next );
 // 	console.log('stack  i=  '+ m +"    "+ stack[m].i+"  "+stack[m].j );
	
 // }
}


this.checkpath = function(){


    let top = box[indexx(i, j - 1)];
    let right = box[indexx(i + 1, j)];
    let bottom = box[indexx(i, j + 1)];
    let left = box[indexx(i - 1, j)];

    

if((current.border.l==false && !left.visited)||(current.border.r==false&& !right.visited)||(current.border.t==false&& !top.visited)||(current.border.b==false&& !bottom.visited))
return true;
else
return false;

}





}
function index(j, i) {
  if (i < 0 || j < 0 || i > col - 1 || j > row - 1) {
    return -1;
  }
  console.log("return "+(i + j * col));
  return i + j * col;
}

function indexx(j, i) {
  if (i < 0 || j < 0 || i > col - 1 || j > row - 1) {
    return -1;
  }
 
  return i + j * col;
}


