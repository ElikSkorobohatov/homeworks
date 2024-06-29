let TODOlist = {
    task: getLS('task') || [
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
};

function addTask(taskReview, data) {
    let numberTask = TODOlist.task.length + 1;
    let newTask = {
        taskNumber: numberTask,
        taskReview: taskReview,
        data: data,
        completed: false
    };

    TODOlist.task.push(newTask);
    showTask(newTask);
    setLS('task', TODOlist.task);
}

function showTask(task) {
    let target = '';
    target += `<td>${task.data}</td> <td class='taskReview' data-index='${task.taskNumber}' style='${task.completed ? "text-decoration: line-through;" : ""}'>${task.taskReview}</td>` +
        `<td> <input class='complet' type='checkbox' data-index='${task.taskNumber}' ${task.completed ? "checked" : ""}> </td>` +
        `<td><button class='remove' data-index='${task.taskNumber}'>Видалити задання</button></td>`;

    let table = document.querySelector('.taskblock');
    let newRow = document.createElement('tr');
    if(task.completed){
        newRow.style.background = "#AEC670";
    }
    newRow.className = 'row';
    newRow.innerHTML = target;
    table.appendChild(newRow);
}

function restoreTask() {
    let table = document.querySelector('.taskblock');
    table.innerHTML = '';
    TODOlist.task = getLS('task') || [];
    TODOlist.task.forEach(task => showTask(task));
}

function deleteTask(taskToDelete) {
    TODOlist.task = TODOlist.task.filter(task => task.taskNumber !== taskToDelete);
    reindexTasks();
    setLS('task', TODOlist.task);
    restoreTask();
}

function changeStatus(taskNumber) {
    let task = TODOlist.task.find(t => t.taskNumber === taskNumber);
    if (task) {
        task.completed = !task.completed;

        setLS('task', TODOlist.task);
        restoreTask();
    }
}

function reindexTasks() {
    TODOlist.task.forEach((task, index) => {
        task.taskNumber = index + 1;
    });
}

let addTaskButton = document.querySelector('.add');
let checkPushButton = document.querySelector('.colum');

addTaskButton.addEventListener('click', function () {
    let taskElement = document.querySelector('#task');
    let dataElement = document.querySelector('#data');

    let taskInput = taskElement.value;
    let dataInput = dataElement.value;

    taskElement.value = '';
    dataElement.value = '';

    if (taskInput !== '' && dataInput !== '') {
        addTask(taskInput, dataInput);
    } else {
        alert('Введіть Ваше завдання та дедлайн!');
    }
});

checkPushButton.addEventListener('click', function (event) {
    if (event.target.classList.contains('complet')) {
        let taskNumber = parseInt(event.target.getAttribute('data-index'), 10);
        changeStatus(taskNumber);
    }

    if (event.target.classList.contains('remove')) {
        let taskNumber = parseInt(event.target.getAttribute('data-index'), 10);
        deleteTask(taskNumber);
    }
});

restoreTask();

function setLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getLS(key) {
    return JSON.parse(localStorage.getItem(key));
}
