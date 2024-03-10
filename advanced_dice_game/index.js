const sub = document.getElementById("submit");
sub.onclick=function(){
    const num=document.getElementById("number").value;
    const numOp=document.getElementById("numArr");
    const imgOp=document.getElementById("img");
    let arr=[];
    let image=[];
    for (let index = 0; index < num; index++) {
        let x=Math.floor(Math.random()*6)+1;
        arr[index]=x;
        image.push(`<img src="images/dice-six-faces-${x}.svg">`);
    }
    numOp.textContent=`dice :  ${arr.join(' ,')}`;
    imgOp.innerHTML=image.join('');
}