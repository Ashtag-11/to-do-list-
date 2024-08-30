document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskText = input.value.trim();
        if (taskText === '') return;

        // Create a new list item
        const li = document.createElement('li');
        li.className = 'task-item';

        // Create task text element
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;

        // Create remove button
        const button = document.createElement('button');
        button.className = 'remove-task';
        button.textContent = 'Remove';
        button.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        // Append elements to list item
        li.appendChild(span);
        li.appendChild(button);

        // Append list item to task list
        taskList.appendChild(li);

        // Clear the input field
        input.value = '';
    });
});
