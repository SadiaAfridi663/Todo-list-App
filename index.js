const taskInput  = document.getElementById("input")
const Addbtn  = document.getElementById("add-btn")
const taskList  = document.querySelector("ul")
// console.log(taskList)
Addbtn.addEventListener('click', function () {
    if(!taskInput.value.trim()){
        return alert("please add something")
    }
    const li = document.createElement("li")
    taskList.appendChild(li);
    const text = document.createElement("span")
    li.appendChild(text)
    var inputValue = taskInput.value
    text.innerHTML = inputValue
    li.setAttribute('class', "list")

     var firstitem = taskList.firstChild;
     taskList.insertBefore(li, firstitem); 

     // container for  buttons (complete & delete)
    const btnContainer = document.createElement("div")
    li.appendChild(btnContainer)
    btnContainer.setAttribute("class", "btn-container")

     // Complete Button
     const CompleteButton = document.createElement("button");
     btnContainer.appendChild(CompleteButton)
     CompleteButton.innerHTML = '<i class="fas fa-check fa-lg"></i>'
     CompleteButton.setAttribute('class', 'complete-btn')
 
     // remove button
     const removeButton = document.createElement("button");
     removeButton.innerHTML = '<i class="fas fa-trash fa-lg"></i>'
     removeButton.setAttribute('class', 'remove-btn')
     btnContainer.appendChild(removeButton)
     removeButton.addEventListener('click', function() {
         taskList.removeChild(li)
     });
     CompleteButton.addEventListener('click', function(){
         text.classList.toggle("completed")
     })
})