var ask = prompt("Ask me anything");
var answer = "something broke";
var ranNum = Math.floor(Math.random() * 10) +1;

console.log(ranNum);

output = document.getElementById("output");
switch(ranNum) {
    case 1 : 
        answer = "Maybe";
    break;
    case 2 : 
        answer = "Yes";
    break;
    case 3 : 
        answer = "No";
    break;
    case 4 : 
        answer = "Try again";
    break;
    case 5 : 
        answer = "It's certain";
    break;
    case 6 : 
        answer = "Never";
    break;
    case 7 : 
        answer = "Outlook doesn't look good";
    break;
    case 8 : 
        answer = "Ask again";
    break;
    case 9 : 
        answer = "Decidedly so";
    break;
    case 10 : 
        answer = "Possibly"
    break;
    default : 
        answer = "something is wrong";

}

output.innerHTML = "You asked me: " + ask + "<br/>The prediction is: " + answer;