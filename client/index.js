// we need fetch requests
// logic to retrieve from data fields [queries]
const body = document.querySelector("body");

// creating <h1>To-Do App</h1>
const title = document.createElement("h1");
title.innerText = "Welcome to the To-Do App";
body.append(title); // place the h1 element 'title' inside <body>

const heading = document.createElement("h3");
heading.innerText = "Your current items to do are...";
body.append(heading);

// Create functionality to access the server endpoints that READ the DB
const table = document.createElement("table");
const tableBody = document.createElement("tbody");
body.append(table);

const task = document.createElement("th");
task.innerText = "Task";

const completion = document.createElement("th");
completion.innerHTML("Completed?");

const deadline = document.createElement("th");
deadline.innerText("Deadline");

table.append(task, completion, deadline);

function readDB() {
  // access server endpoint that queries the DB

  // for every entry in the db, create a table row
  // https://developer.mozilla.org/en-US/play
  userList.forEach((elem) => {
    const row = document.createElement("tr");
    // we need to find out what the DB object response looks like to fill the row appropriately
    for (let i = 0; i < elem.length; i++) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`Cell ${elem}`);
      // we will need to set an id in order to delete tasks as appropriate
      cell.append("cellText");
      row.append("cell");
    }
    const deleteCell = document.createElement('td');
    const deleteButton = 
    tableBody.appendChild(row);
  });
}

// DELETE from the DB, 
// for example if the user clicks a delete button?
// https://www.youtube.com/watch?v=IWRS_AM2fiE&t=313s

function deleteTask(event){

}

// CREATE TO DB

function addTask(event){

};

// creating <form>
const form = document.createElement("form");
// https://www.geeksforgeeks.org/html-dom-form-action-property/
form.action = "/submit";
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
form.setAttribute("method", "POST");
// creating form input
const input = document.createElement("input");
const submit = document.createElement("input");
// creating attributes to specify on form
input.setAttribute("type", "text");
input.setAttribute("value", "Add new to-do list item");
submit.setAttribute("type", "submit");
form.append(input);
form.append(submit);
form.addEventListener("submit", addTask);
body.append(form); // place the form element inside <body>

// UPDATE DB with if the task has been completed
function updateDeadline(event){
    // figure out what the event shall target
    event.target.id;

}