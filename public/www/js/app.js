$(function(){
  var mySwiper = $('.feed').swiper({
    mode:'vertical',
    loop: false,
    slidesPerView:3
  });

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

var ContactManager = new Marionette.Application();

ContactManager.addRegions({
	mainRegion: "#main-region"
});

ContactManager.StaticView = Marionette.ItemView.extend({
	template: "#static-template"
});
ContactManager.on("initialize:after", function(){
	var staticView = new ContactManager.StaticView({
	template: "#different-static-template"
});

ContactManager.mainRegion.show(staticView);

});

ContactManager.start();



});
