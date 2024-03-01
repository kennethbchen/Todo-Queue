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

    currentTasks.forEach((item, index) => {
        inputTextarea.value += item;

        if (index < currentTasks.length - 1) {
            // Don't give newline at end of array
            inputTextarea.value += "\n";
        }
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

    // Process input
    
    currentTasks = inputTextarea.value.split("\n");

    // Trim whitespace and remove empty lines
    for (var i = currentTasks.length - 1; i >= 0; i--) {
        currentTasks[i] = currentTasks[i].trim();

        if (typeof currentTasks[i] === "string" && currentTasks[i].length === 0) {
            currentTasks.splice(i, 1);
        }
    }

    if (currentTasks.length === 0) {
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
