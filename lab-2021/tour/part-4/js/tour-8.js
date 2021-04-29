function myFunction() {
    var txt;
    if (confirm("Various campaigns and activities are taken to help ensure that the MTR is a safe system to travel on. Poster campaigns displaying information on topics such as escalator safety are a common sight in all MTR stations, and announcements are made regularly as safety reminders to travelling passengers.")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
    }