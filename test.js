const express = require('express');
const util = require('underscore');
const backbone = require('backbone');

const app = express();

const Standard = backbone.Model.extend({
    preinitialize : function(){
        this.server = express();
        this.listen = this.server.listen;
    },
    defaults : function(){
        return {
            title : ''
        }
    },
    initialize : function(){
        var self = this;
        this.listenTo(this.server, 'change', this.log);
        this.listen(3000, function(){
            self.trigger('change', 'lol');
        })
    },
    log : function(x){
        console.log(x)
    }
});

const demo = new Standard();
