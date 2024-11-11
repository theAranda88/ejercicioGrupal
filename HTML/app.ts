// Definición del tipo de tarea
type Task = {
    id: number;
    name: string;
    completed: boolean;
};

// Lista inicial de tareas
let tasks: Task[] = [
    { id: 1, name: 'Estudiar TypeScript', completed: false },
    { id: 2, name: 'Practicar ejercicios de programación', completed: false },
    { id: 3, name: 'Revisar apuntes de clase', completed: false }
];

// Cambiar el estado de una tarea
const toggleTaskStatus = (taskId: number): void => {
    tasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
};

// Obtener el estado textual de la tarea
const getTaskStatus = (task: Task): string =>
    task.completed ? 'Completada' : 'Pendiente';

// Agregar una nueva tarea a la lista
const addTask = (): void => {
    const newTask: Task = {
        id: tasks.length + 1,
        name: `Nueva Tarea ${tasks.length + 1}`,
        completed: false
    };
    tasks = [...tasks, newTask];
    renderTasks();
};

// Mostrar las tareas en la interfaz HTML
const renderTasks = (): void => {
    const taskList = document.getElementById("task-list");
    if (taskList) {
        taskList.innerHTML = ""; // Limpiar lista de tareas
        tasks.forEach(task => {
            const taskItem = document.createElement("div");
            taskItem.className = "task-item";
            taskItem.innerHTML = `
                <span class="task-name ${task.completed ? "completed" : ""}">
                    ${task.name} - ${getTaskStatus(task)}
                </span>
                <button class="status-button" onclick="toggleTaskStatus(${task.id})">
                    Cambiar Estado
                </button>
            `;
            taskList.appendChild(taskItem);
        });
    }
};

// Inicializar la vista de tareas
renderTasks();
