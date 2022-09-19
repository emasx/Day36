'use strict';


//  70

// //1. document.querySelector('.message') selects the element. 
// //2. On this element we can read the textContent property.  .textContent

// console.log(document.querySelector('.message').textContent);


//  71  What's the DOM and DOM Manipulation

// // DOM = stands for Document Object Model, and it is a STRUCTURED REPRESENTATION OF HTML documents.
// //     = allows us to use JavaScript to ACCESS HTML elements and styles to manipulate them.
// //     = is a connection point between HTML documents and JavaScript code.
// //     = is automatically created by the browser as soon as the HTML page loads and it is stored in a tree structure.
// /* Manipulate = Change text
//                 HTML attributes
//                 CSS styles


// DOCUMENT = is a special OBJECT that we have access to in JavaScript and this OBJECT serves as an entry point into the DOM.
// */



//  72 Selecting and Manipulating Elements

//  Here we manipulate the TEXT CONTENT of one of the DOM nodes.
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // Input field = value.

// // First we write it
// document.querySelector('.guess').value = 23;

// // Second we read it
// console.log(document.querySelector('.guess').value);












// 74  Implementing the Game Logic
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;


// 77 Implementing Highscores
// this way, the SCORE is always gonna be the HIGHSCORE, because it's always going to be greater than zero.
let highscore = 0;
 

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}




// 73 Handling Click Events

// An event = is something that happens on the page. ex: a mouse click or a mouse moving or a key press.

// 1. document.querySelector('.check') will return an ELEMENT.
// 2. On that ELEMENT we can call the addEventListener method.
// 3. Into this addEventListener method, we first need to pass in THE TYPE OF THE EVENT. 'click'.
// 4. Now we need to tell the event listener what to do.We need to specify the reaction to the click event.And we do that by defining a function and that function will contain the code that should be executed whenever this click event happens on this .check button.That function is going to be called THE EVENT HANDLER.
// 5. Whenever we get something from the user interface, for example, fron AN INPUT FIELD it usually always is a STRING.If we want to compare numbers with numbers, we need to first convert this string to a number Number().
// 6. Log to the console tha value that is in this input field.


document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

// When there is no input
    if(!guess) { //IF THERE IS NO GUESS then just print to the message element that there is no number.         ZERO is FALSE so guess here is FALSE now but then we use the NOT (!) OPERATOR to convert it to TRUE and we can then make this block of code execute.Because it only executes whenever this whole condition is true.
        // document.querySelector('.message').textContent = 'No number!';

        displayMessage('No number');


        
        // 74  Implementing the Game Logic
        // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number');


        // 76  Coding Challenge #1
        document.querySelector('.number').textContent = secretNumber;
        



        // 75  Manipulating CSS Styles
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        // 77 Implementing Highscores

        // Ask whether the SCORE is greater than the CURRENT HIGHSCORE (which at this point is 0) then the HIGHSCORE will become this new current SCORE.
        if(score > highscore) {
            highscore = score;
            // Now all we have to do is to display THAT NEW HIGHSCORE
            document.querySelector('.highscore').textContent = highscore;
        }

        // 78 Refactoring Our Code The DRY Principle
        // Refactoring = means to restructure the code without changing how it works
        // When guess is wrong
        // Guess is different from secret number
    } else if (guess !== secretNumber) {
        
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low';
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else { // if it is 0
            // document.querySelector('.message').textContent = 'You lost the game!';

            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = '0';
        }

    //     // When guess is too high
    // } else if (guess > secretNumber) {
    //     // if (score > 1) {
    //     //     document.querySelector('.message').textContent = 'Too high!';
    //     //     score--;
    //     //     document.querySelector('.score').textContent = score;
    //     // } else { // if it is 0
    //     //     document.querySelector('.message').textContent = 'You lost the game!';
    //     //     document.querySelector('.score').textContent = '0';
    //     // }
        

    //     // When guess is too low
    // } else if (guess < secretNumber) {
    //     // document.querySelector('.message').textContent = 'Too low!';
    //     // score--;
    //     // document.querySelector('.score').textContent = score;
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else { // if it is 0
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //         document.querySelector('.score').textContent = '0';
    //     }
     }
});



// 76 Coding Challenge #1
 
// 1. Select the element with the 'again' class and attach a click event handler.
document.querySelector('.again').addEventListener('click', function() {
// 2. In the handler function, restore initial values of the SCORE and SECRETNUMBER variables.
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    
// 3. Restore the initial conditions of the message, number, score and guess input field.
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''; // The value of an input is always a string so the empty string is basically the absence of any value.

// 4. Restore the original background color (#222) and number width (15rem)
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelecotr('body').style.width = '15rem';
})




