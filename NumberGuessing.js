const Guess = document.getElementById("Guess");
let start = 0;
let end = 100;
let Attempt = 0;
let random = Math.floor(Math.random()*100);
const Guessing = ()=>{
    let input = document.getElementById("input").value;
    Attempt++;
    document.getElementById("message").style.fontWeight = "Bold";
    if(random==input){
        document.getElementById("message").style.color = "Green";
        document.getElementById("message").innerText = `You Won 🌟 Attempts :${Attempt} `;
        Guess.removeEventListener('click',Guessing);
    }else if(random>input){ 
        start = input;
        document.getElementById("message").style.color = "Orange";
        document.getElementById("message").innerText = "Too Low 😒";
        document.getElementById("subtitle").innerText =`Number is between ${start} to ${end}`;
    }
    else{
        end = input;
        document.getElementById("message").style.color = "Red";
        document.getElementById("message").innerText = "Too High 🤯";
        document.getElementById("subtitle").innerText =`Number is between ${start} to ${end}`;
    }
    document.getElementById("attempts").innerText = Attempt;
    if(Attempt==10){
        document.getElementById("message").style.color = "Red";
        document.getElementById("message").innerText = "You Lose 😓";
        Guess.removeEventListener('click',Guessing);
    }
}
Guess.addEventListener('click',Guessing);
const reset = document.getElementById("reset");
reset.addEventListener('click',()=>{
    start = 0;
    end = 100;
    Attempt=0;
    random = Math.floor(Math.random()*100);
    document.getElementById("message").style.color = " #444";
    document.getElementById("message").innerText = "🔍 Waiting for your guess...";
    document.getElementById("attempts").innerText = Attempt;
    document.getElementById("input").value = "";
    document.getElementById("subtitle").innerText =`Number is between ${start} to ${end}`;
    Guess.addEventListener('click',Guessing);
})

