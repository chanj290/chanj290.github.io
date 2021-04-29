function myFunction() {
    var txt;
    if (confirm("How long is the shortest MTR line and which one is it? The Disney Park line is 2 km long. The interior design of the train was to look futuristic so that passengers could experience time travel.")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
    }