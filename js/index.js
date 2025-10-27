
import { renderizar } from './render.js';
import { propiedades_venta } from './data-venta.js';
import { propiedades_alquiler } from './data-alquiler.js';

renderizar(propiedades_venta, '#grid-venta', 3);
renderizar(propiedades_alquiler, '#grid-alquiler', 3);
