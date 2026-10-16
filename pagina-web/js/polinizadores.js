// Página de polinizadores: detalle y plantas recomendadas

let polinizadorActual = null;

function togglePolinizador(id) {
  const panel = $("#polinizadorDetalle");
  if (polinizadorActual === id) {
    polinizadorActual = null;
    panel.hidden = true;
    marcarActivo("#polinizadoresGrid", null);
    return;
  }
  polinizadorActual = id;
  marcarActivo("#polinizadoresGrid", id);
  mostrarDetalle(id);
}

function mostrarDetalle(id) {
  const po = getPolinizador(id);
  if (!po) return;
  const panel = $("#polinizadorDetalle");
  panel.hidden = false;
  panel.innerHTML = `
    <div class="detail-hero">
      <img src="${po.img}" alt="${po.nombre}" />
      <div class="detail-body">
        <h3>${po.nombre}</h3>
        <span class="cientifico">${po.cientifico}</span>
        <p class="descripcion">${po.descripcion}</p>
        <ul class="datos-lista">${po.datos.map((d) => `<li>${d}</li>`).join("")}</ul>
        <h4 class="relacionadas-title">Plantas que puedes donar para ayudar a ${po.nombre}:</h4>
        <div class="chips">${chipsPlantas(po.plantas)}</div>
      </div>
    </div>`;
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

renderGrid("#polinizadoresGrid", POLINIZADORES, togglePolinizador);

// Enlace directo: polinizadores.html?polinizador=colibri
const param = getParametro("polinizador");
if (param && getPolinizador(param)) {
  polinizadorActual = param;
  marcarActivo("#polinizadoresGrid", param);
  mostrarDetalle(param);
}
