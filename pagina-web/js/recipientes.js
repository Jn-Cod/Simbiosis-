// Página de donación de recipientes reciclables

function renderRecipientes() {
  $("#contenedoresLista").innerHTML = CONTENEDORES.map(
    (c) => `<li><strong>${c.nombre}</strong><span>Usos en el jardín: ${c.usos}</span></li>`
  ).join("");

  $("#selectTipo").innerHTML =
    `<option value="">Seleccione un tipo</option>` +
    CONTENEDORES.map((c) => `<option value="${c.id}">${c.nombre}</option>`).join("");

  $("#selectZona").innerHTML =
    `<option value="">Seleccione una zona</option>` +
    ZONAS.map((z) => `<option value="${z.nombre}">${z.nombre}</option>`).join("");
}

function manejarFormulario(e) {
  e.preventDefault();
  const form = e.target;
  const msg = $("#formMsg");
  const datos = new FormData(form);
  const nombre = (datos.get("nombre") || "").toString().trim();
  const correo = (datos.get("correo") || "").toString().trim();
  const tipo = datos.get("tipo");
  const cantidad = Number(datos.get("cantidad"));
  const zona = datos.get("zona");

  if (!nombre || !correo || !tipo || !cantidad || !zona) {
    msg.textContent = "Completa todos los campos obligatorios.";
    msg.className = "form-msg error";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    msg.textContent = "Ingresa un correo electrónico válido.";
    msg.className = "form-msg error";
    return;
  }

  const tipoInfo = CONTENEDORES.find((c) => c.id === tipo);
  const registro = {
    nombre,
    correo,
    tipo: tipoInfo ? tipoInfo.nombre : tipo,
    cantidad,
    zona,
    fecha: new Date().toISOString(),
  };

  const guardadas = JSON.parse(localStorage.getItem("donacionesRecipientes") || "[]");
  guardadas.push(registro);
  localStorage.setItem("donacionesRecipientes", JSON.stringify(guardadas));

  form.reset();
  msg.textContent = `Gracias, ${nombre}. Se registraron ${cantidad} unidades de ${registro.tipo} para la zona de ${zona}. Un coordinador local te contactará.`;
  msg.className = "form-msg exito";
}

renderRecipientes();
$("#formRecipientes").addEventListener("submit", manejarFormulario);
