
export function formatoPrecio(n){ 
  return n.toLocaleString('es-CL'); 
}

function reglaIcono(cond, okText, noText, okIcon, noIcon){
  const color = cond ? 'text-success' : 'text-danger';
  const icon = cond ? okIcon : noIcon;
  const text = cond ? okText : noText;
  return `<p class="${color}"><i class="fas ${icon}"></i> ${text}</p>`;
}

export function cardTemplate(p){
  return `
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card border-0 shadow-sm">
      <img src="${p.src}" class="card-img-top" alt="${p.nombre}">
      <div class="card-body">
        <h6 class="card-title fw-semibold">${p.nombre}</h6>
        <p class="card-text text-muted small">${p.descripcion}</p>
        <p class="small"><i class="fas fa-map-marker-alt"></i> ${p.ubicacion}</p>
        <p class="small"><i class="fas fa-bed"></i> ${p.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${p.banos ?? p.baños ?? 1} Baños</p>
        <p><i class="fas fa-dollar-sign"></i> ${formatoPrecio(p.costo)}</p>
        ${reglaIcono(p.smoke, 'Permite fumar', 'No se permite fumar', 'fa-smoking', 'fa-smoking-ban')}
        ${reglaIcono(p.pets, 'Mascotas permitidas', 'No se permiten mascotas', 'fa-paw', 'fa-ban')}
      </div>
    </div>
  </div>`;
}

export function renderizar(lista, selector, limite = null){
  const cont = document.querySelector(selector);
  if(!cont) return;
  let html = "";
  const data = Array.isArray(lista) ? lista.slice(0, limite ?? lista.length) : [];
  for(const p of data){
    html += cardTemplate(p);
  }
  cont.innerHTML = html;
}
