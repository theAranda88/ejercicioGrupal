var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Lista inicial de tareas
var tasks = [
    { id: 1, name: 'Estudiar TypeScript', completed: false },
    { id: 2, name: 'Practicar ejercicios de programación', completed: false },
    { id: 3, name: 'Revisar apuntes de clase', completed: false }
];
// Cambiar el estado de una tarea
var toggleTaskStatus = function (taskId) {
    tasks = tasks.map(function (task) {
        return task.id === taskId ? __assign(__assign({}, task), { completed: !task.completed }) : task;
    });
    renderTasks();
};
// Obtener el estado textual de la tarea
var getTaskStatus = function (task) {
    return task.completed ? 'Completada' : 'Pendiente';
};
// Agregar una nueva tarea a la lista
var addTask = function () {
    var newTask = {
        id: tasks.length + 1,
        name: "Nueva Tarea ".concat(tasks.length + 1),
        completed: false
    };
    tasks = __spreadArray(__spreadArray([], tasks, true), [newTask], false);
    renderTasks();
};
// Mostrar las tareas en la interfaz HTML
var renderTasks = function () {
    var taskList = document.getElementById("task-list");
    if (taskList) {
        taskList.innerHTML = ""; // Limpiar lista de tareas
        tasks.forEach(function (task) {
            var taskItem = document.createElement("div");
            taskItem.className = "task-item";
            taskItem.innerHTML = "\n                <span class=\"task-name ".concat(task.completed ? "completed" : "", "\">\n                    ").concat(task.name, " - ").concat(getTaskStatus(task), "\n                </span>\n                <button class=\"status-button\" onclick=\"toggleTaskStatus(").concat(task.id, ")\">\n                    Cambiar Estado\n                </button>\n            ");
            taskList.appendChild(taskItem);
        });
    }
};
// Inicializar la vista de tareas
renderTasks();
