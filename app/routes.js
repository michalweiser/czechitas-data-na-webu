var Todo = require('./models/todo');

function getTodos(res) {

};

module.exports = function (app, db) {

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};
