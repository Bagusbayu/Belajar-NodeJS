const readline = require('readline-sync');
const todo = require('./app/todo');

function main() {
    while (true) {
        console.log('\nAplikasi Todo List');
        console.log('1. Tambah Tugas');
        console.log('2. Lihat Tugas');
        console.log('3. Update Tugas');
        console.log('4. Hapus Tugas');
        console.log('5. Keluar');

        const choice = readline.question('Pilih operasi yang ingin Anda lakukan: ');

        switch (choice) {
            case '1':
                todo.addTodo();
                break;
            case '2':
                todo.viewTodo();
                break;
            case '3':
                todo.updateTodo();
                break;
            case '4':
                todo.deleteTodo();
                break;
            case '5':
                process.exit(0);
            default:
                console.log('\nPilihan tidak valid.');
        }
    }
}

main();
