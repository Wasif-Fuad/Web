 var a=document.getElementById('dfs');
 var fr = 500;
 document.getElementById('frate').value = 500;
 a.addEventListener("click", dfs );
document.getElementById("bfs").addEventListener("click",bfs );
document.getElementById("fdfs").addEventListener("click",fdfs );
 document.getElementById("fbfs").addEventListener("click", fbfs);
 document.getElementById("set").addEventListener("click",function(){

var aa =  document.getElementById('frate').value ;
fr = parseInt(aa);
 document.getElementById('frate').value = aa;


 } );

var stop;


function dfs(){
clearInterval(stop);
reset();
stop = setInterval(function (){
for(var i=0;i<box.length;i++){
	
	box[i].wall();
 }

 
if(kk<box.length)
{
current.highlight();
current.visited = true;

let next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    kk++;
   
    
    stack.push(current);

   
    removeWalls(current, next);

   
    current = next;
  } 
  else if (stack.length > 0) {
  current = stack.pop();
  current.fallbackhighlight();
 
   }



//clearInterval(stop);

}
else 
{
	console.log('dfs');
	clearInterval(stop);



}


},fr);




}

function bfs(){

clearInterval(stop);
reset();
stop=setInterval(function (){
for(var i=0;i<box.length;i++){
	
	box[i].wall();
 }


if(kk<box.length)
{
current.highlight();
current.visited = true;

let next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    kk++;
  
    
    stack.push(current);

   
    removeWalls(current, next);

   
    current = next;
  } 
  else if (stack.length > 0) {
  
  current = stack.shift();
  current.fallbackhighlight();
   }





}
else
{
	current = box[0];

for(var i=0;i<box.length;i++){
	
	box[i].wall();
 }

 current.highlight();

console.log('trigger');

	clearInterval(stop);



}


},fr);



}



function fdfs(){

for(var i=0;i<box.length;i++){
	
console.log(box[i].i+" "+box[i].j+" left "+box[i].border.l+" right "+box[i].border.r+" top "+box[i].border.t+" bottom "+box[i].border.b);
box[i].visited= false;

 }


var lll=0;
clearInterval(stop);
 current = box[0];
 stack = [];


 console.log(box.length);
 console.log(box[0]);
 console.log(current);
stop=setInterval(function (){


for(var i=0;i<box.length;i++){
	
	box[i].wall();
 }
//console.log( 'current  '+current.i + "  "+ current.j);
current.highlight();
// if(lll==50)
// clearInterval(stop);

// lll++;
current.visited = true;
if(!(current.i==row-1 && current.j ==col-1))
{

// current.visited = true;

if(current.checkpath())
{current.adjacent(stack);
console.log('next ' + next.i +' '+ next.j + "    curr "+current.i+' '+ current.j);

}

else{
console.log('else e;se');
if(stack.length>0)
 {next = stack.pop();
 next.fallbackhighlight();}


}

if(current===next)
{	
	alert('the maze has no valid path');
	clearInterval(stop);



}


current = next;




 }
else
{	
	console.log('trigger');
	clearInterval(stop);



}


},fr);






}


function fbfs(){

for(var i=0;i<box.length;i++){
	
console.log(box[i].i+" "+box[i].j+" left "+box[i].border.l+" right "+box[i].border.r+" top "+box[i].border.t+" bottom "+box[i].border.b);
box[i].visited= false;

 }


var lll=0;
clearInterval(stop);
 current = box[0];
 stack = [];


 console.log(box.length);
 console.log(box[0]);
 console.log(current);
stop=setInterval(function (){


for(var i=0;i<box.length;i++){
	
	box[i].wall();
 }
//console.log( 'current  '+current.i + "  "+ current.j);
current.highlight();
// if(lll==50)
// clearInterval(stop);

// lll++;
current.visited = true;
if(!(current.i==row-1 && current.j ==col-1))
{

// current.visited = true;

if(current.checkpath())
{current.adjacent(stack);
console.log('next ' + next.i +' '+ next.j + "    curr "+current.i+' '+ current.j);

}

else{
console.log('else e;se');
if(stack.length>0)
 {next = stack.shift();
 next.fallbackhighlight();}


}

if(current===next)
{	
	alert('the maze has no valid path');
	clearInterval(stop);



}


current = next;




 }
else
{	
	console.log('trigger');
	clearInterval(stop);



}


},fr);






}