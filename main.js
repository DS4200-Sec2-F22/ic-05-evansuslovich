let counter = 0; 

function add1() {
  counter = counter + 1; 


  // Select an element in the DOM by id
  let buttonDiv = document.getElementById("counter");

  // Update the HTML code inside of an element
  buttonDiv.innerHTML = counter; 
  
}