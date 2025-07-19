function addTask(){
        const input = document.getElementById("taskInput");
        const taskText = input.value.trim();
        if(taskText !==""){
            const ul = document.getElementById("todoList");
            
            const li = document.createElement("li");

            const span = document.createElement("span");
            span.textContent = taskText;

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.onclick = () => editTask(span)

            function editTask(span){
                const newText = prompt("Edit the Task",span.textContent);
                if (newText !== null && newText.trim() !== ""){
                    span.textContent = newText;
                }
                else{
                    span.textContent = taskText;
                }
            }

            const removeButton = document.createElement("button");
            removeButton.textContent = "Delete";
            removeButton.onclick = () => removeTask(li);

            function removeTask(task){
                const ul = document.getElementById("todoList");
                ul.removeChild(task);
            }

            li.appendChild(span);
            li.appendChild(editButton);
            li.appendChild(removeButton);

            ul.appendChild(li);

            input.value = ""; 

        }
        else {
            alert("Please enter a valid task.");
        }
    }