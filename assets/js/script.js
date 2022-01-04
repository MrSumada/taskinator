var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {

    event.preventDefault();

    // create list item
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // package data as an Object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    if(!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formEl.reset();

    // send as an argument to createTaskEl
    createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {

    // create div container
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // give div class name
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
 
    // add inner HTML to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    //append Child for li
    listItemEl.appendChild(taskInfoEl);

    //append Child for ul
    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);