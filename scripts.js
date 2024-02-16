const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText.length) {
        const task = createTask(taskText);
        taskList.appendChild(task);
        taskInput.value = '';
    }
});

function createTask(text) {
    const task = document.createElement('li');
    const label = document.createElement('label');
    label.textContent = text;
    task.appendChild(label);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        task.remove();
    });
    task.appendChild(deleteButton);

    return task;
}