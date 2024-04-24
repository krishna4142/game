let body=document.querySelector(".body")

let turn=document.querySelector(".ele")
 turn.innerText="O"
 
body.style.width=`${window.innerWidth}px`;
body.style.height=`${window.innerHeight}px`;

let child=document.querySelectorAll(".child");
let a=true;


//aler box
let Abox=document.querySelector(".alert");

Abox.style.width=`${window.innerWidth/2}px`;
Abox.style.height=`${window.innerHeight/3}px`;
let newchild=document.createElement("button")
let newchild1=document.createElement("button")
let newchild3=document.createElement("button")

Abox.style.background="linear-gradient(blue,green,skyblue,orange,pink)"
// Abox.append(newchild)
Abox.append(newchild1)
Abox.append(newchild3)
// newchild.innerText="cancle"
// newchild1.innerText="continue"

newchild3.style.position="absolute"
newchild3.style.top=40+"%"
newchild3.style.left=38+"%"
newchild3.style.fontSize=400+"%"

newchild1.style.position="absolute"
newchild1.style.top=50+"%"
newchild1.style.left=38+"%"
newchild1.style.height=3+"%"

child.forEach((ele) =>{
    ele.addEventListener("click",()=>{
    let c1=document.querySelector(".c1");
    let c2=document.querySelector(".c2");
    let c3=document.querySelector(".c3");
    let c4=document.querySelector(".c4");
    let c5=document.querySelector(".c5");
    let c6=document.querySelector(".c6");
    let c7=document.querySelector(".c7");
    let c8=document.querySelector(".c8");
    let c9=document.querySelector(".c9");
        if(a){
            ele.innerText="O"
            ele.style.color="red"
            turn.innerText="X"
            a=false;
            // b=true
        }
        else{
            ele.innerText="X"
            ele.style.color="white"
            turn.innerText="O"
            a=true;
        }
        c1=c1.textContent;
        c2=c2.textContent;
        c3=c3.textContent;
        c4=c4.textContent;
        c5=c5.textContent;
        c6=c6.textContent;
        c7=c7.textContent;
        c8=c8.textContent;
        c9=c9.textContent;
        if(c1=="O" && c2=="O" && c3=="O" || c4=="O" && c5=="O" && c6=="O" || c6=="O" && c7=="O" && c8=="O" || c1=="O" && c4=="O" && c7=="O" || c2=="O" && c5=="O" && c8=="O" || c3=="O" && c6=="O" && c9=="O" || c1=="O" && c5=="O" && c9=="O" || c3=="O" && c5=="O" && c7=="O" ){
            // alert("over")
            newchild3.innerText="O"
            newchild1.innerText="WON THE GAME"
            body.classList.add("one")
        }

        if(c1=="X" && c2=="X" && c3=="X" || c4=="X" && c5=="X" && c6=="X" || c6=="X" && c7=="X" && c8=="X" || c1=="X" && c4=="X" && c7=="X" || c2=="X" && c5=="X" && c8=="X" || c3=="X" && c6=="X" && c9=="X" || c1=="X" && c5=="X" && c9=="X" || c3=="X" && c5=="X" && c7=="X" ){
            // alert("over")
            newchild3.innerText="X"
            newchild1.innerText="WON THE GAME"
            body.classList.add("two")
        }
        console.log(c1)
    })

});
 
 







