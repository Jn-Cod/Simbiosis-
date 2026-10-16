// Utilidades compartidas entre páginas

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const getPolinizador = (id) => POLINIZADORES.find((p) => p.id === id);
const getPlanta = (id) => PLANTAS.find((p) => p.id === id);

function getParametro(nombre) {
  return new URLSearchParams(window.location.search).get(nombre);
}

/* Navegación móvil */
const navToggle = $("#navToggle");
const siteNav = $("#siteNav");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => siteNav.classList.toggle("abierto"));
  $$("#siteNav a").forEach((a) =>
    a.addEventListener("click", () => siteNav.classList.remove("abierto"))
  );
}

/* Tarjetas de especies */
function crearTarjeta(item, alElegir) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "species-card";
  btn.dataset.id = item.id;
  btn.innerHTML = `
    <img src="${item.img}" alt="${item.nombre}" loading="lazy" />
    <div class="card-body">
      <h3>${item.nombre}</h3>
      <span class="cientifico">${item.cientifico}</span>
      <p>${item.resumen}</p>
    </div>`;
  btn.addEventListener("click", () => alElegir(item.id));
  return btn;
}

function renderGrid(contenedor, items, alElegir) {
  const grid = $(contenedor);
  if (!grid) return;
  grid.innerHTML = "";
  items.forEach((item) => grid.appendChild(crearTarjeta(item, alElegir)));
}

/* Chips de vínculo entre especies (cruzan de página) */
function chipsPlantas(ids) {
  return ids
    .map((id) => getPlanta(id))
    .filter(Boolean)
    .map(
      (pl) =>
        `<a class="chip" href="plantas.html?planta=${pl.id}">
          <img src="${pl.img}" alt="" />${pl.nombre}
        </a>`
    )
    .join("");
}

function chipsPolinizadores(ids) {
  return ids
    .map((id) => getPolinizador(id))
    .filter(Boolean)
    .map(
      (po) =>
        `<a class="chip" href="polinizadores.html?polinizador=${po.id}">
          <img src="${po.img}" alt="" />${po.nombre}
        </a>`
    )
    .join("");
}

/* Marcar tarjeta activa en un grid */
function marcarActivo(gridSel, id) {
  $$(gridSel + " .species-card").forEach((c) => c.classList.remove("activo"));
  if (id) {
    const card = $(gridSel + ` .species-card[data-id="${id}"]`);
    if (card) card.classList.add("activo");
  }
}
