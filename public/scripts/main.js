function saveTodoItem(value){
  $.ajax({
    url: '/save',
    type: 'post',
    data: {
      todoname: value
    },
    success: function (res) {
      getTodoList();
    },
    error: function () {
      alert("提交失败");
    }
  });
}

function getTodoList(value) {
  $.get('/getTodoList/' + (value||""), function (res) {
    fillUserList(res.data);
  });
}

function fillUserList(todoModel) {
  var p = '';
  $.each(todoModel, function (i, todo) {
    p += '<div data-uid="' + todo.uid + '" class="' + ( todo.status === 1 ? "todo_item_done" : "") + '"><span>' + todo.todo_name + '</span><button class="done">完成</button><button class="del">删除</button></div>';
  });
  p += '';
  $(".todo_list").html(p);
}

function delTodoItem(uid, callback) {
  $.post('/del', {uid: uid}, function (res) {
    if (res.success) {
      callback(res);
    } else {
      alert(res.message);
    }
  });
}

function doneTodoItem(uid, callback) {
  $.post('/done', {uid: uid}, function (res) {
    if (res.success) {
      callback(res);
    } else {
      alert(res.message);
    }
  });
}

$(function () {
  getTodoList();

  var forms = document.forms;
  var $todoList = $(".todo_list");

  forms[0].addEventListener("submit", function (e) {
    e.preventDefault();
    saveTodoItem(this.todoname.value);
  }, false);

  forms[1].addEventListener("submit", function (e) {
    e.preventDefault();
    getTodoList(this.todoname.value);
  }, false);

  $todoList.on("click", "button.done", function () {
    var $parent = $(this).parent();
    doneTodoItem($parent.attr("data-uid"), function () {
      $parent.addClass("todo_item_done");
    });
  });

  $todoList.on("click", "button.del", function () {
    var $parent = $(this).parent();
    delTodoItem($parent.attr("data-uid"), function () {
      $parent.remove();
    });
  });

});