# Lanzarote Demo HTML

Demo operacional de panaderia construida como HTML estatico multiarchivo, usando Tailwind por CDN, JavaScript vanilla y `localStorage`.

## Archivos

- `index.html`: dashboard principal
- `dashboard.html`: alias simple al dashboard
- `insumos.html`: compras, recepción y control de inventario
- `production.html`: registro de produccion por turno
- `distribution.html`: asignacion de stock terminado a canales
- `sales.html`: registro de ventas por canal
- `state.js`: estado compartido, seed y logica de conciliacion

## Uso

```bash
cd lanzarote-demo-html
python3 -m http.server 8000
```

Luego abre:

- `http://127.0.0.1:8000/index.html`

## Flujo

1. Registrar un turno en `production.html`
2. Registrar una compra en `insumos.html`
3. Validar la recepción física y dar alta a inventario
4. Abrir turno y crear una orden en `production.html`
5. Registrar el consumo real por orden
6. Cerrar la orden para dar alta al producto terminado
7. Asignar stock en `distribution.html`
8. Registrar ventas en `sales.html`
9. Revisar KPIs y alertas en `index.html`

## Notas

- No requiere build step.
- No requiere dependencias nuevas.
- La persistencia vive en `localStorage` bajo la clave `lanzarote_state`.
- El boton `Reset Demo` reinicia los datos precargados.
