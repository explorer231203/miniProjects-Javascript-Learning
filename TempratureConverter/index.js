const labelInput=document.getElementById("inp");
const lablelOutput=document.getElementById("fop");
const inputc2f=document.getElementById("c2f");
const inputf2c=document.getElementById("f2c");
const sub=document.getElementById("sub");
let flg=0;
var f;

inputc2f.onclick=function(){
    labelInput.textContent="c";
    lablelOutput.textContent="f";
    flg=1;
}
inputf2c.onclick=function(){
    labelInput.textContent="f";
    lablelOutput.textContent="c";
    flg=2;
}
sub.onclick=function(){
    let input=document.getElementById("userInput").value;
    const answer=document.getElementById("finaloutput");
    if (flg==1 || flg==2) {
        if (!isNaN(input)) {
            if (flg==1) {
                 f=(input*1.8)+32;
            }
            else if (flg==2) {
                f=(input-32)*(5/9);
            }
            f=f.toFixed(2);
            answer.textContent=f;
        }
        else{
            window.alert("invalid input  !!!!");
        }
    }
    else{
        window.alert("select type of conversion !!!!");
    }
}