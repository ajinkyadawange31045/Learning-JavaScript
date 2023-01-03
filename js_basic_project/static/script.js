// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//challenge1 -> find your age in day
//challenge2 -> Cat generator
//challenge3-> Rock paper Scissors
// alert('hi')
// console.log()
function ageInDays() {
    var birthYear = prompt('What year were you born ... my dear friend');
    var ageInDayss = (2022 - birthYear) * 365
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old')
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();

    //ye bas timepass hai, 
    var h3 = document.createElement('h3')
    var a = document.createTextNode("Input another age, you just reset that")
    h3.setAttribute('id', 'ageInDays')
    h3.appendChild(a)
    document.getElementById('result').appendChild(h3)


    //why document.something (why do we do that?) 
    //get it clear to the deepest.
}


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// Challenge - 2
function generateCar() {
    var image = document.createElement('img')
    var div = document.getElementById('flex-cat-generator');
    image.src = "static/images/image.png"
    div.appendChild(image);
}

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Chanllenge 3
function rpsGame(yourChoice) {
    console.log(yourChoice);
    // console.log(yourChoice.src); //This will give us the address of image
    var humanchoice, botChoice;
    humanchoice = yourChoice.id;

    botChoice = ChooseAmongstTheThree(RandomNoForRps());
    console.log('Computer choice:', botChoice);
    console.log('Your choice:', humanchoice);

    results = decideWinner(humanchoice, botChoice); //It might retur an array like [0,1] or [0.5,0.5]-> for a draw or [0,1] -> meaning human lost and bot won
    console.log(results);

    message = finalMessage(results); //{message:'You won',color:'Green}  kind of things will be returned
    console.log(message)

    rpsFrondEnd(yourChoice.id, botChoice, message);
}

function RandomNoForRps() {
    return Math.floor(Math.random() * 3);
}

function ChooseAmongstTheThree(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice1, computerChoice) {
    var rpsDatabase = {
        'rock': {
            'scissors': 1,
            'rock': 0.5,
            'paper': 0
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissors': 0
        },
        'scissors': {
            'paper': 1,
            'scissors': 0.5,
            'rock': 0
        }
    }
    var yourscore1 = rpsDatabase[yourChoice1][computerChoice]
    var computerscore = rpsDatabase[computerChoice][yourChoice1]
    return [yourscore1, computerscore];
}

function finalMessage([yourscore, computerscore]) {
    if (yourscore === 0) {
        return { 'message': 'you lost!', 'color': 'red' };
    } else if (yourscore === 0.5) {
        return { 'message': 'You Tied!', 'color': 'yellow' };
    } else {
        return { 'message': 'You Won!', 'color': 'green' };
    }
}
//working on front end part 
function rpsFrondEnd(hunamImagechoice, botImagechoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //lets remove all the elements
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    //we are adding image element and will also do some inline styles
    humanDiv.innerHTML = "<img src='" + imagesDatabase[hunamImagechoice] + "' height=250 width=250 opacity = 1 style='box-shadow:0px 10px 50px rgb(141, 193, 52);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
        // basically the above parts is : <h1 style = 'color:green;' font-size :60px padding:30px ;> You Won! </h1>  -> in html
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImagechoice] + "' height=250 width=250 opacity = 1 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"

    //Now we will append elements to that div
    document.getElementById('flex-box-div').appendChild(humanDiv);
    document.getElementById('flex-box-div').appendChild(messageDiv);
    document.getElementById('flex-box-div').appendChild(botDiv);
}



// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// <!-- Challenge - 4 -->
var all_button = document.getElementsByTagName('button');

let copyAllButtons = [];
for (let i = 0; i < all_button.length; i++) {
    copyAllButtons.push(all_button[i].classList[i]);
}

// How to get the value of the button


function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonRed();
    } else if (buttonThingy.value === 'green') {
        buttonGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else {
        randomColors();
    }
}

function buttonRed() {
    for (let i = 0; i < all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1]);
    }
}