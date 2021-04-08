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
    container.appendChild(itemImage);

  })
}

// function getRandomPosition(element) {
// 	var x = document.body.offsetHeight-element.clientHeight;
// 	var y = document.body.offsetWidth-element.clientWidth;
// 	var randomX = Math.floor(Math.random()*x);
// 	var randomY = Math.floor(Math.random()*y);
// 	return [randomX,randomY];
// }
// window.onload = function() {
// 	var img = document.createElement('img');
// 	img.setAttribute("style", "position:absolute;");
// 	img.setAttribute("src", imageUrl);
// 	document.body.appendChild(img);
// 	var xy = getRandomPosition(img);
// 	img.style.top = xy[0] + 'px';
// 	img.style.left = xy[1] + 'px';
// }


