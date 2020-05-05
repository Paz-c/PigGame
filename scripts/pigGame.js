var  activePlayer, pendingVal, dice;
activePlayer = 1
pendingVal = 0






//************************  ************************  *******************
//CHANHE FINGER FUNCTION
//************************  ************************  *******************
var finger = function(){
    document.querySelector("#diceimg").innerHTML = "<img style='height:100px; width:100px' src = 'gallery/down.png'>";
}

finger();



//************************  ************************  *******************
//CHANHE PLAYER FUNCTION
//************************  ************************  *******************
var changePlayer = function(){
    pendingVal = 0;
        document.querySelector("#pendingval-1").innerHTML = 0;
        document.querySelector("#pendingval-2").innerHTML = 0;
        activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        document.querySelector(".player-1").classList.toggle("active");
        document.querySelector(".player-2").classList.toggle("active");
}


//************************  ************************  *******************
//DISABLE BUTTONS ON WINNER
//************************  ************************  *******************
var disablebuttons = function(){
    document.querySelector("#rolldice").disabled = true;
    document.querySelector("#collect").disabled = true;
}



//************************  ************************  *******************
//WHEN DICE IS ROLLED       WHEN DICE IS ROLLED       WHEN DICE IS ROLLED
//************************  ************************  *******************

document.querySelector("#rolldice").addEventListener("click", function(){
    dice = Math.floor(Math.random()*6)+1;
    var diceimg = document.querySelector("#diceimg");
    
    //display dice
    if(dice===1){
        diceimg.innerHTML = "<img style='width:100px; height:100px' src = 'gallery/1.png'>";
    }
    else if (dice===2){
        diceimg.innerHTML = "<img style='width:100px; height:100px' src = 'gallery/2.png'>";
    }
    else if (dice===3){
        diceimg.innerHTML = "<img style='width:100px; height:100px' src = 'gallery/3.png'>";
    }
    else if (dice===4){
        diceimg.innerHTML = "<img style='width:100px; height:100px' src = 'gallery/4.png'>";
    }
    else if (dice===5){
        diceimg.innerHTML = "<img style='width:100px; height:100px' src = 'gallery/5.png'>";
    }
    else if (dice===6){
        diceimg.innerHTML = "<img style='width:100px; height:100px' src = 'gallery/6.png'>";
    }
    diceimg.style.display = "block";
    
    //updating pending value
    if (dice !== 1){
        pendingVal += dice;
        document.querySelector("#pendingval-" + activePlayer).innerHTML = pendingVal;
    }
    else{
        changePlayer();
    }
})



//********************  *********************  ******************************** */
//WHEN PENDING VALUE IS COLLECTED...... i.e when the COLLECT button is pressed
//********************  **********************  ******************************* */

document.querySelector("#collect").addEventListener("click", function(){

    //update Mainscore of player
    var mainscore = document.querySelector("#mainscore-" + activePlayer).textContent
    var mainscoreVal = document.querySelector("#mainscore-" + activePlayer).textContent;
    var mainscoreParsed = parseInt(mainscoreVal);
    mainscoreParsed += pendingVal;
    document.querySelector("#mainscore-" + activePlayer).innerHTML = mainscoreParsed;
    finger();
    

    //confirm if current player is the winner
    if (mainscoreParsed >= 10){
        document.querySelector("#winner-" + activePlayer).innerHTML = "WINNER";
        document.querySelector("#winner-" + activePlayer).style.color = "green";
        document.querySelector("#diceimg").innerHTML = "<img style='height:100px; width:100px' src = 'gallery/up.png'>";
        disablebuttons();
    }
    else{
        //switch to other player
        changePlayer();
    }

})



//**************************************************** */
// WHEN NEW GAME IS INITIATED
//**************************************************** */

document.querySelector("#new").addEventListener("click", function(){
    finger();
    activePlayer = 1;
    pendingVal = 0;
    document.querySelector("#pendingval-1").innerHTML = 0;
    document.querySelector("#pendingval-2").innerHTML = 0;
    document.querySelector("#mainscore-1").innerHTML = 0;
    document.querySelector("#mainscore-2").innerHTML = 0;
    document.querySelector("#winner-1").innerHTML = "PLAYER 1";
    document.querySelector("#winner-2").innerHTML = "PLAYER 2";
    document.querySelector("#winner-1").style.color = "lightskyblue";
    document.querySelector("#winner-2").style.color = "lightskyblue";
    document.querySelector("#diceimg").style.display = "none";
    document.querySelector("#rolldice").disabled = false;
    document.querySelector("#collect").disabled = false;
})




//**************************************************** */
// FUNCTION TO CHANGE PLAYER NAME
//**************************************************** */
