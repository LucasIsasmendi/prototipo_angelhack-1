OjosQueHablan.module("NewsApp.List", function(List, OjosQueHablan, Backbone, Marionette, $, _){
  List.Controller = {
    listNews: function(){
      var news = OjosQueHablan.request("news:entities");

      var newsListView = new List.News({
        collection: news
      });

      newsListView.on("itemview:news:show", function(childView, model){
        OjosQueHablan.trigger("news:show", model.get("id"));
      });

      newsListView.on("itemview:news:next", function(childView, model){
        //Implementar el avance de noticias
      });

      newsListView.on("itemview:news:tools", function(childView, model){
        //Implementar el avance al menu de publicaciones
      });
  
     var newsPageView = new List.PageView();
     newsPageView.sliderContentRegion.show(newsListView);

     OjosQueHablan.mainRegion.show(newsPageView);
    }
  }

});
