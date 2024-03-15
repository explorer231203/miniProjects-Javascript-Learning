const myText = document.getElementById('button');
const myBox = document.getElementById('container');
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "orange";
    event.target.textContent = "please don't😨";
    event.target.style.fontSize = "2rem";
})
myBox.addEventListener("mouseout", event => {
    document.body.style.backgroundColor = "white";
    event.target.style.backgroundColor = "beige";
    event.target.textContent = "don't click on me😳";
    event.target.style.fontSize = "2rem";
    event.target.style.backgroundImage="none";
    event.target.style.color = "black";
})
myBox.addEventListener("click", event => {
    event.target.style.color = "white"; // 'color' should be lowercase
    event.target.style.backgroundImage = "url('WhatsApp Image 2024-03-16 at 01.11.16_9881f15e.jpg')"; // URL should be inside quote
    event.target.style.textAlign="center";
    event.target.style.backgroundColor = "transparent";
    event.target.style.backgroundSize='contain';
    event.target.style.backgroundPosition='center';
    event.target.style.backgroundRepeat = "no-repeat";
    event.target.textContent = "I Like You";
    event.target.style.fontSize = "2rem";
    document.body.style.backgroundColor = "red";
});
