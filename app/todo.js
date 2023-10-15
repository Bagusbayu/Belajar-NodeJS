const readline = require('readline-sync');
const fs = require('fs');

const todoList = [];

function viewTodo() {
    console.log('\nDaftar Tugas:');
    todoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

function addTodo() {
    const task = readline.question('\nTambahkan tugas: ');
    todoList.push(task);
    saveTodoList();
    console.log('\nTugas ditambahkan.');
    viewTodo();
}

function deleteTodo() {
    viewTodo();
    const index = readline.question('\nHapus tugas nomor berapa? ') - 1;
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
        saveTodoList();
        console.log('\nTugas dihapus.');
    } else {
        console.log('\nNomor tugas tidak valid.');
    }
}

function updateTodo() {
    viewTodo();
    const index = readline.question('\nUpdate tugas nomor berapa? ') - 1;
    if (index >= 0 && index < todoList.length) {
        const newTask = readline.question('\nTugas baru: ');
        todoList[index] = newTask;
        saveTodoList();
        console.log('\nTugas diperbarui.');
        viewTodo();
    } else {
        console.log('\nNomor tugas tidak valid.');
    }
}


function saveTodoList() {
    fs.writeFileSync('todoData.json', JSON.stringify(todoList));
}

module.exports = { addTodo, viewTodo, deleteTodo, updateTodo };
