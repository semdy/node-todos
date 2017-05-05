var express = require("express");
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./db');

app.set('views', './views');
app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: err });
    } else {
        next(err);
    }
}

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
}

app.get("/", function (req, res) {
    res.render("layout", {
        title: "express demo",
        message: "创建express实例成功"
    });
});

app.post("/save", function (req, res) {
    var todoname = req.body.todoname;
    db.save(todoname, function (err) {
        if (err) {
            res.json({
                success: false,
                message: "提交失败"
            });
        } else {
            res.json({
                success: true,
                message: "提交成功"
            });
        }
    });
});

app.get("/getTodoList/:name?", function (req, res) {
    if (req.params.name) {
        db.getTodoListByTodoName(req.params.name, function (err, result) {
            if (err || result === null) {
                res.json({
                    success: false,
                    message: err || "未找到相关数据",
                    data: null
                });
            } else {
                res.json({
                    success: true,
                    message: "",
                    data: result
                });
            }
        });
    } else {
        db.getTodoList(function (err, results) {
            if (err) {
                res.json({
                    success: false,
                    message: err,
                    data: []
                });
            } else {
                res.json({
                    success: true,
                    message: "",
                    data: results
                });
            }
        });
    }
});

app.post("/done", function (req, res) {
    var uid = req.body.uid;
    db.doneTodoItemById(uid, function (err) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            res.json({
                success: true,
                message: "done"
            });
        }
    });
});

app.post("/del", function (req, res) {
    var uid = req.body.uid;
    db.delTodoItemById(uid, function (err) {
        if (err) {
            res.json({
                success: false,
                message: err
            });
        } else {
            res.json({
                success: true,
                message: "done"
            });
        }
    });
});

app.get("*", function (req, res) {
    res.status(404);
    res.end('404 not found');
});

app.post("*", function (req, res) {
    res.status(404);
    res.end('404 not found');
});

app.listen(3002, function () {
    console.log('server listening on port 3002');
});