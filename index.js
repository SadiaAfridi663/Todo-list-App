const taskInput  = document.getElementById("input")
const Addbtn  = document.getElementById("add-btn")
const taskList  = document.querySelector("ul")
Addbtn.addEventListener('click', function () {
    if(!taskInput.value.trim()){
        return alert("please add a task")
    }
    const li = document.createElement("li")
    taskList.appendChild(li);
    li.setAttribute('class', "list-item")
    var firstitem = taskList.firstChild;
    taskList.insertBefore(li, firstitem); 
    // for button and span
    const taskContent = document.createElement("div")
    li.appendChild(taskContent)
    taskContent.setAttribute("class", "task-content")
       // Complete Button
       const CompleteButton = document.createElement("button");
       taskContent.appendChild(CompleteButton)
       CompleteButton.innerHTML = ''
       CompleteButton.setAttribute('class', 'complete-btn')
    
       // span
    const taskText = document.createElement("span")
    taskContent.appendChild(taskText)
    var inputValue = taskInput.value
    taskText.innerHTML = inputValue   

    // remove button
    const removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fas fa-trash fa-lg"></i>'
    removeButton.setAttribute('class', 'remove-btn')
    li.appendChild(removeButton)
    removeButton.addEventListener('click', function() {
        taskList.removeChild(li)
    });
    CompleteButton.addEventListener('click', function() {
        taskText.classList.toggle("completed");
    
        if (taskText.classList.contains("completed")) {
            
                CompleteButton.style.backgroundColor = "#28a745";
                CompleteButton.innerHTML = '<i class="fas fa-check fa-lg"></i>';  
                CompleteButton.style.borderColor = "transparent";
            }
            else {
                CompleteButton.innerHTML = '';
                CompleteButton.style.backgroundColor = "white";
                CompleteButton.style.borderColor = "black";

            }
    });
        
    taskInput.value = ""

});

