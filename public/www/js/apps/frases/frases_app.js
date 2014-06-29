OjosQueHablan.module("FrasesApp", function(FrasesApp, OjosQueHablan, Backbone, Marionette, $, _){
  FrasesApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "frases": "listFrases"
      //"News/:id": "showContact"
    }
  });

  var API = {
    listFrases: function(){
      FrasesApp.List.Controller.listNews();
    },

    showFrases: function(id){
      FrasesApp.Show.Controller.showNews(id);
    }
  };

  OjosQueHablan.on("frases:list", function(){
    OjosQueHablan.navigate("frases");
    API.listNews();
  });

  OjosQueHablan.on("frases:show", function(id){
    OjosQueHablan.navigate("frases/" + id);
    API.showFrases(id);
  });

  OjosQueHablan.addInitializer(function(){
    new FrasesApp.Router({
      controller: API
    });
  });
});
