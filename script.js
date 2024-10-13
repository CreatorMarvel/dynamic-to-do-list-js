const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
	// add new task to the list
	const taskText = taskInput.value.trim();

	if (taskText) {
		const newItem = document.createElement("li");
		newItem.textContent = taskText;

		const btnRemove = document.createElement("button");
		btnRemove.textContent = "Remove";
		btnRemove.classList.add("remove-btn");

		newItem.appendChild(btnRemove);
		taskList.appendChild(newItem);

		taskInput.value = "";
		btnRemove.addEventListener("click", () => {
			newItem.remove();
		});
	} else {
		alert("Enter a valid input!");
	}
}

function removeTask(e) {
	// remove the list item clicked
	if (e.target.classList.contains("remove-btn")) {
		const listItem = e.target.parentElement;
		listItem.remove();
	}
}

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
	// add item using the key enter button
	if (e.key === "Enter") {
		addTask();
	}
});

document.addEventListener("DOMContentLoaded", () => addTask);
