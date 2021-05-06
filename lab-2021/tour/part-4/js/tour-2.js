function myFunction() {
    var txt;
    if (confirm("Trains on the first ever MTR route were only four cars long and ran from Shek Kip Mei to Kwun Tong station. Because there was not any precedent for an underground railway in Hong Kong, the first batch of drivers were trained on the London Underground.")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
    }