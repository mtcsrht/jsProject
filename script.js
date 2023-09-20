let button = document.getElementById('random');
let box = document.getElementById('box');
let bigbox = document.getElementById('bigbox');


function randomcolor()
{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let w = Math.floor(Math.random()*1000);
    let h = Math.floor(Math.random()*700);
    box.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    box.style.width = w+"px";
    box.style.height = h+"px";
    
}

button.onclick = function(){
    randomcolor();
}