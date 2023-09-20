let button = document.getElementById('random');
let box = document.getElementById('box');
function randomcolor()
{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let w = Math.floor(Math.random()*50);
    let h = Math.floor(Math.random()*50);
    box.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    box.style.width = w+"em";
    box.style.height = h+"em";
}
button.onclick = function(){
    randomcolor();
}