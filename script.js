function createTask(text, category, priority, dueDate) {
    const taskList = document.getElementById("task-list");

    const taskRow = document.createElement("tr");
    taskRow.classList.add("task-item");

    taskRow.innerHTML = `
        <td class="task-text">${text}</td>
        <td>${category}</td>
        <td>${priority}</td>
        <td>${dueDate}</td>
        <td class="action-btns">
            <button class="check-btn"><i class="fas fa-check"></i></button>
            <button class="cancel-btn"><i class="fas fa-times"></i></button>
        </td> `;

    taskRow.querySelector(".check-btn").addEventListener("click", () => markAsCompleted(taskRow));
    taskRow.querySelector(".cancel-btn").addEventListener("click", () => deleteTask(taskRow));

    taskList.appendChild(taskRow);
}

function markAsCompleted(taskRow) {
    taskRow.classList.toggle("task-completed");
}

function deleteTask(taskRow) {
    taskRow.remove();
}

    document.getElementById("add-task-btn").addEventListener("click", () => {
    const taskInput = document.getElementById("task-input");
    const taskCategory = document.getElementById("task-category");
    const taskPriority = document.getElementById("task-priority");
    const taskDueDate = document.getElementById("task-due-date");

    const text = taskInput.value;
    const category = taskCategory.value;
    const priority = taskPriority.value;
    const dueDate = taskDueDate.value;

    if (text) {
        createTask(text, category, priority, dueDate);

        taskInput.value = '';
        taskCategory.value = 'Work';
        taskPriority.value = 'Low';
        taskDueDate.value = '';
    }
});