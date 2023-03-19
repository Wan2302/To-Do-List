const list = document.body.querySelector('ul');
const form = document.getElementById('form');


// create a new task when input submitted with a non-empty string
function newTask(event) {
    event.preventDefault();
    if (document.getElementById('task').value != "") {
        const newLi = document.createElement("li");
        const task = document.createElement('div');
        const btnContainer = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const check = document.createElement('img');

        newLi.innerHTML = "-";
        task.innerHTML = document.getElementById('task').value;
        task.classList.add("task");
        task.setAttribute('contenteditable', 'false');
        deleteBtn.innerText = "delete";
        editBtn.innerText = "edit";
        btnContainer.classList.add('btnContainer');
        check.classList.add('check');
        check.src = "./img/icon-check.svg";

        list.appendChild(newLi);
        newLi.appendChild(task);
        newLi.appendChild(btnContainer);
        btnContainer.appendChild(check);
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(deleteBtn);
        document.getElementById('task').value = "";

        // add event listener to delete button
        deleteBtn.addEventListener('click', function() {
            this.parentNode.parentNode.remove();        
        });

        // indicates if the task has been completed or not
        check.addEventListener('click', function() {
            if (task.style.textDecoration === "line-through") {
                task.style.textDecoration = "none";
                task.style.color = "initial";
                newLi.style.color = "initial";
            } else {
                task.style.textDecoration = "line-through";
                task.style.color = "#c6c6c6";
                newLi.style.color = "#c6c6c6";
            }
        })

        // WIP: the content of the task is editable
        editBtn.addEventListener('click', function() {
            task.innerHTML = prompt("New task");
        })

    }
}

// call the function newTask when form is submitted
form.addEventListener('submit', newTask);


