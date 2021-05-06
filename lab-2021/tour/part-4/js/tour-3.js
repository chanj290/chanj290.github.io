function myFunction() {
    var txt;
    if (confirm("According to MTR chief architect Andrew Mead, different shades of red were used for these key stations to alert passengers that they have arrived at a terminus or interchange station. That way, even passengers who can't read Chinese or English (or passengers who just were not paying attention!) would recognise the importance of these stations.")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
    }