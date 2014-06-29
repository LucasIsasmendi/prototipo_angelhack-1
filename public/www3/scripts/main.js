require.config({
    paths:{
        text:'libs/require/text',
        underscore:'libs/underscore/underscore',
        Backbone:'libs/backbone/backbone',
        jquery:'libs/jquery/jquery-1.8.2',
        scrollTo:'libs/jquery/scrollTo',
        io: '/socket.io/socket.io.js'
    },
    shim:{
        Backbone:{
            deps:['underscore', 'jquery', 'scrollTo', 'io'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        }
    }
});

require(['routers/router'],
    function (Router) {
       $(document).ready(function(){
            self.app = new Router({windowel: self});
            Backbone.history.start();

      });
    }
);
