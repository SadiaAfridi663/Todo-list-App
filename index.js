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

})