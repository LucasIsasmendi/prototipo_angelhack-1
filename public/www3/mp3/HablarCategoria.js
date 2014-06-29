
define(['jquery', 'underscore', 'Backbone', 'text!./HablarView.tpl', '../models/frases'],
	function ($, _, Backbone, HablarTemplate, FrasesModels) {

		var MainView = Backbone.View.extend({

			initialize:function (options) {
				var self = this;
				this.template = _.template(HablarTemplate);
				this.render();

			},

			render:function () {
				var self= this;
        var frases = [
        {
          "id":1,
          "name": "Comunicacion General",
          "frases": [
          "Hola, ¿como estas?",
          "Como fue tu dia?",
          "Puedo ayudarte con algo?",
          "Hasta luego"
          ]
        },
        {
          "id":2,
          "name": "Comunicacion internet",
          "frases": [
          "No tengo internet",
          "Se colgo la computadora",
          "La cuenta de internet no responde",
          "-- otro --"
          ]
        },
        {
          "id":3,
          "name": "Necesidad basica",
          "frases": [
          "Tengo hambre",
          "Tengo sed",
          "Tengo sueño",
          "Necesito ir al baño"
          ]
        },
        {
          "id":4,
          "name": "Urgencia",
          "frases": [
          "No me siento bien",
          "Me duele la cabeza",
          "Estoy acalambrado",
          "-- otro --"
          ]
        }
        ];
var audios = [
        {
          "id":1,
          "name": "Comunicacion General",
          "audios": [
          "1_hola_como_estas.mp3",
          "1_como_fue_tu_dia.mp3",
          "1_puedo_ayudarte_con_algo.mp3",
          "1_hasta_luego.mp3"
          ]
        },
        {
          "id":2,
          "name": "Comunicacion internet",
          "audios": [
          "2_no_tengo_internet.mp3",
          "2_se_colgo_la_compu.mp3",
          "2_la_cuenta_de_internet_no_responde.mp3",
          "-- otro --"
          ]
        },
        {
          "id":3,
          "name": "Necesidad basica",
          "audios": [
          "3_tengo_hambre.mp3",
          "3_tengo_sed.mp3",
          "3_tengo_sueño.mp3",
          "3_necesito_ir_al_banio.mp3"
          ]
        },
        {
          "id":4,
          "name": "Urgencia",
          "audios": [
          "4_no_me_siento_bien.mp3",
          "4_me_duele_la_cabeza.mp3",
          "4_estoy_acalambrado.mp3",
          "-- otro --"
          ]
        }
        ];        
        console.log("voy a hablar");
        this.hablar("2_no_tengo_internet.mp3");
        //this.$el.html(this.template({frases: frases[id].frase, categoria:frases[id].name}));
        this.$(".hablable").click(function(e){
          var fraseAHablar = $(e.target).html();
          this.hablar(fraseAHablar);
            //Backbone.history.navigate("/" {trigger:true});
          });



      },
/*
      hablar:function(frase){
        console.log("voy a decir: fraseee" + frase);
        console.log(frase.toString());
        frase = frase.toString();
        frase = frase.split(" ");
        query = "http://translate.google.com/translate_tts?tl=en&q="
        console.log(frase.length);
        for(var i=0;i<frase.length;i++){
          query += frase[i]+" ";
        }
        query+="&tl=es-ar";
          console.log(query);
          var myVideo = document.getElementsByTagName('video')[0];
          console.log(myVideo);
          myVideo.src = encodeURI(query);
          myVideo.load();
          myVideo.play();
          
      }*/ 
      hablar:function(audios){
        console.log("voy a decir: fraseee" + audios);
        console.log(audios.toString());
        audios = audios.toString();
        audios = audios.split(" ");
        query = "./mp3/"+audios
        console.log(audios);
        //query+="&tl=es-ar";
          //console.log(query);
          var myVideo = document.getElementsByTagName('video')[0];
          console.log(query);
          myVideo.src = encodeURI(query);
          myVideo.load();
          myVideo.play();
          
      } 

    });

return MainView;
});
