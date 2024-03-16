const element= document.getElementById("ayush");
const moveAmount=8;
var x=0;
var y=0;
document.addEventListener("keyup",event =>{
    element.style.backgroundImage = "url('sleep.jpg')"; // URL should be inside quote
    element.style.textAlign="center";
    element.style.backgroundColor = "red";
    element.style.backgroundSize='contain';
    element.style.backgroundPosition='center';
    element.style.backgroundRepeat = "no-repeat";
    element.textContent = "Z Z Z !!!😴 ";
    element.style.fontSize = "2rem";
    element.style.color="black";
})
document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();    // Prevent the default action of following the link
    // Your custom code here
    element.style.backgroundImage = "url('awake.jpg')"; // URL should be inside quote
    element.style.textAlign="center";
    element.style.backgroundColor = "red";
    element.style.backgroundSize='contain';
    element.style.backgroundPosition='center';
    element.style.backgroundRepeat = "no-repeat";
    element.textContent = "sone do yaar!!! ";
    element.style.fontSize = "2rem";
    element.style.color="white";
    switch(event.key){
        case "ArrowUp":
            y-=moveAmount;
            break;
        case "ArrowDown":
            y+=moveAmount;
            break;
        case "ArrowLeft":
            x-=moveAmount;
            break;
        case "ArrowRight":
            x+=moveAmount;
            break;
    }
    element.style.top=`${y}px`;
    element.style.left=`${x}px`;
    }
    // To move the element, you need to apply CSS styles that involve changing its position, such as position: absolute, and then update the top and left properties to move it around.
})