const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function loadTasks() {
	const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
	if (Array.isArray(storedTasks)) {
		storedTasks.forEach((taskText) => addTask(taskText, false));
	} else {
		console.error("Stored tasks is not an array. Resetting to empty array.");
		localStorage.setItem("tasks", JSON.stringify([]));
	}
}

function addTask(taskText, save = true) {
	if (!taskText) {
		taskText = taskInput.value.trim();
	}

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
			removeFromLocalStorage(taskText);
			newItem.remove();
		});

		if (save) {
			saveToLocalStorage(taskText);
		}
	} else {
		alert("Enter a valid input!");
	}
}

function saveToLocalStorage(taskText) {
	const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
	if (!Array.isArray(storedTasks)) {
		console.error("Stored tasks is not an array. Resetting to empty array.");
		localStorage.setItem("tasks", JSON.stringify([]));
		return;
	}
	storedTasks.push(taskText);
	localStorage.setItem("tasks", JSON.stringify(storedTasks));
}

function removeFromLocalStorage(taskText) {
	const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
	const updatedTasks = storedTasks.filter((task) => task !== taskText);
	localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

addButton.addEventListener("click", () => addTask());
taskInput.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		addTask();
	}
});

document.addEventListener("DOMContentLoaded", loadTasks);
