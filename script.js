const inputContainer = document.getElementById("input-container");
const inputTextarea = document.getElementById("input-textarea");
const submitButton = document.getElementById("input-button");

const outputContainer = document.getElementById("output-container");
const currentTaskDisplay = document.getElementById("output-current-task");
const editButton = document.getElementById("edit-button");
const completeTaskButton = document.getElementById("complete-task-button");

var currentTasks = [];

function updateOutput() {

    if (currentTasks.length > 0) {
        currentTaskDisplay.textContent = currentTasks[0];
    } else {
        currentTaskDisplay.textContent = "All Done";
    }
}

function updateInput() {
    inputTextarea.value = "";

    if (currentTasks.length == 0) {
        return;
    }

    currentTasks.forEach((item) => {
        inputTextarea.value += item + "\n";
    });
}

function completeTask() {
    currentTasks.shift();
    updateOutput();
}

function showEditMode() {
    inputContainer.classList.remove("hidden");
    outputContainer.classList.add("hidden");
}

function showDisplayMode() {
    inputContainer.classList.add("hidden");
    outputContainer.classList.remove("hidden");
}

submitButton.onclick = () => {

    if (inputTextarea.value == "") {
        return;
    }
    
    currentTasks = inputTextarea.value.split("\n");

    if (currentTasks.length == 0) {
        return;
    }
    
    updateOutput();
    showDisplayMode();

};

editButton.onclick = () => {
    updateInput();
    showEditMode();
};

completeTaskButton.onclick = completeTask;
