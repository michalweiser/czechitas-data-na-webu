var Todo = require('./models/todo');   //mongoose nam pomuze nadefinovat, jak ten zaznam ma vypadat

function getTodos(res) {
    Todo.find(function (err, todos) {
        if (err) {
            res.send(err);
        }

        res.json(todos);
    });
};

module.exports = function (app, db) {

    app.get('/api/todos', function (req, res) { //jak si stranka bude povidat se serverem
        getTodos(res);
    });

    app.post('/api/todos', function (req, res) {  //budeme todos timto vytvaret
        Todo.create({
            text: req.body.text
        }, function (err, todo) {    //call back funkce
            if (err) {
                res.send(err);
            }

            getTodos(res);

        });
    });


    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }

            getTodos(res);
        });
    });

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};
