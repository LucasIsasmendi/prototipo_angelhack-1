$(document).ready(function() {

  var feedItemActivo = 1;
  var contadorActivaciones = 0;
  var ultimaActivacion = null;

  // deteccion de mirada
	var maxX = $("#background").width();
	var maxY = $("#background").height();

  var moverMirada = function(x,y) {

    x = x + 170;
    y = y;
    var toX = x;
    var toY = y;
		$(".cursor").offset({left: toX, top: toY});

    var detectarDwell = function(duracion, cb) {
      var esperoContador = contadorActivaciones;
      setTimeout(function() {
        if (esperoContador === contadorActivaciones) {
          return cb();
        }
      }, duracion);
    }

    var seleccionarActivable = function($elem) {
      $(".activo").removeClass("activo");
      $elem.addClass("activo");
      feedItemActivo = $elem.attr('data');
    }

    var $elem = $(document.elementFromPoint(x-1,y-1));
    var $padreActivable = null;
    console.log($elem);
    if ($elem.hasClass("jsActivable")) {
      $padreActivable = $elem;
    } else {
      $padreActivable = $elem.parents(".jsActivable");
      if ($padreActivable.length > 0) {
        $padreActivable = $padreActivable;
      }
    }

    if ($padreActivable) {

      if ($padreActivable.attr('data') === ultimaActivacion) {
        // abortar!
        return;
      }

      // console.log("algo",x,y);
      contadorActivaciones++;
      ultimaActivacion = $padreActivable.attr('data');
      $(".cursor").text(ultimaActivacion);

      if ($padreActivable.hasClass("jsFeedItem")) {

        console.log('mirando item ' + $padreActivable.attr('data') + " (activo=" + feedItemActivo + ")");

        if ($padreActivable.attr('data') != feedItemActivo) {
          // mirando un elemento posterior
          detectarDwell(1000, function() {
            seleccionarActivable($padreActivable);
            var y = $padreActivable.offset().top;
            console.log('scrolleando ' + y);
            $(".contenido").scrollTo($padreActivable, {duration: 600, offset: {top: -200}});
          });
        } else {
          // mirando el elemento actual
        }
      }

      $(".cursor").addClass("lindo");
    } else {
      $(".cursor").removeClass("lindo");
      // console.log("nada",x,y);
    }

  }

  var testMode = false;

  if (testMode) {
		$(document).mousemove(function(event) {
			var x = event.clientX;
			var y = event.clientY;
			moverMirada(x,y);
		});
  } else {
    console.log("iniciando socket io");
    var socket = io.connect('http://localhost');
    socket.on('gaze', function (data) {
      var relativeX = data.x;
      var relativeY = 1-data.y;

      var miradaX = 20 + (relativeX * maxX); // margin
      var miradaY = 20 + (relativeY * maxY); // margin

      // console.log(miradaX,miradaY);
      moverMirada(miradaX,miradaY);
    });
  }

  // feed
  $templateFeedItem = $("#templates > .jsFeedItem");
  var cargarFeed = function() {
    var feedData = [{
      autor: "Cosme Fulanito 123",
      avatar: "./img/avatar.jpg",
      fecha: "2014-12-12",
      likes: 20,
      comentarios: 14,
      contenido: "LOREM IPSUM VIEJA!"
    },
    {
      autor: "Cosme Fulanito",
      avatar: "./img/avatar.jpg",
      fecha: "2014-12-12",
      likes: 20,
      comentarios: 14,
      contenido: "LOREM IPSUM VIEJA!"
    },
    {
      autor: "Cosme Fulanito",
      avatar: "./img/avatar.jpg",
      fecha: "2014-12-12",
      likes: 20,
      comentarios: 14,
      contenido: "LOREM IPSUM VIEJA!"
    },
    {
      autor: "Cosme Fulanito",
      avatar: "./img/avatar.jpg",
      fecha: "2014-12-12",
      likes: 20,
      comentarios: 14,
      contenido: "LOREM IPSUM VIEJA!"
    }];
    var $contenedor = $(".contenido > .feed");

    // limpiamos
    $contenedor.empty();

    var header = "<li><h1>Ultimas Noticias</h1></li>";
    $(header).appendTo($contenedor);

    var contador = 1;
    feedData.forEach(function(item) {
      var $nuevo = $templateFeedItem.clone();
      $nuevo.find(".feed_avatar").html("<img src='" + item.avatar + "'>");
      $nuevo.find(".feed_autor").text(item.autor);
      $nuevo.find(".feed_fecha").text(item.fecha);
      $nuevo.find(".feed_likes").text(item.likes + " Me Gusta");
      $nuevo.find(".feed_comentarios").text(item.comentarios + " comentarios");
      $nuevo.find(".feed_contenido").text(item.contenido);
      $nuevo.attr('data', contador);

      if (contador === 1) {
        $nuevo.addClass('activo');
      }

      $nuevo.appendTo($contenedor);
      contador++;
    });
  };

  cargarFeed();

});
