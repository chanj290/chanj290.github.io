function myFunction() {
    var txt;
    if (confirm("With the objective: not only bring MTR passengers more time for life, but also more time for art, the Art in MTR Initiative has been an opportunity for artists and students to display their work.")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
    }