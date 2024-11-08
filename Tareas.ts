type  Tarea = {
    id: number;
    nombre: string;         //defini un tipo de tarea
    completada: boolean;
};

let tareas: Tarea[] = [
    { id: 1, nombre: 'Tarea 1', completada: false },
    { id: 2, nombre: 'Tarea 2', completada: false },
    { id: 3, nombre: 'Tarea 3', completada: false },   // creamos una lista de tareas iniciales 
    { id: 4, nombre: 'Tarea 4', completada: false },
    { id: 5, nombre: 'Tarea 5', completada: false },
];

const cambiarEstadotarea = (tareas: Tarea[], id: number): Tarea[] => {
    return tareas.map(tarea =>                                                //mas recorremos tareas, dentro si true la condicional spread operator
        tarea.id === id? {...tarea, completada:!tarea.completada } : tarea    //para copiar tarea y cambia el valor de completada al valor opuesto
    );                                                                        //muestra el estado usando el operador ternario
}

const obtenerEstadoTartea = (tarea: Tarea): string =>           //funcion flecha
    tarea.completada? 'Completada' : 'Pendiente';               //usamos operador ternario para evaluar si es true o false y decir si es
                                                                //completada o pendiente

const nuevaTarea: Tarea =  { id: 6, nombre: 'Tarea 6', completada: false }; 
const tareasActualizadas = [...tareas, nuevaTarea];



// angi = mostrar resultados
// alvaro = •	Tip: Dentro de .map(), usa una estructura if para verificar si el id coincide y, en caso positivo, cambia el estado de completada.
// •	Mostrar el estado de la tarea usando el operador ternario
// •	Crea una función flecha llamada obtenerEstadoTarea que reciba una tarea como parámetro.
// •	Dentro de esta función, usa un operador ternario para devolver un texto que indique el estado de la tarea: "Completada" si la tarea está completa o "Pendiente" si no lo está.
// Juan = •	Agregar una nueva tarea a la lista utilizando el spread operator
// •	Define una nueva tarea como un objeto que contenga las propiedades id, nombre, y completada (ejemplo: { id: 4, nombre: "Ver videos de tutoriales", completada: false }).
// •	Usa el spread operator (...) para crear una nueva lista de tareas que incluya todas las tareas anteriores más la nueva tarea, sin modificar el array original.
