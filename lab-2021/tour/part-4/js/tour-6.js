function myFunction() {
    var txt;
    if (confirm("While the now antiquated computer kiosks have always been highly visible, a less well-known amenity is the USB charging sockets at 13 stations, and an additional 16 stations have wireless charging pads as listed on the MTR website website. Even more well hidden are the water dispenser provided at six stations, and while breastfeeding areas can be found at a number of stations.")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
    }