var Todo = require('./models/todo');

function getTodos(res) {
    Todo.find(function (err, todos) {

        if (err) {
            res.send(err);
        }

        res.json(todos);
    });
};

module.exports = function (app, db) {
//zjištuje info z databáze todos
    app.get('/api/todos', function (req, res) {
        getTodos(res);
    });

//vytvoří novy ukol, pošle ho na server a načte z něho ukoly, které tam jsou
    app.post('/api/todos', function (req, res) {
        Todo.create({
            text: req.body.text
        }, function (err, todo){
            if (err) {
                res.send(err);
            }
            getTodos(res);
        });
    });

    //maže úkoly v dtb
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            //vyzkoušené z http parametr,  který je číslo id
            _id: req.params.todo_id
        }, function (err) {
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
