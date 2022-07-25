const container=document.querySelector('.Container');

let res=16;
let dimension=360/res;
let divs=null;

//function to create the divs of the board and activating the drawing effect
function createBoard(dimension)
{
for(let i=1; i<=(res**2); i++)
{
    const pixels=document.createElement('div');
    pixels.style.cssText= `width:${dimension}px; height:${dimension}px;`
    pixels.classList.add("pixel");

    container.appendChild(pixels);
}
//initialize the drawing effect
divs=document.querySelectorAll('.pixel');
divs.forEach((div) => {
    let r= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor=`rgb(${r},${g},${b})`;
    });
});
}

createBoard(dimension);


// the reset button
const body=document.querySelector('.bod');
const btn=document.createElement('button');
btn.textContent='Reset';
btn.style.cssText="background-color:#1560bd; border-radius:4px; padding:10px 30px; margin-top:10px; border:none; color:white; font-weight:bold;";
body.appendChild(btn);

//rest function
function reset()
{
    divs.forEach((div) =>{
        container.removeChild(div);
    });
    do{
    res=prompt("What's the resolution of the board? [max 100]","16");
    }while(res>100);
    dimension=360/res;
    createBoard(dimension);
}

btn.addEventListener('click',reset)
