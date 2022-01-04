var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    // create list item
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create div container
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // give div class name
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    // add inner HTML to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
   
    //append Child for li
    listItemEl.appendChild(taskInfoEl);

    //append Child for ul
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);