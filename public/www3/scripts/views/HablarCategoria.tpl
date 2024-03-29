        <section id="hablar_cetegoria_items" hidden>

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
                    <strong><span>Categorías <span class="flecha">►</span> <%=categoria%></span></strong>
                </li>

                <% _.each(frases,function(frase){  %>
                <li class="jsActivable activo hablable">
                  <%= frase %>
                </li>
                 <% }); %>
              </ul>
            </div>

            <div class="menu menu_der boton jsBoton jsActivable" data="menu_der">
                <div class="loading"></div>
              <div class="boton_contenido">
                <div class="icono">[ico]</div>
                <div class="texto">Hablar</div>
              </div>
            </div>

        </section>
