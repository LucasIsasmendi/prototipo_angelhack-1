$(function(){
  var mySwiper = $('.feed').swiper({
    mode:'vertical',
    loop: false,
    slidesPerView:3
  });


	var FeedManager = new Marionette.Application();

	FeedManager.addRegions({
		mainRegion: "#main-region"
	});

	FeedManager.Contact = Backbone.Model.extend({});

	FeedManager.FeedCollection = Backbone.Collection.extend({
		model: FeedManager.Contact
	});

	FeedManager.FeedItemView = Marionette.ItemView.extend({
		tagName: "li",
		template: "#feeds-list"
	});

	FeedManager.FeedsView = Marionette.CollectionView.extend({
		tagName: "ul",
		itemView: FeedManager.FeedItemView
	});

	FeedManager.on("initialize:after", function(){
	var feeds = new FeedManager.FeedCollection([
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

	var feedsListView = new FeedManager.ContactsView({
		collection: feeds
	});

	FeedManager.mainRegion.show(feedsListView);
	});

	FeedManager.start();

});

