

$(document).ready(function() {

    // Variables //
    // Here we assign variables for the total number of candies, the winning amount of candy,
    // the number of the button clicked, the number of wins and losses.
    var total = 0;
    var winningNumber = betweenNum(19,120);
    var num = 0;
    var wins = 0;
    var losses = 0;

    // Initial Jquery //
    //Here we assign values to the html like the total, winning number, and we assign values to the buttons on the page. I also 
    //Assign text to the wins and losses on the html to the javascript values
    $('#total').text(total);
    $('#winning-number').text(winningNumber);
    $('#btn1').val(1)
    $('#btn2').val(betweenNum(1,12))
    $('#btn3').val(betweenNum(1,12))
    $('#btn4').val(betweenNum(1,12))
    $('#wins').text(wins)
    $('#losses').text(losses)

    // Functions //
    // the created function betweenNum takes two parameters: min and max. 
    // The parameter min takes in the lowest number and max take the highest number.
    // THe purpose is to be able to select a random number between min and max
    function betweenNum(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min)
    }

    // the created function reset changes the values of buttons 2 through 4 
    // to a new random number between 1 and 12 and a new winning number. We reset the total back
    // to zero
    function reset() {
        winningNumber = betweenNum(19,120);
        $('#winning-number').text(winningNumber);
        total = 0;
        $('#total').text(total);
        $('#btn2').val(betweenNum(1,12))
        $('#btn3').val(betweenNum(1,12))
        $('#btn4').val(betweenNum(1,12))
    }

    // Main Code // 

    // added a click function that when a button is clicked, its value is assigned to num. We then add num to the 
    // total and check to see if the total equals the winning number. If so, win condition is met. If the
    // total is greater than the winnning number, the lose condition is met.
    $('.btn').on('click', function() {
        num = parseInt($(this).val())
        total += num
        $('#total').text(total);
        if(total === winningNumber) {
            console.log('You win!')
            wins++
            $('#wins').text(wins)
            reset();
        }

        else if (total > winningNumber) {
            console.log('You lose!')
            losses++
            $('#losses').text(losses)
            reset();
        }
    
    });

})


