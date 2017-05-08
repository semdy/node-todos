var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var ObjectId = Schema.Types.ObjectId;
var getUuid = require('../utils/uid');
var db = mongoose.connect('mongodb://localhost:27017/node_todos');

db.connection.on('error', console.error.bind(console, 'connection error:'));
db.connection.once('open', function () {
    console.log("mongodb connected...");
});

var PostSchema = new Schema({
    uid: String,
    todo_name: String,
    status: {type: Number, default: 0},
    date: { type: Date, default: Date.now }
});

var TodoListModel = db.model('todo_list', PostSchema);

function save(todoName, callback) {
    // var TestEntity = new TestModel({
    //     todoName: "Lenka"
    // });

    // TestEntity.save(function(err){
    //     if(err){
    //         console.log(err);
    //     }
    // });

    TodoListModel.create({
        uid: getUuid(),
        todo_name: todoName
    }, function (err) {
        if (err) {
            console.error(err);
        }
        callback(err);
    });
}

//模糊查询
function getTodoListByTodoName(todoName, callback) {
    const reg = new RegExp(todoName, 'i') //不区分大小写
    TodoListModel.find({
        $or: [ //多条件，数组
            { todo_name: { $regex: reg } }
        ]
    }, null, { sort: { date: -1 } }, function (err, result) {
        if (err) {
            console.error(err);
        }
        callback(err, result);
    });
}

function getTodoList(callback) {
    //按date倒序排列
    TodoListModel.find({}, null, { sort: { date: -1 }, /*limit: 5*/ }, function (err, results) {
        if (err) {
            console.error(err);
        }
        callback(err, results);
    });
}

function doneTodoItemById(uid, callback) {
    TodoListModel.findOneAndUpdate({uid: uid}, {status: 1}, function (err, results) {
        if (err) {
            console.error(err);
        }
        callback(err, results);
    });
}

function delTodoItemById(uid, callback) {
    TodoListModel.findOneAndRemove({uid: uid}, function (err, results) {
        if (err) {
            console.error(err);
        }
        callback(err, results);
    });
}

module.exports = {
    save,
    getTodoListByTodoName,
    getTodoList,
    doneTodoItemById,
    delTodoItemById
};