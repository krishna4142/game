let body=document.querySelector(".body");
body.style.width=`${window.innerWidth}px`
body.style.height=`${window.innerHeight}px`


let parent_top=document.querySelector(".parent").getBoundingClientRect().top;
// parent_top=Math.floor(parent_top);
let parent_bottom=document.querySelector(".parent").getBoundingClientRect().bottom;
parent_bottom=Math.floor(parent_bottom)
let parent_right=document.querySelector(".parent").getBoundingClientRect().right;
parent_right=Math.floor(parent_right)
let parent_left=document.querySelector(".parent").getBoundingClientRect().left;
parent_left=Math.floor(parent_left)

let snake=document.querySelector(".snake");


 let up=parent_top;
let down=parent_bottom;
let right=parent_right;
let left=parent_left;
let direction;

 console.log(up)
console.log(down)
console.log(right)
console.log(left)


let time=setInterval(()=>{
     if(direction=="up"){
        up--;
        if(up<parent_top){
            up=parent_bottom
        }
    }
    if(direction=="down"){
        up++;
        if(up>parent_bottom){
            up=parent_top
        }
    }
    if(direction=="right"){
        left++;
        if(left>parent_right){
            left=parent_left;
        }
    }
    if(direction=="left"){
        left--;
        if(left<=parent_left){
            left=parent_right;
        }
    }
    snake.style.top=`${up}px`
    snake.style.left=`${left}px`
    // snake.style.bottom=`${down}px`
    snake.style.right=`${right}px`


},10)
function UP(){
    direction="up"
}
function DOWN(){
    direction="down"
}
function RIGHT(){
    direction="right"
}
function LEFT(){
    direction="left"
    
}

let food=document.querySelector(".food");
function foodcreate(){
let rval=Math.floor(Math.random()*200);
food.style.top=`${rval}px`
food.style.left=`${rval}px`
console.log(rval)
}
foodcreate();
let game=setInterval(()=>{

    food_top=food.getBoundingClientRect().top;
            food_top=Math.floor(food_top);
    food_bottom=food.getBoundingClientRect().bottom;
            food_bottom=Math.floor(food_bottom);
    food_left=food.getBoundingClientRect().left;
            food_left=Math.floor(food_left);
    food_right=food.getBoundingClientRect().right;
            food_right=Math.floor(food_right);

    snake_top=snake.getBoundingClientRect().top;
            snake_top=Math.floor(snake_top)
    snake_bottom=snake.getBoundingClientRect().bottom;
            snake_bottom=Math.floor(snake_bottom)
    snake_left=snake.getBoundingClientRect().left;
            snake_left=Math.floor(snake_left)
    snake_right=snake.getBoundingClientRect().right;
            snake_right=Math.floor(snake_right)

    if(((snake_top>=food_top&&snake_top<=food_bottom) && ( snake_left>=food_left&&snake_left<=food_right) ) || ((snake_bottom>=food_top&&snake_bottom<=food_bottom) && (snake_right>=food_left&&snake_right<=food_right) ) || ((snake_left>=food_left&&snake_left<=food_right)&&(snake_top>=food_top&&snake_top<=food_bottom))){
        foodcreate();
        snake.innerHTML+=`<p class="child">k</p>`
         
    }
     
})



 