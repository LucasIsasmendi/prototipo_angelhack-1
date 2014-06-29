OjosQueHablan.module("NewsApp", function(NewsApp, OjosQueHablan, Backbone, Marionette, $, _){
  NewsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "news": "listNews"
      //"News/:id": "showContact"
    }
  });

  var API = {
    listNews: function(){
      NewsApp.List.Controller.listNews();
    },

    showContact: function(id){
      NewsApp.Show.Controller.showNews(id);
    }
  };

  OjosQueHablan.on("news:list", function(){
    OjosQueHablan.navigate("news");
    API.listNews();
  });

  OjosQueHablan.on("news:show", function(id){
    OjosQueHablan.navigate("news/" + id);
    API.showNews(id);
  });

  OjosQueHablan.addInitializer(function(){
    new NewsApp.Router({
      controller: API
    });
  });
});
