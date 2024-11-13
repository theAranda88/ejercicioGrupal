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
var tareas = [
    { id: 1, nombre: 'Tarea 1', completada: false },
    { id: 2, nombre: 'Tarea 2', completada: false },
    { id: 3, nombre: 'Tarea 3', completada: false }, // cree una lista de tareas iniciales 
    { id: 4, nombre: 'Tarea 4', completada: false },
    { id: 5, nombre: 'Tarea 5', completada: false },
];
// Función para cambiar el estado de completada de una tarea específica
var cambiarEstadoTarea = function (tareas, id) {
    return tareas.map(function (tarea) {
        return tarea.id === id ? __assign(__assign({}, tarea), { completada: !tarea.completada }) : tarea;
    } //verificamos por el condicional ternario si tarea.id es igual a id
    ); //si es asi creamos copia del array cambiandole el valor a completada sino devuelve tarea sin modificacion
};
// Función flecha para obtener el estado de la tarea usando operador ternario
var obtenerEstadoTarea = function (tarea) {
    return tarea.completada ? 'Completada' : 'Pendiente';
}; //usamos operador ternario para evaluar si es true o false y decir si es
//completada o pendiente
// Ejemplo de uso: cambiar estado de una tarea y mostrar el estado actualizado
tareas = cambiarEstadoTarea(tareas, 3); // Cambia el estado de la tarea con id 3
console.log(tareas.map(function (t) { return "".concat(t.nombre, ": ").concat(obtenerEstadoTarea(t)); }));
//------------------------------AYUDA-------------------------------------
// Función para agregar una nueva tarea usando el spread operator
var agregarTarea = function (tareas, nuevaTarea) {
    return __spreadArray(__spreadArray([], tareas, true), [nuevaTarea], false);
};
// Función para mostrar las tareas con su estado en la consola
var mostrarTareas = function (tareas) {
    tareas.map(function (tarea) {
        console.log("".concat(tarea.nombre, ": ").concat(obtenerEstadoTarea(tarea)));
    });
};
// Agregar una nueva tarea y mostrar el resultado
var nuevaTarea = { id: 6, nombre: "Ver videos de tutoriales", completada: false };
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
