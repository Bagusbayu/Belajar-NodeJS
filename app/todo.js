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
    console.log('Daftar Tugas:');
    todoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

function saveTodoList() {
    fs.writeFileSync('todoData.json', JSON.stringify(todoList));
}

module.exports = { addTodo, viewTodo };
