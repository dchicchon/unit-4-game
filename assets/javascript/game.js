

$(document).ready(function() {

    // Variables //

    var total = 0;
    $('#total').text(total);
    var winningNumber = betweenNum(19,120);
    $('#winning-number').text(winningNumber);
    var buttonOne = 1
    var buttonTwo = betweenNum(1,12);
    var buttonThree = betweenNum(1,12);
    var buttonFour = betweenNum(1,12);
    var wins = 0;
    var losses = 0;
    $('#wins').text(wins)
    $('#losses').text(losses)

    // Functions //
    function betweenNum(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min)
    }

    function reset() {
        winningNumber = betweenNum(19,120);
        $('#winning-number').text(winningNumber);
        total = 0;
        $('#total').text(total);
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

    $('#btn2').on('click', function() {
        total += buttonTwo
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

    $('#btn3').on('click', function() {
        total += buttonThree
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

    $('#btn4').on('click', function() {
        total += buttonFour
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


