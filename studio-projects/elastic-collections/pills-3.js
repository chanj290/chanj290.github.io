// FOLLOW THE COMMENTS STEP BY STEP
// log in to you your Airtable account
// make sure you have a base set up with at least one table with data inside it
// go to Account settings
// click the generate API key button
// copy and paste it into line 13 below
// then go to this link https://airtable.com/api?utm_source=google&utm_medium=cpc&utm_extra5=kwd-826617918193&utm_extra2=936407691&utm_extra10=110555501161&creative=465926015426&device=c&cx=us&targetid=kwd-826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB
// select your base
// copy and paste the base ID into line 14 below

// the next two lines are calling the Airtable API!!
var Airtable = require("airtable");
console.log(Airtable);
var base = new Airtable({ apiKey: "keyTHYYWalZIz8RMc" }).base(
  "appjlvoeBcEeNKKQs"
);

// create an empty array for all of your items to go into
let allItems = [];

// inside the () after base put the name of YOUR spreadsheet
base('pills').select({}).eachPage(function page(tableItems, fetchNextPage) {
  tableItems.forEach(function(item) {
    // push each item received into the allItems array on line 16
    allItems.push(item);
  });


  // if there is another page of items, get those too
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }

  // all items received, no errors!!
  // console log the allItems array, you should see all of your data in there now.
  console.log(allItems);

  // now, call a new function to do stuff with your data and pass the allItems array into it
  setTable(allItems);
});


function setTable(allItems) {
  // make a container div and append it to the body
  // this way we can append all of our items to a div which we can style later
  let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  // run a forEach loop on your array, with each item
  // then make a new HTML element and position it somewhere on the page 
  allItems.forEach(function(item) {
    // store the name of the item (from your spreadsheet) into a variable
    let name = item.fields.items;
    // store the image for the item into a variable
    let imageUrl = item.fields.images[0].url;

    let itemImage = document.createElement('img');
    itemImage.src = imageUrl;
    itemImage.classList.add(item.fields.shape);
    // since were in the for each loop here, it will call getRandomPlace for each image, over and over
    let randomPointOnPage = getRandomPlace();
    // the function returns an array [randomHorizontal, randomVertical], so lets console log the first and the second item in the array
    console.log(randomPointOnPage[0],randomPointOnPage[1]);
    // the add a position to each image and a left and top value with the randomHorizontal=[0] and the randomVertical= [1]
    itemImage.style.position = "fixed";
    itemImage.style.left = `${randomPointOnPage[0]}px`;
    itemImage.style.top = `${randomPointOnPage[1]}px`;

    itemImage.addEventListener('dragenter', dragItemFunction);

    container.appendChild(itemImage);
  })
}

// FUNCTION: randomize position
function getRandomPlace() {
	var x = window.innerWidth;
	var y = window.innerHeight;
	var randomHorizontal = Math.floor(Math.random()*x);
	var randomVertical = Math.floor(Math.random()*y);
	return [randomHorizontal, randomVertical];
}

// FUNCTION: draggable img

function dragItemFunction() {
  console.log("hello world")
}





// --------- //

// MODULE: about button

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// --------- //




