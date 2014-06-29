OjosQueHablan.module("News.List", function(List, OjosQueHablan, Backbone, Marionette, $, _){
  List.NewsItemView = Marionette.ItemView.extend({
    tagName: "div",
    template: "#news-list-item",
    className: "swiper-slide"
  });

  List.News = Marionette.CompositeView.extend({
    tagName: "div",
    className: "js_news_feed",
    template: "#news-list-view",
    itemView: List.NewsItemView,
    itemViewContainer: ".swiper-warpper"
  });

  List.PageView = Backbone.Marionette.LayoutView.extend({
    template: "#slider-page-view",
    regions: {
      sliderContentRegion: ".js_slider_content",
    }
  });


});
