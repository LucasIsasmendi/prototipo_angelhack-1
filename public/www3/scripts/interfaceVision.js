define(['jquery', 'underscore', 'Backbone', 'io'],
  function ($, _, Backbone, io) {

    var MainView = {
      mouseOutFrom: function(data) {
        self.contadorActivaciones++;
      },
      detectarDwell: function(duracion, cb) {
        var self = this;
        var esperoContador = self.contadorActivaciones;
        setTimeout(function() {
          if (esperoContador === self.contadorActivaciones) {
            return cb();
          }
        }, duracion);
      },
      seleccionarActivable: function($elem) {
        $(".activo").removeClass("activo");
        $elem.addClass("activo");
      },
      init: function(opciones) {
        var self = this;

        console.log('INICIANDO INTERFACE VISION CON:', opciones);

        self.maxX = $("#background").width();
        self.maxY = $("#background").height();
        self.testMode = true;
        self.delegar = opciones.delegar;

        // console.log("max:", self.maxX, self.maxY, "-- test mode?", self.testMode);

        self.ultimoItemElegido = null;

        self.itemActivo = null;
        self.contadorActivaciones = 0;
        self.ultimaActivacion = null;

        if (self.testMode) {
          console.log('bindeando mouse move');
          $(document).mousemove(function(event) {
            // console.log('moviendo para');
            var x = event.clientX;
            var y = event.clientY;
            self.moverMirada(x,y);
          });
        } else {
          // console.log("iniciando socket io");
          var socket = io.connect('http://localhost');
          socket.on('gaze', function (data) {
            var relativeX = data.x;
            var relativeY = 1-data.y;
            var miradaX = 20 + (relativeX * self.maxX); // margin
            var miradaY = 20 + (relativeY * self.maxY); // margin
            self.moverMirada(miradaX,miradaY);
          });
        }

      },
      moverMirada: function(x, y) {
        var self = this;
        x = x;
        y = y;
        var toX = x;
        var toY = y;
    		$(".cursor").offset({left: toX+4, top: toY+4});


        var $elem = $(document.elementFromPoint(x-1,y-1));
        // console.log('mirando',x,',',y,$elem);

        if ($elem.is("#surface")) {

        }

        var $padreActivable = null;
        if ($elem.hasClass("jsActivable")) {
          $padreActivable = $elem;
        } else {
          $padreActivable = $elem.parents(".jsActivable");
          if ($padreActivable.length === 0) {
            $padreActivable = null;
          }
        }

        //console.log($padreActivable);
        if ($padreActivable !== null) {

          if ($padreActivable.attr('data') === self.ultimaActivacion) {
            return;
          }

          self.contadorActivaciones++;
          self.ultimaActivacion = $padreActivable.attr('data');
          $(".cursor").text(self.ultimaActivacion);

          if ($padreActivable.hasClass("jsActivable") && $padreActivable.is("li")) {

            if ($padreActivable.attr('data') != self.itemActivo) {
              // mirando un elemento posterior
              self.detectarDwell(1000, function() {
                self.seleccionarActivable($padreActivable);

                self.ultimoItemElegido = $padreActivable.attr('data');
                var y = $padreActivable.offset().top;
                console.log('scrolleando ' + y);
                $(".contenido").scrollTo($padreActivable, {duration: 600, offset: {top: -200}});
              });

            } else {
              // mirando el elemento actual
            }

          } else if ($padreActivable.hasClass("jsBoton")) {

            console.log('mirando un boton. mi data:', $padreActivable.attr('data'), " -- activo:", self.itemActivo);
            if ($padreActivable.attr('data') != self.itemActivo) {

              $padreActivable.addClass("activo");

              // mirando un elemento posterior
              self.detectarDwell(2000, function() {
                console.log('dwell done!:',$padreActivable.attr('data'));
                console.log('llamando a mi padre...');
                self.delegar.accionUI($padreActivable.attr('data'), self.ultimoItemElegido);
              });
            }

          }



        } else {
          console.log('nada');
        }
      }
    }

    return MainView;
  });
