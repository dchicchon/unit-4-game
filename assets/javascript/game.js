

$(document).ready(function() {

    // Variables //
    var total = 0;
    $('#total').text(total);
    var winningNumber = betweenNum(19,120);
    $('#winning-number').text(winningNumber);
    var buttonOne = betweenNum(1,12);
    var buttonTwo = betweenNum(1,12);
    var buttonThree = betweenNum(1,12);
    var buttonFour = betweenNum(1,12);

    // Functions //
    function betweenNum(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min)
    }

    function reset() {
        winningNumber = betweenNum(19,120);
        $('#winning-number').text(winningNumber);
        total = 0;
        $('#total').text(total);
        buttonOne = betweenNum(1,12);
        buttonTwo = betweenNum(1,12);
        buttonThree = betweenNum(1,12);
        buttonFour = betweenNum(1,12);
    }

    // Main Code // 
    $('#btn1').on('click', function() {
        total += buttonOne
        $('#total').text(total);
        if(total === winningNumber) {
            console.log('You win!')
            reset();
        }

        else if (total > winningNumber) {
            console.log('You lose!')
            reset();
        }
    
    });

    $('#btn2').on('click', function() {
        total += buttonTwo
        $('#total').text(total);
        if(total === winningNumber) {
            console.log('You win!')
            reset();
        }

        else if (total > winningNumber) {
            console.log('You lose!')
            reset();
        }
    
    });

    $('#btn3').on('click', function() {
        total += buttonThree
        $('#total').text(total);
        if(total === winningNumber) {
            console.log('You win!')
            reset();
        }

        else if (total > winningNumber) {
            console.log('You lose!')
            reset();
        }
    
    });

    $('#btn4').on('click', function() {
        total += buttonFour
        $('#total').text(total);
        if(total === winningNumber) {
            console.log('You win!')
            reset();
        }

        else if (total > winningNumber) {
            console.log('You lose!')
            reset();
        }
    
    });

})


