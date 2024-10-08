const addBtnEl = document.getElementById("add-task-btn");
const taskInputEl = document.getElementById("task-input");
const taskListEl = document.getElementById("task-list");
const todoAppEl = document.getElementById("todo-app");

const addTask = () => {
	// add new task to the list
	const newItem = document.createElement("li");
	const inputValue = taskInputEl.value.trim();

	if (inputValue) {
		newItem.innerHTML = `
			${taskInputEl.value} <button class='remove-btn'>Remove</button>
		`;
		taskListEl.appendChild(newItem);
		taskInputEl.value = "";
	} else {
		alert("Enter a valid input!");
	}
};

const removeTask = (e) => {
	// remove the list item clicked
	if (e.target.classList.contains("remove-btn")) {
		const listItem = e.target.parentElement;
		listItem.remove();
	}
};

todoAppEl.addEventListener("click", removeTask);
addBtnEl.addEventListener("click", addTask);
document.addEventListener("keypress", (e) => {
	// add item using the key enter button
	if (e.key === "Enter") {
		addTask();
	}
});
