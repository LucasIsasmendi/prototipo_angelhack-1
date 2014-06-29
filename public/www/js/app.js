

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

//APP DATA
var OjosQueHablan = new Marionette.Application();

OjosQueHablan.addRegions({
  mainRegion: "#main-region"
});

OjosQueHablan.navigate = function(route,  options){
  options || (options = {});
  Backbone.history.navigate(route, options);
};

OjosQueHablan.getCurrentRoute = function(){
  return Backbone.history.fragment
};

OjosQueHablan.on("initialize:after", function(){
  if(Backbone.history){
    Backbone.history.start();

    if(this.getCurrentRoute() === ""){
      OjosQueHablan.trigger("news:list");
    }
  }
});

OjosQueHablan.start();




/////////PointDATA

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

		moverMirada(gazeX,gazeY);

	});

