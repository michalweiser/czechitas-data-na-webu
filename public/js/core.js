var serialize = function (data) {
  var keys = [];

  Object.keys(data).forEach(function(key) {
    if (data.hasOwnProperty(key)) {
      keys.push(key + '=' + data[key]);
    }
  })

  return keys.join('&');
};

var request = function request(type, url, data) {
  var data = data || null;

  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.onreadystatechange = function () {
      var DONE = 4;
      var OK = 200;
      if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Error: ' + xhr.status);
        }
      }
    };
    if (data) {
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.send(serialize(data));
    } else {
      xhr.send();
    }
  });
}

// http service
var http = {

};

// Todo Service
var Service = function Service(http) {

};

var View = function View(scope) {
  this.scope = scope;
  this.spinner = scope.querySelector('.spinner');
  this.input = scope.querySelector('.input');
  this.submit = scope.querySelector('.submit');
  this.todos = scope.querySelector('.todos');
  this.length = scope.querySelector('.length');
  this.form = scope.querySelector('form');

  this.form.onsubmit = function (event) {
    event.preventDefault();
    this.onSubmit && this.onSubmit();
    return false;
  }.bind(this);

  this.inputValue = function inputValue() {
    return this.input.value;
  }.bind(this);

  this.cleanInput = function cleanInput() {
    this.input.value = '';
  };

  this.isLoading = function isLoading(state) {
    if (state) {
      this.spinner.classList.remove('hidden');
    } else {
      this.spinner.classList.add('hidden');
    }
  };

  this.createTodo = function (todo) {
    var checkbox = document.createElement('div');

    var label = document.createElement('label');
    var input = document.createElement('input');
    var text = document.createTextNode(todo.text);

    checkbox.classList.add('checkbox');
    input.type = 'checkbox';
    input.onclick = function () {
      this.deleteTodo(todo._id);
    }.bind(this);

    label.appendChild(input);
    label.appendChild(text);
    checkbox.appendChild(label);

    return checkbox;
  };

  this.updateTodos = function (data) {
    this.todos.querySelectorAll('.checkbox').forEach(function (todo) {
      todo.parentElement.removeChild(todo);
    });

    data.forEach(function (todo) {
      this.todos.appendChild(this.createTodo(todo));
    }.bind(this));

    this.length.textContent = data.length;
  }

  this.deleteTodo = function (id) {
    this.onDeleteTodo && this.onDeleteTodo(id);
  }
};

// Todo Controller
var Control = function Control(view, service) {
  this.loading = true;
  this.todos = {};

  view.onDeleteTodo = function(id) {

  }.bind(this);

  view.onSubmit = function() {

  }.bind(this);

  service.get().then(function (data) {

  }.bind(this));

  this.createTodo = function createTodo() {

  };

  this.createData = function createData() {

  };

  this.deleteTodo = function deleteTodo(id) {

  };

  this.isLoading = function isLoading(state) {

  }

  this.updateTodos = function (data) {

  }
};

document.addEventListener('DOMContentLoaded', function init() {
  window.todos = new Control(
    new View(document.querySelector('body')),
    new Service(http)
  );
}, false);
