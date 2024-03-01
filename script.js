const inputContainer = document.getElementById("input-container");
const inputTextarea = document.getElementById("input-textarea");
const inputButton = document.getElementById("input-button");

const outputContainer = document.getElementById("output-container");
const currentTaskDisplay = document.getElementById("output-current-task");
const completeTaskButton = document.getElementById("complete-task-button");

var currentTasks = [];

function updateOutput() {
    if (currentTasks.length > 0) {
        currentTaskDisplay.textContent = currentTasks[0];
    } else {
        currentTaskDisplay.textContent = "";
    }
}

function completeTask() {
    currentTasks.shift();
    console.log(currentTasks);
    updateOutput();
}

inputButton.onclick = () => {
    currentTasks = inputTextarea.value.split("\n");
    updateOutput();

};

completeTaskButton.onclick = completeTask;

inputButton.onclick();