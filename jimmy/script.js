var step = 1;
var hint = 0;

function subm() {
    var input = document.getElementById("in").value;
    if (input == "" || input == "NaN" || input == null) {
            alert("Please enter an answer!");
    } else {
        if (step == 1) {
            if (input.toLowerCase() == "jimmy") {
                step = 2;
                document.getElementById("in").value = "";
                document.getElementById("label").innerHTML = "ZZI KZNYNA I M";
                document.getElementById("hint").innerHTML = "Letters Bars";
                hintfix();
            } else if (input == "" || input == "NaN" || input == null) {
                alert("Please enter an answer!");
            } else {
                alert("That is incorrect. Please try again.");
                document.getElementById("in").value = "";
            }
        } else if (step == 2) {
          if (input.toLowerCase() == "grad") {
                step = 3;
                document.getElementById("in").value = "";
                document.getElementById("label").innerHTML = "31484 993911";
                document.getElementById("hint").innerHTML = "Base 36";
                hintfix();
            } else {
                alert("That is incorrect. Please try again.");
                document.getElementById("in").value = "";
            }  
        } else if (step == 3) {
            if (input.toLowerCase() == "oak lawn") {
                step = 4;
                document.getElementById("in").value = "";
                document.getElementById("label").innerHTML = "7/8/6/7/ /18/2/7/14/14/11";
                document.getElementById("hint").innerHTML = "D3 Code";
                hintfix();
            } else {
                alert("That is incorrect. Please try again.");
                document.getElementById("in").value = "";
            }
        } else if (step == 4) {
            if (input.toLowerCase() == "high school") {
                step = 5;
                document.getElementById("in").value = "";
                document.getElementById("label").innerHTML = "-.-. --- -. --. .-. .- - ..- .-.. .- - .. --- -. ...";
                document.getElementById("hint").innerHTML = "Morse";
                hintfix();
            } else {
                alert("That is incorrect. Please try again.");
                document.getElementById("in").value = "";
            }
        } else if (step == 5) {
            if (input.toLowerCase() == "congratulations") {
                document.getElementById("container").style.display = "none";
                document.getElementById("blockr").style.display = "none";
                document.getElementById("blockl").style.display = "none";
                typeWriter();
            } else {
                alert("That is incorrect. Please try again.");
                document.getElementById("in").value = "";
            }
        }
    }
}

function hintfix() {
    hint = 0;
    document.getElementById("coverl").style.transition = "none";
    document.getElementById("coverr").style.transition = "none";
    document.getElementById("coverl").style.left = "0%";
    document.getElementById("coverr").style.left = "49%";
    setTimeout(function(){document.getElementById("coverl").style.transition = "all 1.5s ease"; document.getElementById("coverr").style.transition = "all 1.5s ease";}, 10);
}

function hintshow() {
    if (hint == 0) {
        document.getElementById("coverl").style.left = "-50%";
        document.getElementById("coverr").style.left = "100%";
        hint = 1;
    } else if (hint == 1) {
        document.getElementById("coverl").style.left = "00%";
        document.getElementById("coverr").style.left = "49%";
        hint = 0;
    }
}

var i = 0;
var txt = "Well...";
var speed = 50;
var x = 0;
var char = 0;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("head").innerHTML += txt.charAt(i);
    i++;
    char++;
    setTimeout(typeWriter, speed);
  } else {
    if (x == 0) {
        i = 0;
        txt = "you solved all my puzzles.";
        x++;
        setTimeout(typeWriter, 1000);
    } else if (x == 1) {
        x++;
        setTimeout(deleteText, 1500);
    } else if (x == 3) {
        x++;
        setTimeout(deleteText, 1500);
    } else if (x == 5) {
        x++;
        setTimeout(deleteText, 1500)
    } else if (x == 7) {
        x++;
        setTimeout(deleteText, 1500);
    } else if (x == 9) {
        x++;
        setTimeout(deleteText, 1500);
    } else if (x == 11) {
        x++;
        setTimeout(deleteText, 1500);
    }
  }
}

function deleteText() {
    var typewrite = document.getElementById("head").textContent;
    if (char >= 0) {
       typewrite = typewrite.slice(0, char);
       char--;
       document.getElementById("head").innerHTML = typewrite;
       setTimeout(deleteText, speed);
    } else {
        if (x == 2) {
            txt = "You must think yourself wise I suppose...";
            i = 0;
            x++;
            setTimeout(typeWriter, 1000);
        } else if (x == 4) {
            i = 0;
            txt = "Well you must be since you graduated high school";
            x++;
            setTimeout(typeWriter, 1000);
        } else if (x == 6) {
            i = 0;
            txt = "Doing better than me in that reguard...";
            x++;
            setTimeout(typeWriter, 1000);
        } else if (x == 8) {
            i = 0;
            txt = "Anyways,";
            x++;
            setTimeout(typeWriter, 1000);
        } else if (x == 10) {
            i = 0;
            txt = "I know about the guy you kissed. I hope he makes you happy. Geniunely.";
            x++;
            setTimeout(typeWriter, 1000);
        }
    }
}

$(document).on('keydown', function(event) {
    // Check if the Enter key was pressed (key code 13)
    if (event.which === 13) {
        subm();
        event.preventDefault();
    }
});