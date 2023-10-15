const readline = require('readline-sync');
const fs = require('fs');

const todoList = [];

function addTodo() {
    const task = readline.question('Tambahkan tugas: ');
    todoList.push(task);
    saveTodoList();
    console.log('Tugas ditambahkan.');
}

function viewTodo() {
    console.log('\nDaftar Tugas:');
    todoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

function deleteTodo() {
    viewTodo();
    const index = readline.question('\nHapus tugas nomor berapa? ') - 1;
    if (index >= 0 && index < todoList.length) {
        todoList.splice(index, 1);
        saveTodoList();
        console.log('Tugas dihapus.');
    } else {
        console.log('Nomor tugas tidak valid.');
    }
}

function saveTodoList() {
    fs.writeFileSync('todoData.json', JSON.stringify(todoList));
}

module.exports = { addTodo, viewTodo, deleteTodo };
