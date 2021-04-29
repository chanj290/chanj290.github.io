function myFunction() {
    var txt;
    if (confirm("The wall interiors of each station is a different color!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
    }