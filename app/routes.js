var Todo = require('./models/todo');

function getTodos(res) {
    //tahle fce nic nevraci proto, ze node ji da req a res res.send nebo res.json uz si to s databazi vyridi
    Todo.find(function (err, todos) {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    });
};

module.exports = function (app, db) {
    //zjistuje info z databaze todos
    app.get('/api/todos', function(req, res) {
        getTodos(res);
    });

    //vytvori novy ukol, posle ho serveru a nacte z neho ukoly, ktere uz tam jsou
    app.post('/api/todos', function(req, res) {
        Todo.create({
            text: req.body.text
        }, function (err, todo){
            if (err){
                res.send(err);
            }

            getTodos(res);
        });
    });

    //maze ukoly v databazi
    app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            //vykousne z http parametr, ktery je cislo id
            _id: req.params.todo_id 
        }, function(err) {
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
