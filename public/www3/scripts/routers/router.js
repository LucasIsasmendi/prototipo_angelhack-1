define(['jquery', 'underscore', 'Backbone', '../views/MainView', '../views/FeedsView','../views/MenuFeedView','../views/HablarView', '../views/HablarCategoria'],
    function ($, _, Backbone, HomeView, FeedsView, MenuFeedView, MenuHablarView, HablarCategoriaView) {

        var Router = Backbone.Router.extend({
            routes:{
                "":"home",
                "feeds":"feeds",
                "menuFeed":"menuFeed",
                "menuHablar":"menuHablar",
                "hablar/:id": "hablarCategoria"

            },

            initialize:function () {
                function login(){
                    FB.login(function(response) {
                        console.log("Logged In");
                    }, {scope: 'publish_actions,user_status,friends_status,read_stream'});
                }

                function getFeed(){



                }

                function hablar(){
                    var video = document.getElementById("Video1");
                    video.play();
                }
            },

            home:function () {
                console.log('#home');
                var mainView = new FeedsView();
                $('#container').html('');
                $('#container').append(mainView.$el);

            },

            feeds:function(){

                console.log("#feeds");
                var feedsView = new FeedsView();
                $('#container').html('');
                $('#container').append(feedsView.$el);
                /*var self = this;
                FB.api('/me/home?locale=es_LA', function(response) {
                    console.log(response);
                });


                $.when(slide, call)
                .done(function(slideResp, callResp) {
                    view.model = callResp.data;
                    view.render();
                })
                .fail(function() {
                    self.showErrorPage();
                })
                .always(function() {
                    fb.spinner.hide();
                });*/
            },
            menuFeed:function(){
                console.log("#menuFeed");
                var feedsView = new MenuFeedView();
                $('#container').html('');
                $('#container').append(feedsView.$el);
            },
            menuHablar:function(){
                console.log("#menuHablar");
                var feedsView = new MenuHablarView();
                $('#container').html('');
                $('#container').append(feedsView.$el);
            },
            hablarCategoria:function(id){
                console.log("#menuHablarCategoria");
                console.log('IUPI!!!!!!', id);
                var feedsView = new HablarCategoriaView({categoriaElegida: id});
                $('#container').html('');
                $('#container').append(feedsView.$el);
            }
        });

return Router;

});
