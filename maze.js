window.onload = function() {
    //Exercise 1
    document.getElementById('boundary1').addEventListener("mouseover", function() {
        document.getElementById('boundary1').classList.add('youlose');
    });

    
    //Exersise 2
    var boundaries = document.querySelectorAll(".boundary");

    for (i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", function() {
            if (st) {
                for (x = 0; x < boundaries.length; x++) {
                    boundaries[x].classList.add('youlose');
                    document.getElementById("status").innerHTML = 'You Loose!';
                }
            }
        });
    }

    //Exercise 3 (and 4)
    var st = false;
    var end = false;

    document.getElementById('start').addEventListener("click", function() {
        for (x = 0; x < boundaries.length; x++) {
            boundaries[x].classList.remove('youlose');
        }
        document.getElementById("status").innerHTML = 'Move your mouse over the "S" to begin.';
        end = false
        st = true;
    });

    document.getElementById('end').addEventListener("mouseover", function() {
        if (st && !document.getElementById('boundary1').classList.contains('youlose')) {
            document.getElementById("status").innerHTML = 'You Win!';
            end = true;
            st = false
        }
    });

    //Exersise 6
    document.getElementById('maze').addEventListener("mouseleave", function() {
        if (st) {
            end = true;
            st = false
            document.getElementById("status").innerHTML = 'You Lose! No Cheating';
            for (x = 0; x < boundaries.length; x++) {
                boundaries[x].classList.add('youlose');
            }
        }
    });
}