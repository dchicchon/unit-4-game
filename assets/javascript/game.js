

$(document).ready(function() {

    // Variables //

    var total = 0;
    var winningNumber = betweenNum(19,120);
    var num = 0;
    var wins = 0;
    var losses = 0;

    // Initial Jquery //
    $('#total').text(total);
    $('#winning-number').text(winningNumber);
    $('#btn1').val(1)
    $('#btn2').val(betweenNum(1,12))
    $('#btn3').val(betweenNum(1,12))
    $('#btn4').val(betweenNum(1,12))
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
        $('#btn2').val(betweenNum(1,12))
        $('#btn3').val(betweenNum(1,12))
        $('#btn4').val(betweenNum(1,12))
    }

    // Main Code // 
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


