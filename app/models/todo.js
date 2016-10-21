var mongoose = require('mongoose');
module.exprots = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    }
});