const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

const defaultTasks = ["Study devops", "Update resume"];

function getTasks() {
  try {
    return JSON.parse(localStorage.getItem("tasks")) || defaultTasks;
  } catch {
    return defaultTasks;
  }
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  const tasks = getTasks();
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.type = "button";
    deleteButton.addEventListener("click", () => {
      const updated = getTasks().filter((_, i) => i !== index);
      saveTasks(updated);
      render();
    });

    li.append(span, deleteButton);
    list.appendChild(li);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = input.value.trim();
  if (!task) return;

  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);

  input.value = "";
  input.focus();
  render();
});

render();
