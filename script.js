const container=document.querySelector("#container")
const btn=document.querySelector("#size");
let mouseClick;
let userClick=document.querySelectorAll("body");
userClick.forEach(userClick =>userClick.addEventListener('mousedown',()=>{mouseClick=true;}));
userClick.forEach(userClick =>userClick.addEventListener('mouseup',()=>{mouseClick=false;}));
const reset=document.querySelector("#reset");
reset.addEventListener('click',()=>{createGrid(size)});
let size;
createGrid(size);
btn.addEventListener('click',()=>{
                                size= prompt("Enter size of grid?");
                                createGrid(size);
                                    });

function createGrid(size){
    clear();
    if(!size){size=70;}
    size=size*size;
    for(let i=0;i<size;i++){    
        const div=document.createElement("div");
        div.id="square";
        div.style.width=`${Math.sqrt((30*30)/size)}vw`;
        div.style.height=`${Math.sqrt((30*30)/size)}vw`;
        container.appendChild(div);
    }

function clear(){
    const squares=document.querySelectorAll("#square")
    squares.forEach(squares=>{
        squares.remove();
    });
}

function colorSquare(){
    if(mouseClick){
    this.style.backgroundColor=input.value;
    }
}

const squares=document.querySelectorAll("#square");
const input=document.querySelector("#sketch-color");
squares.forEach(squares=>squares.addEventListener('mouseenter',colorSquare));
squares.forEach(squares=>squares.addEventListener('mouseup',colorSquare));
}