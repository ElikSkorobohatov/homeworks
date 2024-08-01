const TODOlist = {
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
    const numberTask = TODOlist.task.length + 1;
    const newTask = {
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
    const target = `
            <td>${task.data}</td>
            <td class='taskReview' data-index='${task.taskNumber}' style='${task.completed ? "text-decoration: line-through;" : ""}'>${task.taskReview}</td>
            <td><input class='complet' type='checkbox' data-index='${task.taskNumber}' ${task.completed ? "checked" : ""}></td>
            <td><button class='remove' data-index='${task.taskNumber}'>Видалити завдання</button></td>
        `;

    const newRow = $('<tr>').addClass('row-task').html(target);
    if (task.completed) {
        newRow.css('background', '#AEC670');
    }
    $('.taskblock').append(newRow);
}

function restoreTask() {
    $('.taskblock').empty();
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
    const task = TODOlist.task.find(t => t.taskNumber === taskNumber);
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

// Добавления задания
$('.add').on('click', function() {
    const taskInput = $('#task').val();
    const dataInput = $('#data').val();

    $('#task').val('');
    $('#data').val('');

    if (taskInput !== '' && dataInput !== '') {
        addTask(taskInput, dataInput);
    } else {
        alert('Введіть Ваше завдання та дедлайн!');
    }
});

// Обработчик событий удаления иили изменения
$('.taskblock').on('click', function(event) {
    if ($(event.target).hasClass('complet')) {
        const taskNumber = parseInt($(event.target).data('index'), 10);
        changeStatus(taskNumber);
    }

    if ($(event.target).hasClass('remove')) {
        const taskNumber = parseInt($(event.target).data('index'), 10);
        deleteTask(taskNumber);
    }
});

//Открытия модального окна
$('.taskblock').on('dblclick', '.taskReview', function(event) {
    const taskNumber = parseInt($(this).data('index'), 10);
    $('.modal-title').html(`Task №${taskNumber}`);

    let taskText = $(this).text();
    $('.modal-body').html(taskText);

    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
});

restoreTask();

function setLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getLS(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}
