//Recogemos los elementos del UI
const form = document.querySelector('#task-form');
const taklist = document.querySelector('.collection');
const clearBtn = document.querySelector('clear-tasks');
const taskInput = document.querySelector('#task')
const filter = document.querySelector('#filter')

//Cargar todos los eventos 
loadEventListeners();

function loadEventListeners() {
    //evento crear tareas
    form.addEventListener("submit" , addTask);
    //eliminar tarea
    taklist.addEventListener("click")

}

function addTask(evento){
    
}



// function miFuncion(opcion, n){
//     const result = 0;
//     if(opcion === 'uno')
// }







