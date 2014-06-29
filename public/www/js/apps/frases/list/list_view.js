OjosQueHablan.module("Frases.List", function(List, OjosQueHablan, Backbone, Marionette, $, _){
  List.FrasesItemView = Marionette.ItemView.extend({
    tagName: "div",
    template: "#frases-list-item",
    className: "swiper-slide"
  });

  List.Frases = Marionette.CompositeView.extend({
    tagName: "div",
    className: "js_frases_feed",
    template: "#frases-list-view",
    itemView: List.FrasesItemView,
    itemViewContainer: ".swiper-warpper"
  });

  List.PageView = Backbone.Marionette.LayoutView.extend({
    template: "#slider-page-view",

    regions: {
      sliderContentRegion: ".js_slider_content",
    }
  });

  var layoutView = new AppLayoutView();
  layoutView.render();

});
