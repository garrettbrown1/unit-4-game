$(document).ready(function () {

    //global variables
    var score = 0;
    var target = 0;
    var wins = 0;
    var losses = 0;
    var crystals = [];
    console.log(target)
    console.log(crystals)

    $('#wins').text(wins);
    $('#losses').text(losses);



    function Newgame() {
        score = 0;
        console.log("Newgame")
        target = Math.floor((Math.random() * 100) + 1)
        console.log(target)
        crystals = [Math.floor((Math.random() * 20) + 1), Math.floor((Math.random() * 20) + 1), Math.floor((Math.random() * 20) + 1), Math.floor((Math.random() * 20) + 1)]
        console.log(crystals)

      
    }
    Newgame()
  

    // Number to Guess ("target")
    var numbertoGuess = target;
    $(".value").text (numbertoGuess);



    $(".crystal").on("click", function (event) {
        score += crystals[parseInt($(this).attr("id"))]
        $ ("#yourscore").text(score);
        console.log(score)

        //check if win (win)

        if (score == target) {
            $ ("#status").text("You won!");
            wins++;
            $("#Wins").text(wins);
            console.log(wins)
            $(".crystal").empty();
            Newgame();
        }
        //if else (losses)

        else if (score > target) {
            $ ("#status").text("You lost! That's okay. Play again!");
            losses++;
            $("#Losses").text(losses);
            console.log(losses)
            $(".crystal").empty();
            Newgame();

        }
        //else

        //score




    })

})