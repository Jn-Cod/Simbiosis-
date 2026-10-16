// Página de plantas: detalle y polinizadores beneficiados

let plantaActual = null;

function togglePlanta(id) {
  const panel = $("#plantaDetalle");
  if (plantaActual === id) {
    plantaActual = null;
    panel.hidden = true;
    marcarActivo("#plantasGrid", null);
    return;
  }
  plantaActual = id;
  marcarActivo("#plantasGrid", id);
  mostrarDetalle(id);
}

function mostrarDetalle(id) {
  const pl = getPlanta(id);
  if (!pl) return;
  const panel = $("#plantaDetalle");
  panel.hidden = false;
  panel.innerHTML = `
    <div class="detail-hero">
      <img src="${pl.img}" alt="${pl.nombre}" />
      <div class="detail-body">
        <h3>${pl.nombre}</h3>
        <span class="cientifico">${pl.cientifico}</span>
        <p class="descripcion">${pl.descripcion}</p>
        <h4 class="relacionadas-title">Cuidados básicos</h4>
        <ul class="datos-lista">${pl.cuidados.map((c) => `<li>${c}</li>`).join("")}</ul>
        <h4 class="relacionadas-title">Beneficios</h4>
        <ul class="datos-lista">${pl.beneficios.map((b) => `<li>${b}</li>`).join("")}</ul>
        <h4 class="relacionadas-title">Polinizadores que beneficia:</h4>
        <div class="chips">${chipsPolinizadores(pl.polinizadores)}</div>
      </div>
    </div>`;
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

renderGrid("#plantasGrid", PLANTAS, togglePlanta);

// Enlace directo: plantas.html?planta=girasol
const param = getParametro("planta");
if (param && getPlanta(param)) {
  plantaActual = param;
  marcarActivo("#plantasGrid", param);
  mostrarDetalle(param);
}
