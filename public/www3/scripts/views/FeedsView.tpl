		<section id="feed">

		<div class="menu menu_izq boton jsBoton jsActivable" data="menu_izq">
			<div class="loading"></div>
			<div href="#menuHablar" class="boton_contenido">
				<div class="icono">[ico]</div>
				<div class="texto">HABLAR</div>
			</div>
		</div>

		<div class="contenido">

			<ul class="feed">
				<li>
					<h1>Ultimas Noticias</h1>
				</li>
				<% _.each(feeds,function(feed){  %>

				<li class="jsActivable jsFeedItem">
					<div class="feed_avatar"><img src="http://graph.facebook.com/<%= feed.from.id %>/picture" /></div>
					<div class="feed_autor"><%= feed.from.name %></div>
					<div class="feed_fecha">12/12/14</div>
					<div class="feed_likes"><% var x = 1+ Math.floor(Math.random() * 5); %> <%=x%> me gusta</div>
					<div class="feed_comentarios"><% var x = 2+ Math.floor(Math.random() * 4); %> <%=x%> comentarios</div>
					<div class="feed_contenido"><%= feed.message %></div>
				</li>
				<% }); %>

			</ul>

		</div>

		<div  class="menu menu_der boton jsBoton jsActivable" data="menu_der">
			<div class="loading"></div>
			<div href="#menuFeed" class="boton_contenido">
				<div class="icono">[ico]</div>
				<div class="texto">MENU</div>
			</div>
		</div>

	</section>
