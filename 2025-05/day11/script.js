
let tasks = document.getElementById("todo-list"); 

for (const task of tasks.children) {
    let description;
    let title;
    for (const element of task.children){
        if (element.classList.contains("description")){
            description = element;
        }
        if (element.classList.contains("task")){
            title = element;
        }
    }
    title.addEventListener("click", () => {
         if (description.style.display == "block"){
             description.style.display = 'none';
         }
         else{
            description.style.display = 'block';
         }
     });
}