// Página de plantas: filtro por zona, detalle y polinizadores beneficiados

let plantaActual = null;
let zonaFiltro = "";

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

function listaZonasPlanta(pl) {
  const zonas = zonasParaPlanta(pl);
  if (!zonas.length) return "";
  return `
    <h4 class="relacionadas-title">Zonas donde puedes donarla:</h4>
    <div class="chips-zonas">${zonas
      .map((z) => `<span class="chip-zona">${z.nombre}</span>`)
      .join("")}</div>`;
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
        ${listaZonasPlanta(pl)}
      </div>
    </div>`;
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderFiltro() {
  const select = $("#filtroZona");
  if (!select) return;
  select.innerHTML =
    `<option value="">Todas las zonas</option>` +
    ZONAS.map((z) => `<option value="${z.id}">${z.nombre}</option>`).join("");
}

function actualizarResumen() {
  const resumen = $("#filtroResumen");
  if (!resumen) return;
  const total = plantasParaZona(zonaFiltro).length;
  if (!zonaFiltro) {
    resumen.textContent = `Mostrando las ${total} plantas y árboles donables en todos los climas.`;
    return;
  }
  const zona = getZona(zonaFiltro);
  resumen.innerHTML = `Mostrando <strong>${total}</strong> plantas y árboles recomendados para <strong>${zona.nombre}</strong> (${CLIMA_LABEL[zona.clima]}).`;
}

function aplicarFiltro() {
  const plantas = plantasParaZona(zonaFiltro);

  // Cerrar el detalle si la planta activa ya no está visible
  if (plantaActual && !plantas.some((pl) => pl.id === plantaActual)) {
    plantaActual = null;
    $("#plantaDetalle").hidden = true;
  }

  renderGrid("#plantasGrid", plantas, togglePlanta);

  if (plantaActual) {
    marcarActivo("#plantasGrid", plantaActual);
    mostrarDetalle(plantaActual);
  }
  actualizarResumen();
}

renderFiltro();

const select = $("#filtroZona");
select.addEventListener("change", () => {
  zonaFiltro = select.value;
  aplicarFiltro();
});

// Enlaces directos: plantas.html?zona=4 o plantas.html?planta=girasol
const paramZona = getParametro("zona");
if (paramZona && getZona(paramZona)) {
  zonaFiltro = paramZona;
  select.value = paramZona;
}

aplicarFiltro();

const param = getParametro("planta");
if (param && getPlanta(param)) {
  plantaActual = param;
  marcarActivo("#plantasGrid", param);
  mostrarDetalle(param);
}
