console.log("this page is alive");

function putBubblesAllOverPage() {

    // get bubbles from html into javascript file
    let bubbles = document.querySelectorAll(".bubble");
    
    // randomize EACH bubble position
    bubbles.forEach(function(bubble) {

        let randomHorizontal = Math.floor(Math.random() * window.innerWidth);
        let randomVertical = Math.floor(Math.random() * window.innerHeight);
   
        bubble.style.top = randomVertical + "px";
        bubble.style.left = randomHorizontal + "px";
    })

}

//add bubble when pressing b
document.addEventListener('keydown', addBubble);

function addBubble(event) {
    
    if (event.key === "b") {
        let bubbleAdder = document.createElement("div");
        bubbleAdder.classList.add("bubble");
        console.log(bubbleAdder);
        document.body.appendChild(bubbleAdder);
        putBubblesAllOverPage();
    } else {
        // console.log("user pressed something we dont care about")
    }

}

putBubblesAllOverPage();