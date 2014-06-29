


        <section id="hablar_categoria" hidden>

            <div class="menu menu_izq boton jsBoton jsActivable" data="menu_izq">
              <div class="loading"></div>
              <div class="boton_contenido">
                <div class="icono">[ico]</div>
                <div class="texto">Volver</div>
              </div>
            </div>

            <div class="contenido">
              <ul>
                <li>
                  <h1><span class="icono"></span> Hablar</h1>
                    <strong>Categorías</strong>
                </li>
                <% _.each(frases,function(frase){  %>
                    <li href="<%= frase.id %>" class="jsActivable categoria">
						<%= frase.name %>
					</li>
                <% }); %>
              </ul>
            </div>

            <div class="menu menu_der boton jsBoton jsActivable" data="menu_der">
                <div class="loading"></div>
              <div class="boton_contenido">
                <div class="icono">[ico]</div>
                <div class="texto">Seleccionar</div>
              </div>
            </div>

        </section>
