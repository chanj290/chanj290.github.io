// LINKING AIRTABLE

// make Airtable a variable 
var Airtable = require("airtable");
// print the variable, Airtable
console.log(Airtable);
// make the base variable your API key ID and base ID to connect your Airtable to the Javascript
var base = new Airtable({ apiKey: "keyTHYYWalZIz8RMc" }).base(
  "appsjPqy1nOgwFEuD"
);

// ---------------- //

// make an empty array for all items in my airtable
let allItems = [];

// make an empty array for all the utensils in my airtable
let allUtensils = [];


// connect my airtable spreadsheet that is called 'my-dinner-table' and add the functions.
base('my-dinner-table').select({}).eachPage(function page(tableItems, fetchNextPage) {
  // for each table item, add the function and pass the item through the function
  tableItems.forEach(function(item) {
    // push each item received into the allItems array
    allItems.push(item);
  });

  // this fetches all the items for any potential pages
  fetchNextPage();
// this function says to run and return an error if there is an error with receiving all the items
}, function done(err) {
  if (err) { console.error(err); return; }

  // console log the allItems array to see if all the data shows up on the page
  console.log(allItems);

  // a new function that will pass all of your data through (allItems array)
  setTable(allItems);
});

// -------------- //

// FUNCTION: Displaying all the items onto the website.

// create a div container
let container = document.createElement("div");
// add a class name of container to the div
container.classList.add("container");
  // append the items to the div
  document.body.appendChild(container);

// FUNCTION: Adding classes to all the items.

function setTable(allItems) {
  // use a forEach loop on the array with each item
  allItems.forEach(function(item) {
    // make the name of each item a variable
    let name = item.fields.items;
    // source the image for the items into a variable
    let imageUrl = item.fields.images[0].url;

    // create an image element through Javascript
    let itemImage = document.createElement('img');
    // source the image from the imageUrl
    itemImage.src = imageUrl;
    // add a class name onto each image from the class_name column from the airtable spreadsheet
    itemImage.classList.add(item.fields.class_name);
    // append this to the container
    container.appendChild(itemImage);
    // if the items are under the category of "utensil", then push the items through allUtensils
    if (item.fields.kind_of_item === "utensil") {
      allUtensils.push(item);
    }
  })
}

// ----------- //

// FUNCTION: make the place utensils button work so that they appear

  // create variable placeUtensilBtn and retrieve from the document the place-utensils ID
  let placeUtensilsBtn = document.getElementById("place-utensils");
  // add a click event listener to the placeUtensilsBtn so that it will run the function showAllUtensils
  placeUtensilsBtn.addEventListener('click', showAllUtensils)
  // create the function
  function showAllUtensils() {
    // for each utensil item, pass it into the function
    allUtensils.forEach(function(utensilsItem) {
      // make a utensils variable and create an image element to the html document
      let utensils = document.createElement('img');
      // source the images from the airtable spreadsheet
      utensils.src = utensilsItem.fields.images[0].url;
      // add a class list to the utensils from the class_name column from airtable
      utensils.classList.add(utensilsItem.fields.class_name);
      // style the utensils elements so that display block
      utensils.style.display = "block";
      // append utensils to the container of the website
      container.appendChild(utensils)
    })
    // console log and run allUtensils
    console.log(allUtensils)
    }
 