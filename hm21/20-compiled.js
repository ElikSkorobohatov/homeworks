"use strict";

var TODOlist = {
  task: getLS('task') || [{
    taskNumber: 1,
    taskReview: 'Зробити каву!',
    data: '9:00 18.06.2024',
    completed: true
  }, {
    taskNumber: 2,
    taskReview: 'Випити каву',
    data: '9:10 18.06.2024',
    completed: false
  }, {
    taskNumber: 3,
    taskReview: 'Відпочити',
    data: '9:30 18.06.2024',
    completed: false
  }]
};
function addTask(taskReview, data) {
  var numberTask = TODOlist.task.length + 1;
  var newTask = {
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
  var target = "\n            <td>".concat(task.data, "</td>\n            <td class='taskReview' data-index='").concat(task.taskNumber, "' style='").concat(task.completed ? "text-decoration: line-through;" : "", "'>").concat(task.taskReview, "</td>\n            <td><input class='complet' type='checkbox' data-index='").concat(task.taskNumber, "' ").concat(task.completed ? "checked" : "", "></td>\n            <td><button class='remove' data-index='").concat(task.taskNumber, "'>\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F</button></td>\n        ");
  var newRow = $('<tr>').addClass('row-task').html(target);
  if (task.completed) {
    newRow.css('background', '#AEC670');
  }
  $('.taskblock').append(newRow);
}
function restoreTask() {
  $('.taskblock').empty();
  TODOlist.task = getLS('task') || [];
  TODOlist.task.forEach(function (task) {
    return showTask(task);
  });
}
function deleteTask(taskToDelete) {
  TODOlist.task = TODOlist.task.filter(function (task) {
    return task.taskNumber !== taskToDelete;
  });
  reindexTasks();
  setLS('task', TODOlist.task);
  restoreTask();
}
function changeStatus(taskNumber) {
  var task = TODOlist.task.find(function (t) {
    return t.taskNumber === taskNumber;
  });
  if (task) {
    task.completed = !task.completed;
    setLS('task', TODOlist.task);
    restoreTask();
  }
}
function reindexTasks() {
  TODOlist.task.forEach(function (task, index) {
    task.taskNumber = index + 1;
  });
}

// Добавления задания
$('.add').on('click', function () {
  var taskInput = $('#task').val();
  var dataInput = $('#data').val();
  $('#task').val('');
  $('#data').val('');
  if (taskInput !== '' && dataInput !== '') {
    addTask(taskInput, dataInput);
  } else {
    alert('Введіть Ваше завдання та дедлайн!');
  }
});

// Обработчик событий удаления иили изменения
$('.taskblock').on('click', function (event) {
  if ($(event.target).hasClass('complet')) {
    var taskNumber = parseInt($(event.target).data('index'), 10);
    changeStatus(taskNumber);
  }
  if ($(event.target).hasClass('remove')) {
    var _taskNumber = parseInt($(event.target).data('index'), 10);
    deleteTask(_taskNumber);
  }
});

//Открытия модального окна
$('.taskblock').on('dblclick', '.taskReview', function (event) {
  var taskNumber = parseInt($(this).data('index'), 10);
  $('.modal-title').html("Task \u2116".concat(taskNumber));
  var taskText = $(this).text();
  $('.modal-body').html(taskText);
  var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.show();
});
restoreTask();
function setLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getLS(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
