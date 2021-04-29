function myFunction() {
    var txt;
    if (confirm("The last MTR train of the night reaches the terminus at 1:30am.")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
    }