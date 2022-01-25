// Buisness Logic for toDoList
function ToDoList() {
	this.task = {};
	this.currentId = 0;
}

ToDoList.prototype.addTask = function (task) {
	task.id = this.assignId();
	this.task[task.id] = task;
};

ToDoList.prototype.assignId = function () {
	this.curentId += 1;
	return this.currentId;
};

ToDoList.prototype.findTask = function (id) {
	if (this.task[id] != undefined) {
		return this.task[id];
	}
	return false;
};

ToDoList.prototype.deleteTask = function (id) {
	if (this.place[id] === undefined) {
		return false;
	}
	delete this.task[id];
	return true;
};

// Buisness Logic for Tasks
function Task(name, type, time) {
	this.name = name;
	this.type = type;
	this.time = time;
}
