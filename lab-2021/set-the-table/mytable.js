// FOLLOW THE COMMENTS STEP BY STEP
// log in to you your Airtable account
// make sure you have a base set up with at least one table with data inside it
// go to Account settings
// click the generate API key button
// copy and paste it into line 13 below
// then go to this link https://airtable.com/api?utm_source=google&utm_medium=cpc&utm_extra5=kwd-826617918193&utm_extra2=936407691&utm_extra10=110555501161&creative=465926015426&device=c&cx=us&targetid=kwd-826617918193&campaignid=936407691&adgroupid=110555501161&utm_campaign=brand_creator&utm_content=bofu_freetrial&gclid=Cj0KCQjwmIuDBhDXARIsAFITC_5ScBkfOcfy68SuLtNsXhLoTp8JoYwFlBuOK6yDpmKnA_eCAXZ3kKsaAptkEALw_wcB
// select your base
// copy and paste the base ID into line 14 below

// LINKING AIRTABLE
var Airtable = require("airtable");
console.log(Airtable);
var base = new Airtable({ apiKey: "keyTHYYWalZIz8RMc" }).base(
  "appsjPqy1nOgwFEuD"
);

// ---------------- //


// empty array for all items in my airtable
let allItems = [];

// empty array for all utensils in my airtable
let allUtensils = [];


// inside the () after base put the name of YOUR spreadsheet
base('my-dinner-table').select({}).eachPage(function page(tableItems, fetchNextPage) {
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

// -------------- //

// FUNCTION: Displaying all the items onto the website.

function setTable(allItems) {
  // 1) create a div
  // 2) add a class name of container to the div
  // 3) append the items to the div
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


    // let itemImage = document.createElement('img');
    // itemImage.src = imageUrl;
    // itemImage.classList.add(item.fields.kind_of_item);
    // container.appendChild(itemImage);

    let itemImage = document.createElement('img');
    itemImage.src = imageUrl;
    itemImage.classList.add(item.fields.class_name);
    container.appendChild(itemImage);

    if (item.fields.type === "utensils") {
      allUtensils.push(item);
    }
  })
}

  let placeUtensilsBtn = document.getElementById("place-utensils");
  placeUtensilsBtn.addEventListener('click', showAllUtensils)

  function showAllUtensils() {
    allUtensils.forEach(function(utensilsItem) {
      let utensils = document.createElement('img');
      utensils.src = utensilsItem.fields.images[0].url;
      utensils.classList.add(utensilsItem.fields.class_name);
      utensils.style.display = "block";
      container.appendChild(utensils)
    })
    }