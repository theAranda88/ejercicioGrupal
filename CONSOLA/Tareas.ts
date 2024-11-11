type  Tarea = {
    id: number;
    nombre: string;         //defini un tipo de tarea
    completada: boolean;
};

let tareas: Tarea[] = [
    { id: 1, nombre: 'Tarea 1', completada: false },
    { id: 2, nombre: 'Tarea 2', completada: false },
    { id: 3, nombre: 'Tarea 3', completada: false },   // cree una lista de tareas iniciales 
    { id: 4, nombre: 'Tarea 4', completada: false },
    { id: 5, nombre: 'Tarea 5', completada: false },
];


// Función para cambiar el estado de completada de una tarea específica
const cambiarEstadoTarea = (tareas: Tarea[], id: number): Tarea[] => {
    return tareas.map(tarea =>                                                //map con el q recorro el array tareas
        tarea.id === id? {...tarea, completada:!tarea.completada } : tarea    //verificamos por el condicional ternario si tarea.id es igual a id
    );                                                                        //si es asi creamos copia del array cambiandole el valor a completada sino devuelve tarea sin modificacion
}

// Función flecha para obtener el estado de la tarea usando operador ternario
const obtenerEstadoTarea = (tarea: Tarea): string =>           //funcion flecha
    tarea.completada? 'Completada' : 'Pendiente';               //usamos operador ternario para evaluar si es true o false y decir si es
                                                                //completada o pendiente

// Ejemplo de uso: cambiar estado de una tarea y mostrar el estado actualizado
tareas = cambiarEstadoTarea(tareas, 3); // Cambia el estado de la tarea con id 3
console.log(tareas.map(t => `${t.nombre}: ${obtenerEstadoTarea(t)}`));


//------------------------------AYUDA-------------------------------------
// Función para agregar una nueva tarea usando el spread operator
const agregarTarea = (tareas: Tarea[], nuevaTarea: Tarea): Tarea[] => {
    return [...tareas, nuevaTarea];
};

// Función para mostrar las tareas con su estado en la consola
const mostrarTareas = (tareas: Tarea[]): void => {
    tareas.map(tarea => {
        console.log(`${tarea.nombre}: ${obtenerEstadoTarea(tarea)}`);
    });
};

// Agregar una nueva tarea y mostrar el resultado
const nuevaTarea: Tarea = { id: 6, nombre: "Ver videos de tutoriales", completada: false };
tareas = agregarTarea(tareas, nuevaTarea);

console.log("Lista de tareas después de agregar una nueva:");
mostrarTareas(tareas);

// Cambiar el estado de una tarea y mostrar el resultado actualizado
tareas = cambiarEstadoTarea(tareas, 3); // Cambia el estado de la tarea con id 3

console.log("Lista de tareas después de cambiar el estado de una tarea:");
mostrarTareas(tareas);




// angi = mostrar resultados
// alvaro = •	Tip: Dentro de .map(), usa una estructura if para verificar si el id coincide y, en caso positivo, cambia el estado de completada.
// •	Mostrar el estado de la tarea usando el operador ternario
// •	Crea una función flecha llamada obtenerEstadoTarea que reciba una tarea como parámetro.
// •	Dentro de esta función, usa un operador ternario para devolver un texto que indique el estado de la tarea: "Completada" si la tarea está completa o "Pendiente" si no lo está.
// Juan = •	Agregar una nueva tarea a la lista utilizando el spread operator
// •	Define una nueva tarea como un objeto que contenga las propiedades id, nombre, y completada (ejemplo: { id: 4, nombre: "Ver videos de tutoriales", completada: false }).
// •	Usa el spread operator (...) para crear una nueva lista de tareas que incluya todas las tareas anteriores más la nueva tarea, sin modificar el array original.
