function myFunction() {
    var txt;
    if (confirm("There are two stations on the MTR lines where their exits all lead to a shopping mall.")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
    }