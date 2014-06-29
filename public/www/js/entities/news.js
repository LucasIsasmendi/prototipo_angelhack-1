OjosQueHablan.module("Entities", function(Entities, OjosQueHablan, Backbone, Marionette, $, _){
  Entities.News = Backbone.Model.extend({  });

  Entities.NewsCollection = Backbone.Collection.extend({
    model: Entities.News
  });

  var news;

  var initializeNews = function(){
    news = new Entities.NewsCollection([
    {
      foto: "Nico",
      autor: "Nico",
      comentario: "555-0160"
    },
    {
      foto: "Nacho",
      autor: "Nacho",
      comentario: "555-0161"
    },
    {
      foto: "Leonardo",
      autor: "Leonardo",
      comentario: "555-0162"
    },
    {
      foto: "Emmanuel",
      autor: "Emmanuel",
      comentario: "555-0163"
    },
    {
      foto: "Leonardo",
      autor: "Lucas",
      comentario: "555-0164"
    }
  ]);
     /* FB.api('/me/home?locale=es_LA', function(response) {
        console.log(response);
        news = response.data;
      });*/
      //news.fetch();
  };

  var API = {
    getNewsEntities: function(){
      if(news === undefined){
        initializeNews();
      }
      return news;
    }
  };

  OjosQueHablan.reqres.setHandler("news:entities", function(){
    return API.getNewsEntities();
  });
});
