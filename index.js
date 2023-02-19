let player = {
    Name : "Tarek",
    Balance : 200
}
let CardArr = []
let sum = 0
let hasblackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("Message-el")
let SumEl = document.getElementById("Sum-el")
let CardsEl = document.getElementById("Cards-el")
let playerInfo = document.getElementById("player-Inf")
playerInfo.textContent = player.Name + ": $" + player.Balance
function randomCard(){
    let randomNU =  Math.floor( Math.random()*13 ) + 1
    if(randomNU > 10){
        return 10
    }else if (randomNU === 1){
        return 11
    }else{
        return randomNU
    }
}
function Start(){
    let FirstCard = randomCard()
    let SecondCard = randomCard()
     CardArr = [FirstCard, SecondCard]
    sum = FirstCard + SecondCard 
    isAlive = true
    renderGame()
}
function renderGame(){
    if (sum <= 20){
        message = "Do you want another card!"
    } else if (sum === 21){
        message = "Congratulations you got a black jack!"
        hasblackjack = true
    } else{
        message = "you are out of the game!"
        isAlive = false
    }
    messageEl.textContent =  message
    SumEl.textContent = "Sum : " + sum
    CardsEl.textContent = "Cards: "
    for(let i= 0; i<CardArr.length; i++){
        CardsEl.textContent += CardArr[i] + ", "
    }
}
function NewCard(){
    if(isAlive === true && hasblackjack === false){
    let NewCard = randomCard()
    sum += NewCard
    CardArr.push(NewCard)
    renderGame()
    }
}
