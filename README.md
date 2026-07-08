# Lanzarote Demo HTML

Demo operacional de panaderia construida como HTML estatico multiarchivo, usando Tailwind por CDN, JavaScript vanilla y `localStorage`.

## Archivos

- `index.html`: dashboard principal
- `dashboard.html`: alias simple al dashboard
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
2. Asignar stock en `distribution.html`
3. Registrar ventas en `sales.html`
4. Revisar KPIs y alertas en `index.html`

## Notas

- No requiere build step.
- No requiere dependencias nuevas.
- La persistencia vive en `localStorage` bajo la clave `lanzarote_state`.
- El boton `Reset Demo` reinicia los datos precargados.
