var root = document.documentElement;
var card = document.getElementById("card");
var moveArea = document.getElementById("moveArea");


card.addEventListener("mousedown",()=>{
    root.addEventListener("mousemove", move);
    root.addEventListener("mouseup",()=>{
        root.removeEventListener("mousemove", move);
    })
})

function move(event){
    let x = event.clientX;
    let y = event.clientY;

    let box = moveArea.getBoundingClientRect();
    let left = box.left;
    let right = box.right;
    let top = box.top;
    let bottom = box.bottom;
 
    if( x < right && x > left && y < bottom && y > top){
        root.style.setProperty('--mousePosX',`${x}px`);
        root.style.setProperty('--mousePosY',`${y}px`);
    }else{
        root.removeEventListener("mousemove", move);
    }
}


