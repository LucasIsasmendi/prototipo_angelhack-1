

console.log("hohohoads");
function login(){
	FB.login(function(response) {
		console.log("Logged In");
	}, {scope: 'publish_actions,user_status,friends_status,read_stream'});
}

function getFeed(){

	FB.api('/me/home?locale=es_LA', function(response) {
		console.log(response);
	});

}


function hablar(){
	var video = document.getElementById("Video1");
	//var button = document.getElementById("play");
	video.play();
	//if (video.paused) {
	//	video.play();
		//button.textContent = "||";
	//} else {
	//	video.pause();
		//button.textContent = ">";
	//}
}


  var moverMirada = function(x,y) {
    console.log('moverMirada', x, y);
  };

	var socket = io.connect('http://localhost');
	socket.on('gaze', function (data) {
		// console.log(data);
		// socket.emit('my other event', { my: 'data' });

		var relativeX = data.x;
		var relativeY = 1-data.y;

		var gazeX = 20 + (relativeX * maxX); // margin
		var gazeY = 20 + (relativeY * maxY); // margin

		moveGaze(gazeX,gazeY);

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
