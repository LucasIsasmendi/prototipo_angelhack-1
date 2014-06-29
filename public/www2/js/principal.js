$(document).ready(function() {

  var feedItemActivo = 1;
  var contadorActivaciones = 0;

  // deteccion de mirada
	var maxX = $("#background").width();
	var maxY = $("#background").height();

  var moverMirada = function(x,y) {
    var detectarDwell = function(duracion, cb) {
      var esperoContador = contadorActivaciones;
      setTimeout(function() {
        if (esperoContador === contadorActivaciones) {
          return cb();
        }
      }, duracion);
    }

    var elem = document.elementFromPoint(x,y);
    var $padreActivable = $(elem).parents(".jsActivable");
    console.log($padreActivable);

    if ($padreActivable.length > 0) {
      console.log("algo",x,y);
      contadorActivaciones++;
    } else {
      console.log("nada",x,y);
    }

    var seleccionarActivable = function($elem) {
      $(".activo").removeClass("activo");
      $elem.addClass("activo");
    }

    if ($padreActivable.hasClass("jsFeedItem")) {
      if ($padreActivable.attr('data') > feedItemActivo) {
        // mirando un elemento posterior
        detectarDwell(1000, function() {
          seleccionarActivable($padreActivable);
        });

      } else if ($padreActivable.attr('data') < feedItemActivo) {
        // mirando un elemento anterior
        detectarDwell(1000, function() {
          alert("ir al posterior!");
        });

      } else {
        // mirando el elemento actual
      }
    }

  }

  var testMode = true;

  if (testMode) {
		$(document).mousemove(function(event) {
			var x = event.clientX;
			var y = event.clientY;
			moverMirada(x,y);
		});
  } else {
    var socket = io.connect('http://localhost');
    socket.on('gaze', function (data) {
      var relativeX = data.x;
      var relativeY = 1-data.y;

      var miradaX = 20 + (relativeX * maxX); // margin
      var miradaY = 20 + (relativeY * maxY); // margin

      moverMirada(miradaX,miradaY);
    });
  }

  // feed
  $templateFeedItem = $("#templates > .jsFeedItem");
  var cargarFeed = function() {
    var feedData = [{
      autor: "Cosme Fulanito",
      avatar: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/c171.49.618.618/s100x100/525964_4764957322117_12835754_n.jpg",
      fecha: "2014-12-12",
      likes: 20,
      comentarios: 14,
      contenido: "LOREM IPSUM VIEJA!"
    },
    {
      autor: "Cosme Fulanito",
      avatar: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/c171.49.618.618/s100x100/525964_4764957322117_12835754_n.jpg",
      fecha: "2014-12-12",
      likes: 20,
      comentarios: 14,
      contenido: "LOREM IPSUM VIEJA!"
    },
    {
      autor: "Cosme Fulanito",
      avatar: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/c171.49.618.618/s100x100/525964_4764957322117_12835754_n.jpg",
      fecha: "2014-12-12",
      likes: 20,
      comentarios: 14,
      contenido: "LOREM IPSUM VIEJA!"
    },
    {
      autor: "Cosme Fulanito",
      avatar: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/c171.49.618.618/s100x100/525964_4764957322117_12835754_n.jpg",
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
      $nuevo.appendTo($contenedor);
      contador++;
    });
  };

  cargarFeed();

});
