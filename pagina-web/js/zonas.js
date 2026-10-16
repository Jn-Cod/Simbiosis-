// Página de zonas de impacto: mapa real de Nicaragua y lista de progreso

const colorPorNivel = { alto: "#2e7d32", medio: "#f9a825", bajo: "#c62828" };
const centroNicaragua = [12.8654, -85.2072];

let mapa = null;
const marcadores = {};

function radioZona(z) {
  return Math.max(7, Math.min(20, 6 + z.jardines / 4));
}

function popupZona(z) {
  const color = colorPorNivel[z.nivel] || "#2e7d32";
  const urlMapa = `https://www.google.com/maps/search/?api=1&query=${z.lat},${z.lng}`;
  return `
    <div class="popup-zona">
      <h3>${z.nombre}</h3>
      <span class="badge ${z.nivel}">Impacto ${z.nivel}</span>
      <p class="popup-meta">${z.jardines} jardines establecidos</p>
      <p class="popup-detalle">${z.detalle}</p>
      <div class="progreso-fila">
        <div class="progreso-barra"><i style="width:${z.progreso}%;background:${color}"></i></div>
        <span class="progreso-valor">${z.progreso}%</span>
      </div>
      <a class="popup-enlace" href="plantas.html?zona=${z.id}">Ver plantas recomendadas</a>
      <a class="popup-enlace" href="${urlMapa}" target="_blank" rel="noopener">Abrir en Google Maps</a>
    </div>`;
}

function renderMapa() {
  const cont = document.getElementById("mapaNicaragua");
  if (!cont) return;
  if (typeof L === "undefined") {
    cont.innerHTML =
      '<p class="mapa-error">No se pudo cargar el mapa interactivo. Verifica tu conexión a internet.</p>';
    return;
  }

  mapa = L.map(cont, { scrollWheelZoom: false }).setView(centroNicaragua, 8);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(mapa);

  ZONAS.forEach((z) => {
    const marcador = L.circleMarker([z.lat, z.lng], {
      radius: radioZona(z),
      color: "#ffffff",
      weight: 1.5,
      fillColor: colorPorNivel[z.nivel] || "#2e7d32",
      fillOpacity: 0.85,
    }).addTo(mapa);

    marcador.bindPopup(popupZona(z));
    marcador.bindTooltip(z.nombre, { direction: "top", offset: [0, -4] });
    marcador.on("click", () => resaltarZona(z.id));
    marcadores[z.id] = marcador;
  });

  mapa.fitBounds(
    L.latLngBounds(ZONAS.map((z) => [z.lat, z.lng])),
    { padding: [40, 40] }
  );
}

function renderZonas() {
  $("#zonasLista").innerHTML = ZONAS.map(
    (z) => `
    <article class="zona-item ${z.nivel}" id="zona-${z.id}" data-zona-id="${z.id}" role="button" tabindex="0" aria-label="Centrar ${z.nombre} en el mapa">
      <div class="zona-top">
        <h3>${z.nombre}</h3>
        <span class="badge ${z.nivel}">Impacto ${z.nivel}</span>
      </div>
      <p class="zona-meta">${z.jardines} jardines establecidos</p>
      <p class="zona-detalle">${z.detalle}</p>
      <div class="progreso-fila">
        <div class="progreso-barra"><i style="width: ${z.progreso}%"></i></div>
        <span class="progreso-valor">${z.progreso}%</span>
      </div>
      <a class="zona-enlace" href="plantas.html?zona=${z.id}">Ver plantas recomendadas para ${z.nombre} →</a>
    </article>`
  ).join("");

  $$(".zona-enlace").forEach((a) =>
    a.addEventListener("click", (e) => e.stopPropagation())
  );

  $$(".zona-item").forEach((el) => {
    const id = Number(el.dataset.zonaId);
    el.addEventListener("click", () => enfocarZona(id));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        enfocarZona(id);
      }
    });
  });
}

function enfocarZona(id) {
  const z = ZONAS.find((x) => x.id === id);
  const marcador = marcadores[id];
  if (!z || !marcador || !mapa) return;
  mapa.setView([z.lat, z.lng], 11, { animate: true });
  marcador.openPopup();
  resaltarZona(id, false);
}

function resaltarZona(id, hacerScroll = true) {
  $$(".zona-item").forEach((el) => el.classList.remove("resaltado"));
  const item = document.getElementById(`zona-${id}`);
  if (!item) return;
  item.classList.add("resaltado");
  if (hacerScroll) item.scrollIntoView({ behavior: "smooth", block: "center" });
}

renderMapa();
renderZonas();
