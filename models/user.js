const Backbone = require("backbone");

const UserModel = Backbone.Model.extend({
    preinitialize : function(){},
    defaults : function(){
        return {
            username : '',
            password : ''
        }
    },
    initialize : function(){}    
});

module.exports = new UserModel();