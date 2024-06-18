let TODOlist = {
    task: [
        {
            taskNumber: 1,
            taskReview: 'Зробити каву!',
            data: '9:00 18.06.2024',
            completed: true,
        },
        {
            taskNumber: 2,
            taskReview: 'Випити каву',
            data: '9:10 18.06.2024',
            completed: false,
        },
        {
            taskNumber: 3,
            taskReview: 'Відпочити',
            data: '9:30 18.06.2024',
            completed: false,
        }
    ],

    addTask: function (taskReview, data) {
        let numberTask = this.task.length + 1;
        let newTask = {
            taskNumber: numberTask,
            taskReview: taskReview,
            data: data,
            completed: false
        };
        this.task.push(newTask);
        this.showTask(newTask);
    },

    showTask: function(task) {
        let target = '';
        target += "<td>" + task.data + "</td> <td>" + task.taskReview + "</td>" +
            "<td>" + (task.completed ? 'Зроблено' : 'В процесі') + "</td>" +
            "<td><button class='remove' data-index = '"+ task.taskNumber +"'>Видалити задання</button> ";

        let table = document.querySelector('.taskblock');
        let newRow = document.createElement('tr');
        newRow.className = 'row';
        newRow.innerHTML = target;
        table.appendChild(newRow);
    },

    restoreTask: function () {
        let table = document.querySelector('.taskblock');
        table.innerHTML = ' ';
        this.task.forEach(task => this.showTask(task));
        console.log(table);
    },

    deleteTask: function(taskToDelete) {
        this.task = this.task.filter(task => task.taskNumber !== taskToDelete);
        this.restoreTask();
    }
};


let addTaskButton = document.querySelector('.add');

addTaskButton.addEventListener('click', function () {
    let taskElement = document.querySelector('#task');
    let dataElement = document.querySelector('#data');

    let taskInput = taskElement.value;
    let dataInput = dataElement.value;

    taskElement.value = '';
    dataElement.value = '';

     if (taskInput !== '' && dataInput !== '') {
         TODOlist.addTask(taskInput, dataInput);
     } else{
         alert('Введіть Ваше завдання та дедлайн!')
     }
});

let checkPushButton = document.querySelector('.colum');

checkPushButton.addEventListener('click', function (event) {
    if (event.target.classList.contains("remove")) {
        let taskNumber = parseInt(event.target.getAttribute('data-index'), 10);
        TODOlist.deleteTask(taskNumber);
        console.log(taskNumber);
    }
});

TODOlist.restoreTask();
