let add = document.querySelector("input[type='submit']")
let div1 = document.querySelector(".taskes")

 
add.addEventListener('click', function (e) {
    e.preventDefault()
    let list = document.querySelector("input[type='text']")
    let task = document.createElement("p")
    let complete = document.createElement("button")
    let remove = document.createElement("button")
    let box = document.createElement("div")
    if (list.value === "") {
        return
    }
    task.innerHTML = list.value
    complete.innerHTML = "&#10004;"
    remove.innerHTML = "X"
    complete.classList.add("complete")
    remove.classList.add("remove")
    task.classList.add("task")
    box.appendChild(task)
    box.appendChild(complete)
    box.appendChild(remove)
    div1.appendChild(box)
    box.classList.add("taskBox");
    list.value = ""
    complete.addEventListener('click',function(){
        task.style.backgroundColor="green"
    })
    remove.addEventListener('click',function(){
        div1.removeChild(box)
    })
})
