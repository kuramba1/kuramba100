function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim(); // variable
  let taskList = document.getElementById("taskList");

  // Condition to check if task is empty
  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;

  // Add a 'Complete' button
  let completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.onclick = function () {
    // Toggle done class using condition
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
    } else {
      li.style.textDecoration = "line-through";
    }
  };

  // Add a 'Delete' button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
