const taskInput = document.getElementById("input");
const Addbtn = document.getElementById("add-btn");
const taskList = document.querySelector("ul");

Addbtn.addEventListener("click", function () {
    if (!taskInput.value.trim()) {
        return alert("please add a task");
    }

    const li = document.createElement("li");
    li.setAttribute("class", "list-item");
    taskList.appendChild(li);

    const taskContent = document.createElement("div");
    taskContent.setAttribute("class", "task-content");
    li.appendChild(taskContent);

    // Complete Button
    const CompleteButton = document.createElement("button");
    CompleteButton.setAttribute("class", "complete-btn");
    CompleteButton.innerHTML = "";
    taskContent.appendChild(CompleteButton);

    // Task Text
    const taskText = document.createElement("span");
    const inputValue = taskInput.value;
    taskText.innerHTML = inputValue;
    taskContent.appendChild(taskText);

    let ERparent = document.createElement("span");
    ERparent.setAttribute("class", "ERparent");
    li.appendChild(ERparent)

    // Edit Button
    const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fas fa-edit fa-lg"></i>';
    editButton.setAttribute("class", "edit-btn");
    ERparent.appendChild(editButton);

    // Remove Button
    const removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fas fa-trash fa-lg"></i>';
    removeButton.setAttribute("class", "remove-btn");
    ERparent.appendChild(removeButton);

    // Remove Task
    removeButton.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // Complete Task
    CompleteButton.addEventListener("click", function () {
        taskText.classList.toggle("completed");

        if (taskText.classList.contains("completed")) {
            CompleteButton.style.backgroundColor = "#28a745";
            CompleteButton.innerHTML = '<i class="fas fa-check fa-lg"></i>';
            CompleteButton.style.borderColor = "transparent";
        } else {
            CompleteButton.innerHTML = "";
            CompleteButton.style.backgroundColor = "white";
            CompleteButton.style.borderColor = "black";
        }
    });

    // Edit Task
    editButton.addEventListener("click", function () {
        const inputEdit = document.createElement("input");
        inputEdit.type = "text";
        inputEdit.value = taskText.innerText;
        inputEdit.classList.add("edit-input");
        taskContent.replaceChild(inputEdit, taskText);
        inputEdit.focus();

        const saveEdit = () => {
            if (inputEdit.value.trim()) {
                taskText.innerText = inputEdit.value;
                taskContent.replaceChild(taskText, inputEdit);
            } else {
                alert("Task cannot be empty!");
                inputEdit.focus();
            }
        };

        inputEdit.addEventListener("blur", saveEdit);
        inputEdit.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                saveEdit();
            }
        });
    });

    taskInput.value = "";
});
