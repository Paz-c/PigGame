/*var heightMark, heightJohn, massMark, massJohn, markBMI, johnBMI, bigMark;
// QUESTION 1
heightMark = 30;
heightJohn = 40;
massMark = 75;
massJohn = 70;
console.log("QUESTION 1")
console.log("Mark's Height =" + " " + heightMark);
console.log("John's Height =" + " " + heightJohn);
console.log("Mark's Mass =" + " " + massMark);
console.log("John's Height =" + " " + heightJohn);

// BMI = Mass / height * height

// Their both BMI....... QUESTION 2
markBMI = massMark / (heightMark * heightMark);
johnBMI = massJohn / (heightJohn * heightJohn);
console.log("Question 2") 
console.log("Mark's BMI =" + " " + markBMI);
console.log("John's BMI =" + " " + johnBMI);

//Boolean showing if Mark has a higher BMI than John......QUESTION 3
bigMark = markBMI > johnBMI;
console.log("Question 3") 
console.log ("Is Mark's BMI larger than that of John's?...." + " " + bigMark);

//print result of 3 above.....QUESTION 4
if (markBMI > johnBMI){
    alert("Is Mark's BMI than that of John's?...." + " " + bigMark);
};
*/

/*var johnHeight, friendHeight, johnAge, friendAge, johnScore, friendScore, myHeight, myAge, myScore;
johnHeight = prompt("enter John's height...");
friendHeight = prompt("enter friend's height...");
johnAge = prompt("enter John's age...");
friendAge = prompt("enter friend's age");
myHeight = prompt("enter my height...");
myAge = prompt("enter my age");

// score = highest value of height + (5 * age)

johnScore = johnHeight + ( 5 * johnAge);
friendScore = friendHeight + ( 5 * friendAge);
myScore = myHeight + ( 5 * myAge);
console.log( johnScore + "  ....  " + friendScore + " .... " + myScore);

if ( johnScore > friendScore && myScore){
    console.log( " John wins with a score of " + johnScore + ".")
}
else if (johnScore = friendScore && myScore){
    console.log( " We have ourselves a tie with John, his friend and I having the same scores of " + johnScore)
}
else if (friendScore > johnScore && myScore){
    console.log( " John's friend wins with a score of " + friendScore)
}
else if ( myScore > johnScore && friendScore ){
    console.log( " I win with a score of " + myScore)
};
*/



/*function checkAge(birthYear){
    var age = 2020 - birthYear;
    return age;
};

var chrisAge = checkAge(1998);
console.log(chrisAge);
var simdyAge = checkAge(1999);
console.log(simdyAge);
*/

/*var children = ["emma ", "francis ", "chris ", "eme"];
console.log(children);
children.push("ada ", "somto ");
children.unshift("dad ", "mom ");
if ( children.indexOf("emerie") === -1 ){
    console.log("Emerie has not been logged.");
};
*/


/*var teamJohn, teamMark, teamJohnAv, teamMarkAv, teamMary, teamMaryAv;

// Individual team's average scores after 3 games
teamJohnAv = (89 + 120 + 103) / 3;
teamMarkAv = (116 + 94 + 123) / 3;
teamMaryAv = (97 + 134 + 105) / 3;
console.log(teamJohnAv);
console.log(teamMarkAv);
console.log(teamMaryAv);

/*if (teamJohnAv > teamMarkAv) {
    print( "team John wins with an average of" + teamJohnAv);
} else 

switch (true){
    case teamJohnAv > teamMarkAv &&  teamJohnAv > teamMaryAv:
        prompt("John's team wins with an average of " + teamJohnAv);
        break;
        
    case teamMarkAv > teamMaryAv && teamMarkAv > teamJohnAv:
        prompt ( "Mark's team wins with an average of " + teamMarkAv);
        break;

    case teamMaryAv > teamMarkAv && teamMaryAv > teamJohnAv:
        prompt("Mary's team wins with an average of " + teamMaryAv);
        break;

    default: 
        prompt("it's a draw with all teams having an average of " + teamMarkAv);
};*/


/*
var Moore, Eddy, Romeo;
var namelist = {
    Moore : "Complexion = dark, Height = 127cm, Age = 25, Occupation = general merchandise",
    Eddy : "Complexion = dark, Height = 147cm, Age = 29, Occupation = contractor",
    Romeo : "Complexion = fair, Height = 133cm, Age = 29, Occupation = Doctor"
};

var input = prompt("Enter a name to display information");
console.log(input);

if (input in namelist){
    console.log("yes")
}
else console.log("no");
*/

/*var names = ["ada","emerie", "somto", "chizoba", "emma", "chris", "emerie", "chisom", "miracle"];
for (var i = 0; i < names.length; i++){
   
    console.log(names[i])
    if (i === "emerie"){
        break;
    }
};
*/






/*var years = [1990, 1991, 1992, 1993, 1994, 1995];
var ages = [];
for (var i = 0; i < years.length; i++){
    //console.log(years[i])
    ages[i] = 2020 - years[i];
}
var ag = ages
console.log(ag);

//log if each person is of fullage then their age.

var adult = [];
for (var i = 0; i < ag.length; i++){
    if ( ag[i] < 28){ 
        continue;
    }
    adult[i] = ag[i]
}
console.log(adult)
*/


/*function fullAge (years){
    var ages =[];
    var printAge = [];
    for (var i = 0; i < 1; i++){
        ages[i] = 2020 - prompt(years[i]);
    };
    //var ag = ages;

    
    for (var i = 0; i < ages.length; i++){
        if (ages[i] < 25){
            console.log( " person " + (i+1) + " is " + ages[i] + " years old and is not qualified to participate." );
            printAge = true
        }
        else {
            console.log( " person " + (i+1) + " is " + ages[i] + " years old and is qualified to participate.");
            printAge = false
;        }
    }
    return ages;
}

var array1 = fullAge([]);
*/





//tips 20% if bill is less than $50, 15% when bill is between 50 - 200,
// 10% if bill above 200
// one array for tips and one for the toatal


/*function tipCalc(amount){
    var tips, total;
    var bill = parseInt(amount, 10)
    console.log("bill = " + bill);
    if (bill < 50){
        tips = bill * 0.2;
    }
    else if (bill >= 50 && bill <= 200){
        tips = bill * 0.15;
    }
    else {
        tips = bill * 0.1;
    }
    total = bill + tips;
    console.log("tips = " + tips);
    console.log("total = " + total);
    alert( "You shoud pay the waiter a total of " + total + ".")
}

var execute = tipCalc(prompt( "Enter Bill"));
*/


// BMI = mass / height * height
/*var mark = {
    fullName : "Mark Nwankwo",
    mass : 32,
    height : 139,
    calcBMI : function (){
        this.bmi = this.mass /  (this.height * this.height)
        return this.bmi;
    }

};
var john = {
    fullName : "John Okafor",
    mass : 32,
    height : 139,
    calcBMI : function (){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}


if (mark.bmi > john.bmi){
    console.log(mark.fullName + " wins with a BMI of " + mark.bmi 
    + " whereas " + john.fullName + " has a BMI of "+ john.bmi)
}
else if (mark.bmi === john.bmi){
    console.log( "We have ourselves a tie with both participants having a BMI of " + mark.calcBMI())
}
else {
    console.log (john.fullName + " wins with a BMI of " + john.bmi
    + " whereas " + mark.fullName + " has a BMI of "+ mark.bmi)
};
*/








// bills = 124,48, 268, 
// John tips 20% when bill < 50, 15% when bill between 50 and 200
// and 10% if bill above 200

var John = {
    values : [ 124, 48, 268],
    tips : [],
    totalBill : [],
    calcTip : function(){
        var tipAmount;
        var i= 0;
        while( i < this.values.length){
            var bill = this.values[i];
    
            if (bill < 50){
                tipAmount = 0.2 * bill
            }
            else if (bill >= 50 && bill <= 200){
                tipAmount = 0.15 * bill
            }
            else {
                tipAmount = 0.1 *bill
            }
            this.tips.push(tipAmount);
            this.totalBill.push(tipAmount + bill);
            i++
        }

    } 
}
John.calcTip();
console.log(John);





// bills = 400, 30, 70
// Mark tips 20% when bill < 50, 15% when bill between 50 and 200
// and 10% if bill above 200

var Mark = {
    bills : [400, 30, 70],
    tips : [],
    totalBill : [],
    calcTip : function(){
        for ( var i = 0; i < this.bills.length; i++){
            var bill = this.bills[i];
            var tips
            if (bill < 50 ){
                tips = 0.2 * bill
            }
            else if ( bill >= 50 && bill <= 200){
                tips = 0.15 * bill
            }
            else {
                tips = 0.1 * bill
            }
            this.tips.push(tips);
            this.totalBill.push(tips + bill);
        };
    }
};

Mark.calcTip();
console.log(Mark);


function averageCalc (values){
    var sum = 0;
    for (var i = 0; i < values.length; i++){
        sum = values[i] + sum
    }
    var mainAvg = sum / values.length
    return mainAvg;
}

var show = console.log(averageCalc(John.tips))
var show1 = console.log(averageCalc(Mark.tips))