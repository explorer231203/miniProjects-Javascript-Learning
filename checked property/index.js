const issub=document.getElementById("subscription");
const isVisa=document.getElementById("visa");
const isrupay=document.getElementById("rupay");
const ismastercard=document.getElementById("mastercard");
const smsg=document.getElementById("submsg");
const paymsgg=document.getElementById("paymsg");
const issubmit=document.getElementById("submit");

issubmit.onclick=function(){
    if(issub.checked){
        smsg.textContent="you have subscribed";
    }
    else{
        smsg.textContent="you have not subscribed";
    }
    if (isVisa.checked) {
        paymsgg.textContent="you have choosen VISA for payment";
    }
    else if (isrupay.checked) {
        paymsgg.textContent="you have choosen RUPAY for payment";
    }
    else if (ismastercard.checked) {
        paymsgg.textContent="you have choosen MASTERCARD for payment";
    }
    else{
        paymsgg.textContent="no payment option selected!!!!"
    }
}