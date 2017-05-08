var mysql = require('mysql');
var getUuid = require('../utils/uid');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_todos'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('mysql connected as id ' + connection.threadId);
});

function save(todoName, callback) {
  var post = {
    uid: getUuid(),
    todo_name: todoName
  };
  connection.query('INSERT INTO todo_list SET ?', post, function (err, results, fields) {
    if (err) console.error(err);
    callback(err, results, fields);
  });
}

//模糊查询
function getTodoListByTodoName(todoName, callback) {
  var sql = 'SELECT * FROM todo_list WHERE todo_name like ?';
  connection.query(sql, "%" + todoName + "%", function (err, results, fields) {
    if (err) console.error(err);
    callback(err, results, fields);
  });
}

function getTodoList(callback) {
  var sorter = 'date';
  var sql = 'SELECT * FROM todo_list ORDER BY ' + connection.escapeId(sorter) + ' DESC';
  connection.query(sql, function (error, results, fields) {
    if (error) console.error(error);
    callback(error, results, fields);
  });
}

function doneTodoItemById(uid, callback) {
  var updates = [1, uid];
  var sql = 'UPDATE todo_list SET status = ? WHERE uid = ?';
  connection.query(sql, updates, function (error, results, fields) {
    if (error) console.error(error);
    callback(error, results, fields);
  });
}

function delTodoItemById(uid, callback) {
  var sql = 'DELETE FROM todo_list WHERE uid = ?';
  connection.query(sql, uid, function (error, results, fields) {
    if (error) console.error(error);
    callback(error, results, fields);
  });
}

module.exports = {
  save,
  getTodoListByTodoName,
  getTodoList,
  doneTodoItemById,
  delTodoItemById
};