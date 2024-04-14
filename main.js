console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/
const element = document.getElementById("node1");
element.textContent = "I used the getElementById"
console.log(element);
// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

const element2 = document.getElementsByClassName("node2");
console.log(element2);
element2[0].textContext = "I used the getElementsByClassName";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3Elements = document.getElementsByTagName("h3");
for (let i = 0; i < h3Elements.length; i++) { 
h3Elements[i].textContent = `I used the getElementByTagName("h3") method to access all of these`;
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const newPara = document.createElement("p");
console.log(newPara);
newPara.textContext = "This node was created using the createElement() method";
const parentDiv = document.getElementById("parent");
parentDiv.appendChild(newPara);
const newAnchor = document.createElement("a");
newAnchor.textContent = ("I am a <a> tag");
newAnchor.href = "https://gooogle.com";
parentDiv.insertBefore(newAnchor, newPara);
// TODO: Append the created node to the parent node using the element.appendChild() method

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

const ex3ParentDiv = document.querySelector("#exercise-container3");
 const ex3Para = document.createElement("p");
 ex3Para.textContent = ("New child node");
 const ex3Child = document.querySelector("#N1");
 ex3ParentDiv.replaceChild(ex3Para, ex3Child);
// TODO:     Remove the "New Child Node"
ex3Para.remove();

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
const parentOfList = document.getElementById("container");
const newUl = document.createElement("ul");


// TODO: Iterate over the array values, and create a list item element for each
for (let i = 0; i < list.length; i++) {
 const tempLi = document.createElement("li");
 tempLi.textContent = list[i];
 newUl.append(tempLi);
}
// TODO: Append the new list items to the unordered list element
parentOfList.append(newUl);
// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
function show() {
    console.log('i was clicked');
const modal = document.createElement('div');
modal.id = "modal";
console.log(modal);
const modalCard = document.createElement('div');
modalCard.classList.add('modal-card');
modalCard.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
console.log(modalCard);
modal.append(modalCard);
console.log(modal);
const body = document.getElementsByTagName("body")[0];
console.log(body);
body.append(modal);

modal.addEventListener("click",  () => {
    document.body.removeChild(modal);
});

}


// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
document.querySelector("#btn").addEventListener("click", show);