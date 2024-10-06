document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const taskInput = document.getElementById('new-task-description');
      const dueDateInput = document.getElementById('due-date');
      const taskText = taskInput.value.trim();
      const dueDate = dueDateInput.value;

      if (taskText && dueDate) {
          addTaskToList(taskText, dueDate);
          taskInput.value = '';
          dueDateInput.value = '';
      } else {
          alert('Please enter both task description and due date.');
      }
  });

  function addTaskToList(taskText, dueDate) {
      const tasksList = document.getElementById('tasks');
      const taskItem = document.createElement('li');

      // Create task display
      const taskDisplay = document.createElement('span');
      taskDisplay.textContent = `${taskText} (Due: ${dueDate})`;
      taskItem.appendChild(taskDisplay);

      const completedCheckbox = document.createElement('input');
      completedCheckbox.type = 'checkbox';
      completedCheckbox.addEventListener('change', () => {
        if (completedCheckbox.checked) {
          taskItem.classList.add('completed');
        } else {
          taskItem.classList.remove('completed');
        }
      });

      // Create a delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
          tasksList.removeChild(taskItem);
      });

      // Create an edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
          const newTaskText = prompt("Edit task description:", taskText);
          const newDueDate = prompt("Edit due date (YYYY-MM-DD):", dueDate);

          if (newTaskText !== null && newDueDate !== null) {
              taskDisplay.textContent = `${newTaskText.trim()} (Due: ${newDueDate})`;
          }
      });

      taskItem.appendChild(completedCheckbox);
      taskItem.appendChild(taskDisplay);
      taskItem.appendChild(deleteButton);
      taskItem.appendChild(editButton);
      tasksList.appendChild(taskItem);
  }
});
