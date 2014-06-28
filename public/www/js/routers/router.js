MyRouter = Backbone.Marionette.AppRouter.extend({
 
  routes : {
    "/" : "feed"
  },
  feed : function(){
    console.log("state: feed");
  }

});