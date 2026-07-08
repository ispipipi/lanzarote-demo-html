const STORAGE_KEY = "lanzarote_state";
const DEMO_DATE = "2026-07-08";
const LAST_SEED_DATE = "2026-07-07";

const currencyFormatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

const products = [
  {
    id: "marraqueta",
    nombre: "Marraqueta Tradicional",
    recetaId: "MQ-001",
    rendimientoEsperado: 450,
    unidad: "unidades",
    precioUnitario: 790,
    descripcion: "Crujiente exterior, alta rotacion en mostrador y reparto temprano.",
    equipo: "Horno A",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACiPUi-zePRlohmIhiJfxbHHO5f4y-xEOXvMwKNjhuDW5vJ9B2ZB6ZEli3w6U0--diDLd85Zpu9UhQLFd0EYi68xAz3Dvavvb17dHNFVG21agEPfUY0PbdkSaf6bGmGJqFox9HgiHAmwxAtuNyEd8afbWZ6KTRYwER1BWQkLYiBqB6kR7t2UgIqqHJzKXTHW2eX7jods8JRLQCEKj3JmOaD58IAwQZy3xndQe8I8Wyve17Spnrg-FSmGtxZ80ZJm1G8vPPVwjiPpSm",
  },
  {
    id: "hallulla",
    nombre: "Hallulla Integral",
    recetaId: "HL-204",
    rendimientoEsperado: 320,
    unidad: "unidades",
    precioUnitario: 990,
    descripcion: "Blend integral para clientes retail y pedidos corporativos.",
    equipo: "Horno B",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtzUFq8mGgO79bFDEIdzo-YKo0v7j7Gnb-tzJJ1hOnc6vVAafcQ4fe1ngHX-TRBAD1hvMQdeK_Sa-lPe8OCPT292Y23MixmB6fq9E0pUVVD8VNyGc9KW-p16w9TsI5lUe1QtLRdWWOTouYo__-h_rjD0pU0tQJMD_ytVKJmKMPs0bt-tNIFz-K2aYLfLig6gKZUAyD-Hk5RMOvLDKD7IiwhWUKbbWcEZkSmBkMMTPgfOjguG6_ZEFPiyrdV_ZnZpyEXEPGy3IfFhCP",
  },
  {
    id: "baguette",
    nombre: "Baguette Rustica",
    recetaId: "BG-122",
    rendimientoEsperado: 180,
    unidad: "unidades",
    precioUnitario: 1490,
    descripcion: "Formato premium para restaurante y vitrina del local.",
    equipo: "Laminadora Norte",
    imagen: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "croissant",
    nombre: "Croissant Mantequilla",
    recetaId: "CR-018",
    rendimientoEsperado: 240,
    unidad: "unidades",
    precioUnitario: 1290,
    descripcion: "Laminado de alta demanda en delivery matinal.",
    equipo: "Horno C (Conveccion)",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCT4z5jaB-UcDKGCTSnVYPAkaDEKmwABsesrsnT3LkQnB0VQZRlw2eIez85TZ7Wn2FNg4l_Tg50JHGdOOaigof4skc1vPm_Jk9zWOeQ9ljMn3FoNvYADSYCD2YE3PFJr-gWQMlpFJVTTUV14ovoNNlj9ylpl6CnQJ8d0FV8w3e33E6V3Fy2l9pAkk_R7u3ADcn0Ec-Z_0ea0UuQEi7YSifWhxpiu27f_wxaUcpRQ-x06i_QYdKGuW8E_qfKT_puPrc7IiEwYEk3AobK",
  },
  {
    id: "campagne",
    nombre: "Campagne Masa Madre",
    recetaId: "CM-077",
    rendimientoEsperado: 120,
    unidad: "unidades",
    precioUnitario: 3890,
    descripcion: "Pan signature con ticket alto para retiro comercial.",
    equipo: "Fermentador 2",
    imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
];

const channelSeeds = [
  { id: "meson", nombre: "Meson (Local)", capacidadBase: 260 },
  { id: "retiro", nombre: "Retiro Comercial", capacidadBase: 220 },
  { id: "delivery", nombre: "Delivery / Flota", capacidadBase: 240 },
];

const paymentMethods = ["Efectivo", "POS", "Transferencia"];

const pageMeta = {
  dashboard: { href: "index.html", label: "Dashboard", icon: "dashboard" },
  production: { href: "production.html", label: "Producción", icon: "oven_gen" },
  distribution: { href: "distribution.html", label: "Distribución", icon: "local_shipping" },
  sales: { href: "sales.html", label: "Ventas", icon: "payments" },
};

const seedActions = [
  {
    type: "REGISTRAR_PRODUCCION",
    payload: {
      id: "seed-turno-1",
      fecha: LAST_SEED_DATE,
      turno: "Manana",
      productoId: "marraqueta",
      cantidadPlan: 450,
      cantidadReal: 442,
      merma: 8,
      notas: "Ajuste fino de horno A antes de apertura.",
    },
  },
  {
    type: "REGISTRAR_PRODUCCION",
    payload: {
      id: "seed-turno-2",
      fecha: LAST_SEED_DATE,
      turno: "Manana",
      productoId: "hallulla",
      cantidadPlan: 320,
      cantidadReal: 330,
      merma: 10,
      notas: "Sobreproduccion controlada para pedido retail.",
    },
  },
  {
    type: "REGISTRAR_PRODUCCION",
    payload: {
      id: "seed-turno-3",
      fecha: LAST_SEED_DATE,
      turno: "Manana",
      productoId: "baguette",
      cantidadPlan: 180,
      cantidadReal: 174,
      merma: 4,
      notas: "Lote corto por cambio de bandejas.",
    },
  },
  {
    type: "REGISTRAR_PRODUCCION",
    payload: {
      id: "seed-turno-4",
      fecha: LAST_SEED_DATE,
      turno: "Tarde",
      productoId: "croissant",
      cantidadPlan: 240,
      cantidadReal: 246,
      merma: 6,
      notas: "Turno tarde reforzo canal delivery.",
    },
  },
  {
    type: "REGISTRAR_PRODUCCION",
    payload: {
      id: "seed-turno-5",
      fecha: LAST_SEED_DATE,
      turno: "Tarde",
      productoId: "campagne",
      cantidadPlan: 120,
      cantidadReal: 118,
      merma: 2,
      notas: "Fermentacion estable dentro del rango.",
    },
  },
  { type: "ASIGNAR_A_CANAL", payload: { productoId: "marraqueta", canalId: "meson", cantidad: 120 } },
  { type: "ASIGNAR_A_CANAL", payload: { productoId: "marraqueta", canalId: "delivery", cantidad: 80 } },
  { type: "ASIGNAR_A_CANAL", payload: { productoId: "hallulla", canalId: "meson", cantidad: 80 } },
  { type: "ASIGNAR_A_CANAL", payload: { productoId: "hallulla", canalId: "retiro", cantidad: 90 } },
  { type: "ASIGNAR_A_CANAL", payload: { productoId: "baguette", canalId: "meson", cantidad: 60 } },
  { type: "ASIGNAR_A_CANAL", payload: { productoId: "croissant", canalId: "delivery", cantidad: 70 } },
  { type: "ASIGNAR_A_CANAL", payload: { productoId: "campagne", canalId: "retiro", cantidad: 24 } },
  { type: "FINALIZAR_ALOCACION" },
  {
    type: "REGISTRAR_VENTA",
    payload: {
      id: "sale-1",
      canalId: "meson",
      productoId: "marraqueta",
      cantidad: 65,
      medioPago: "Efectivo",
      monto: 51350,
      timestamp: "2026-07-07T08:10:00",
    },
  },
  {
    type: "REGISTRAR_VENTA",
    payload: {
      id: "sale-2",
      canalId: "delivery",
      productoId: "marraqueta",
      cantidad: 24,
      medioPago: "POS",
      monto: 18960,
      timestamp: "2026-07-07T09:15:00",
    },
  },
  {
    type: "REGISTRAR_VENTA",
    payload: {
      id: "sale-3",
      canalId: "retiro",
      productoId: "hallulla",
      cantidad: 38,
      medioPago: "Transferencia",
      monto: 37620,
      timestamp: "2026-07-07T10:45:00",
    },
  },
  {
    type: "REGISTRAR_VENTA",
    payload: {
      id: "sale-4",
      canalId: "meson",
      productoId: "baguette",
      cantidad: 18,
      medioPago: "POS",
      monto: 26820,
      timestamp: "2026-07-07T11:20:00",
    },
  },
  {
    type: "REGISTRAR_VENTA",
    payload: {
      id: "sale-5",
      canalId: "delivery",
      productoId: "croissant",
      cantidad: 20,
      medioPago: "POS",
      monto: 25800,
      timestamp: "2026-07-07T12:05:00",
    },
  },
];

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function nowIso() {
  return new Date().toISOString();
}

function getToday() {
  return DEMO_DATE;
}

function toPositiveNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function toInteger(value) {
  return Math.floor(toPositiveNumber(value));
}

function touchState(state) {
  return {
    ...state,
    updatedAt: nowIso(),
  };
}

function createBaseState() {
  return {
    productos: deepClone(products),
    turnos: [],
    stockTerminado: products.map((producto) => ({
      productoId: producto.id,
      cantidadDisponible: 0,
      cantidadAsignada: 0,
    })),
    canales: channelSeeds.map((canal) => ({
      ...canal,
      capacidadPct: 0,
      stock: [],
    })),
    ventas: [],
    asignacionesPendientes: [],
    slaCumplimiento: 100,
    alertas: [],
    updatedAt: nowIso(),
  };
}

function seedState() {
  return seedActions.reduce((currentState, action) => operationReducer(currentState, action), deriveState(createBaseState()));
}

function normalizeState(candidate) {
  const base = createBaseState();

  if (!candidate || typeof candidate !== "object") {
    return base;
  }

  return {
    ...base,
    ...candidate,
    productos: Array.isArray(candidate.productos) && candidate.productos.length ? candidate.productos : base.productos,
    turnos: Array.isArray(candidate.turnos) ? candidate.turnos : base.turnos,
    stockTerminado: Array.isArray(candidate.stockTerminado) ? candidate.stockTerminado : base.stockTerminado,
    canales: Array.isArray(candidate.canales) ? candidate.canales : base.canales,
    ventas: Array.isArray(candidate.ventas) ? candidate.ventas : base.ventas,
    asignacionesPendientes: Array.isArray(candidate.asignacionesPendientes) ? candidate.asignacionesPendientes : [],
    alertas: Array.isArray(candidate.alertas) ? candidate.alertas : [],
  };
}

function getState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const seeded = seedState();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      return seeded;
    }

    const parsed = JSON.parse(raw);
    return deriveState(normalizeState(parsed));
  } catch (error) {
    const seeded = seedState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }
}

function setState(newState) {
  const derived = deriveState(normalizeState(newState));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(derived));
  return derived;
}

function resetState() {
  return setState(seedState());
}

function getProductMap(state) {
  return state.productos.reduce((accumulator, producto) => {
    accumulator[producto.id] = producto;
    return accumulator;
  }, {});
}

function getPendingForProduct(state, productoId) {
  return state.asignacionesPendientes
    .filter((item) => item.productoId === productoId)
    .reduce((sum, item) => sum + item.cantidad, 0);
}

function upsertChannelStock(stock, productoId, updater) {
  const current = stock.find((item) => item.productoId === productoId) || { productoId, cantidad: 0 };
  const nextQuantity = Math.max(0, updater(current.cantidad));
  const rest = stock.filter((item) => item.productoId !== productoId);

  if (nextQuantity === 0) {
    return rest;
  }

  return [...rest, { productoId, cantidad: nextQuantity }].sort((a, b) => a.productoId.localeCompare(b.productoId));
}

function recalculateCapacities(canales) {
  return canales.map((canal) => {
    const total = canal.stock.reduce((sum, item) => sum + item.cantidad, 0);
    const capacidadPct = canal.capacidadBase ? Math.min(100, Math.round((total / canal.capacidadBase) * 100)) : 0;
    return { ...canal, capacidadPct };
  });
}

function calcularDelta(esperado, real) {
  const expectedValue = Number(esperado) || 0;
  const realValue = Number(real) || 0;
  const pct = expectedValue === 0 ? 0 : ((realValue - expectedValue) / expectedValue) * 100;

  if (pct < -2) {
    return {
      pct,
      estado: "alerta",
      label: "Alerta",
      colorClass: "text-error",
      fillClass: "bg-error",
      toneClass: "bg-error-container text-on-error-container",
    };
  }

  if (pct > 2) {
    return {
      pct,
      estado: "excedente",
      label: "Excedente",
      colorClass: "text-secondary",
      fillClass: "bg-secondary-container",
      toneClass: "bg-secondary-fixed text-on-secondary-fixed",
    };
  }

  return {
    pct,
    estado: "optimo",
    label: "Optimo",
    colorClass: "text-on-tertiary-container",
    fillClass: "bg-on-tertiary-container",
    toneClass: "bg-tertiary-fixed text-on-tertiary-fixed",
  };
}

function buildProductionTurn(payload, existingTurns) {
  const expected = toPositiveNumber(payload.cantidadPlan);
  const real = toPositiveNumber(payload.cantidadReal);
  const merma = Math.min(toPositiveNumber(payload.merma), real);
  const desviacionPct = expected === 0 ? 0 : ((real - expected) / expected) * 100;

  return {
    id: payload.id || `turno-${existingTurns.length + 1}`,
    fecha: payload.fecha || getToday(),
    turno: payload.turno || "Manana",
    productoId: payload.productoId,
    cantidadPlan: expected,
    cantidadReal: real,
    merma,
    desviacionPct,
    notas: payload.notas || "",
  };
}

function applyProduction(state, payload) {
  const nextTurn = buildProductionTurn(payload, state.turnos);
  const output = Math.max(0, nextTurn.cantidadReal - nextTurn.merma);

  return touchState({
    ...state,
    turnos: [...state.turnos, nextTurn],
    stockTerminado: state.stockTerminado.map((stock) =>
      stock.productoId === nextTurn.productoId
        ? { ...stock, cantidadDisponible: stock.cantidadDisponible + output }
        : stock,
    ),
  });
}

function applyPendingAllocation(state, payload) {
  const quantity = toInteger(payload.cantidad);
  if (quantity <= 0) {
    return state;
  }

  const stockRecord = state.stockTerminado.find((item) => item.productoId === payload.productoId);
  if (!stockRecord) {
    return state;
  }

  const pendingForProduct = getPendingForProduct(state, payload.productoId);
  const available = Math.max(0, stockRecord.cantidadDisponible - pendingForProduct);

  if (quantity > available) {
    return state;
  }

  const existing = state.asignacionesPendientes.find(
    (item) => item.productoId === payload.productoId && item.canalId === payload.canalId,
  );

  const asignacionesPendientes = existing
    ? state.asignacionesPendientes.map((item) =>
        item.productoId === payload.productoId && item.canalId === payload.canalId
          ? { ...item, cantidad: item.cantidad + quantity }
          : item,
      )
    : [
        ...state.asignacionesPendientes,
        {
          id: `pending-${state.asignacionesPendientes.length + 1}`,
          productoId: payload.productoId,
          canalId: payload.canalId,
          cantidad: quantity,
        },
      ];

  return touchState({
    ...state,
    asignacionesPendientes,
  });
}

function applyFinalizeAllocation(state) {
  if (!state.asignacionesPendientes.length) {
    return state;
  }

  const groupedByProduct = state.asignacionesPendientes.reduce((accumulator, item) => {
    accumulator[item.productoId] = (accumulator[item.productoId] || 0) + item.cantidad;
    return accumulator;
  }, {});

  const stockTerminado = state.stockTerminado.map((stock) => {
    const moved = groupedByProduct[stock.productoId] || 0;
    return moved
      ? {
          ...stock,
          cantidadDisponible: Math.max(0, stock.cantidadDisponible - moved),
          cantidadAsignada: stock.cantidadAsignada + moved,
        }
      : stock;
  });

  const canales = recalculateCapacities(
    state.canales.map((canal) => {
      const pendingItems = state.asignacionesPendientes.filter((item) => item.canalId === canal.id);
      const stock = pendingItems.reduce(
        (currentStock, item) => upsertChannelStock(currentStock, item.productoId, (amount) => amount + item.cantidad),
        canal.stock,
      );

      return { ...canal, stock };
    }),
  );

  return touchState({
    ...state,
    stockTerminado,
    canales,
    asignacionesPendientes: [],
  });
}

function applySale(state, payload) {
  const quantity = toInteger(payload.cantidad);
  if (quantity <= 0) {
    return state;
  }

  const producto = state.productos.find((item) => item.id === payload.productoId);
  const canal = state.canales.find((item) => item.id === payload.canalId);
  const stockCanal = canal && canal.stock.find((item) => item.productoId === payload.productoId);

  if (!producto || !canal || !stockCanal || quantity > stockCanal.cantidad) {
    return state;
  }

  const monto = toPositiveNumber(payload.monto) || quantity * producto.precioUnitario;

  const canales = recalculateCapacities(
    state.canales.map((item) =>
      item.id !== payload.canalId
        ? item
        : {
            ...item,
            stock: upsertChannelStock(item.stock, payload.productoId, (current) => current - quantity),
          },
    ),
  );

  const stockTerminado = state.stockTerminado.map((stock) =>
    stock.productoId !== payload.productoId
      ? stock
      : {
          ...stock,
          cantidadAsignada: Math.max(0, stock.cantidadAsignada - quantity),
        },
  );

  return touchState({
    ...state,
    canales,
    stockTerminado,
    ventas: [
      ...state.ventas,
      {
        id: payload.id || `venta-${state.ventas.length + 1}`,
        canalId: payload.canalId,
        productoId: payload.productoId,
        cantidad: quantity,
        monto,
        medioPago: payload.medioPago || paymentMethods[0],
        timestamp: payload.timestamp || nowIso(),
      },
    ],
  });
}

function deriveAlerts(state) {
  const eventTimestamp = state.updatedAt || nowIso();
  const productMap = getProductMap(state);

  const turnAlerts = state.turnos
    .filter((turno) => Math.abs(turno.desviacionPct) > 2)
    .map((turno) => ({
      id: `alert-turno-${turno.id}`,
      tipo: "produccion",
      mensaje: `${productMap[turno.productoId]?.nombre || "Producto"} ${
        turno.desviacionPct < 0 ? "quedo bajo" : "quedo sobre"
      } el rendimiento esperado en ${turno.turno.toLowerCase()}.`,
      severidad: turno.desviacionPct < 0 ? "alta" : "media",
      timestamp: turno.fecha,
    }));

  const capacityAlerts = state.canales
    .filter((canal) => canal.capacidadPct >= 90)
    .map((canal) => ({
      id: `alert-canal-${canal.id}`,
      tipo: "distribucion",
      mensaje: `${canal.nombre} esta operando al ${canal.capacidadPct}% de capacidad.`,
      severidad: canal.capacidadPct >= 100 ? "alta" : "media",
      timestamp: eventTimestamp,
    }));

  const pendingAlerts = state.asignacionesPendientes.length
    ? [
        {
          id: "alert-pending-allocation",
          tipo: "distribucion",
          mensaje: `Hay ${state.asignacionesPendientes.length} asignaciones pendientes por finalizar.`,
          severidad: "baja",
          timestamp: eventTimestamp,
        },
      ]
    : [];

  return [...turnAlerts, ...capacityAlerts, ...pendingAlerts];
}

function deriveSla(state, alerts) {
  const checks = Math.max(1, state.turnos.length + state.canales.length + state.ventas.length);
  const scoreFromAlerts = alerts.reduce((score, alert) => {
    if (alert.severidad === "alta") {
      return score - 8;
    }
    if (alert.severidad === "media") {
      return score - 4;
    }
    return score - 2;
  }, 100);
  const activityPenalty = state.ventas.length === 0 ? 4 : 0;
  return Math.max(72, Math.min(100, Math.round(scoreFromAlerts - activityPenalty + Math.min(6, checks / 3))));
}

function deriveState(state) {
  const canales = recalculateCapacities(state.canales);
  const nextState = { ...state, canales };
  const alertas = deriveAlerts(nextState);
  const slaCumplimiento = deriveSla(nextState, alertas);
  return { ...nextState, alertas, slaCumplimiento };
}

function operationReducer(state, action) {
  switch (action.type) {
    case "REGISTRAR_PRODUCCION":
      return deriveState(applyProduction(state, action.payload));
    case "ASIGNAR_A_CANAL":
      return deriveState(applyPendingAllocation(state, action.payload));
    case "FINALIZAR_ALOCACION":
      return deriveState(applyFinalizeAllocation(state));
    case "REGISTRAR_VENTA":
      return deriveState(applySale(state, action.payload));
    default:
      return state;
  }
}

function registrarProduccionBatch(entries) {
  const nextState = entries.reduce(
    (currentState, entry) => operationReducer(currentState, { type: "REGISTRAR_PRODUCCION", payload: entry }),
    getState(),
  );
  return setState(nextState);
}

function asignarACanal(payload) {
  const nextState = operationReducer(getState(), { type: "ASIGNAR_A_CANAL", payload });
  return setState(nextState);
}

function finalizarAlocacion() {
  const nextState = operationReducer(getState(), { type: "FINALIZAR_ALOCACION" });
  return setState(nextState);
}

function registrarVenta(payload) {
  const nextState = operationReducer(getState(), { type: "REGISTRAR_VENTA", payload });
  return setState(nextState);
}

function buildMetrics(state) {
  const totalProduced = state.turnos.reduce((sum, turno) => sum + Math.max(0, turno.cantidadReal - turno.merma), 0);
  const totalPlanned = state.turnos.reduce((sum, turno) => sum + turno.cantidadPlan, 0);
  const totalWaste = state.turnos.reduce((sum, turno) => sum + turno.merma, 0);
  const assignedUnits = state.stockTerminado.reduce((sum, item) => sum + item.cantidadAsignada, 0);
  const availableUnits = state.stockTerminado.reduce((sum, item) => sum + item.cantidadDisponible, 0);
  const totalSoldUnits = state.ventas.reduce((sum, venta) => sum + venta.cantidad, 0);
  const totalSoldAmount = state.ventas.reduce((sum, venta) => sum + venta.monto, 0);
  const unsoldUnits = state.canales.reduce(
    (sum, canal) => sum + canal.stock.reduce((channelSum, item) => channelSum + item.cantidad, 0),
    0,
  );
  const conciliationGap = Math.abs(totalProduced - (availableUnits + unsoldUnits + totalSoldUnits));
  const conciliationPct = totalProduced === 0 ? 100 : Math.max(0, Math.round(100 - (conciliationGap / totalProduced) * 100));
  const productionAccuracy = totalPlanned === 0 ? 100 : Math.min(100, Math.round((totalProduced / totalPlanned) * 100));

  const soldByChannel = state.canales.reduce((accumulator, canal) => {
    const channelSales = state.ventas.filter((venta) => venta.canalId === canal.id);
    accumulator[canal.id] = {
      units: channelSales.reduce((sum, venta) => sum + venta.cantidad, 0),
      revenue: channelSales.reduce((sum, venta) => sum + venta.monto, 0),
    };
    return accumulator;
  }, {});

  const productMap = getProductMap(state);
  const recentConciliations = [...state.turnos]
    .slice(-5)
    .reverse()
    .map((turno) => {
      const delta = calcularDelta(turno.cantidadPlan, turno.cantidadReal);
      return {
        id: turno.id,
        producto: productMap[turno.productoId]?.nombre || turno.productoId,
        turno: turno.turno,
        esperado: turno.cantidadPlan,
        real: turno.cantidadReal,
        estado: delta.estado === "alerta" ? "Revision" : "OK",
        variacion: `${turno.desviacionPct > 0 ? "+" : ""}${turno.desviacionPct.toFixed(1)}%`,
      };
    });

  return {
    totalProduced,
    totalPlanned,
    totalWaste,
    totalSoldUnits,
    totalSoldAmount,
    assignedUnits,
    availableUnits,
    unsoldUnits,
    conciliationPct,
    productionAccuracy,
    soldByChannel,
    recentConciliations,
    statusLabel: state.alertas.some((alert) => alert.severidad === "alta") ? "Hay Desvios" : "Todo Cuadra",
    formattedSoldAmount: currencyFormatter.format(totalSoldAmount),
    noVendidoTotal: totalWaste + unsoldUnits,
  };
}

function recalcularDashboard() {
  const state = getState();
  return {
    state,
    metrics: buildMetrics(state),
  };
}

function formatCurrency(value) {
  return currencyFormatter.format(value || 0);
}

function ensureUiChrome() {
  let toastRoot = document.getElementById("demo-toast-root");
  if (!toastRoot) {
    toastRoot = document.createElement("div");
    toastRoot.id = "demo-toast-root";
    toastRoot.className = "fixed top-5 right-5 z-[150] flex w-[360px] max-w-[calc(100vw-32px)] flex-col gap-3 pointer-events-none";
    document.body.appendChild(toastRoot);
  }

  let modalRoot = document.getElementById("demo-modal-root");
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    modalRoot.id = "demo-modal-root";
    modalRoot.className = "fixed inset-0 z-[160] hidden items-center justify-center bg-primary/35 p-6 backdrop-blur-sm";
    modalRoot.innerHTML = `
      <div class="w-full max-w-2xl rounded-2xl border border-outline-variant bg-white shadow-2xl">
        <div class="flex items-start justify-between gap-4 border-b border-outline-variant px-6 py-5">
          <div>
            <p class="text-xs font-label-caps uppercase tracking-widest text-on-surface-variant" id="demo-modal-kicker">Demo Action</p>
            <h3 class="mt-2 font-headline-md text-headline-md text-primary" id="demo-modal-title"></h3>
          </div>
          <button class="rounded-lg border border-outline-variant p-2 text-on-surface-variant transition-colors hover:bg-surface-container" id="demo-modal-close" type="button">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="px-6 py-5 text-sm text-on-surface-variant" id="demo-modal-body"></div>
        <div class="flex items-center justify-end gap-3 border-t border-outline-variant px-6 py-4" id="demo-modal-actions"></div>
      </div>
    `;
    document.body.appendChild(modalRoot);
  }

  const closeButton = document.getElementById("demo-modal-close");
  if (closeButton && !closeButton.dataset.bound) {
    closeButton.dataset.bound = "true";
    closeButton.addEventListener("click", closeModal);
  }

  if (!modalRoot.dataset.bound) {
    modalRoot.dataset.bound = "true";
    modalRoot.addEventListener("click", (event) => {
      if (event.target === modalRoot) {
        closeModal();
      }
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderSidebar(activePage) {
  const navItems = Object.entries(pageMeta)
    .map(([key, item]) => {
      const active = key === activePage;
      const classes = active
        ? "flex items-center gap-3 px-4 py-3 text-primary font-bold border-r-4 border-secondary bg-surface-container-low transition-colors rounded-lg"
        : "flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg";

      return `
        <a class="${classes}" href="${item.href}">
          <span class="material-symbols-outlined">${item.icon}</span>
          <span class="font-body-sm">${item.label}</span>
        </a>
      `;
    })
    .join("");

  return `
    <div class="mb-10 px-4">
      <h1 class="font-headline-md text-headline-md font-bold text-primary">Lanzarote</h1>
      <p class="font-body-sm text-on-primary-container">Comando Operacional</p>
    </div>
    <nav class="flex-1 space-y-1">
      ${navItems}
    </nav>
    <div class="pt-6 mt-6 border-t border-outline-variant space-y-1">
      <a class="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg" href="dashboard.html">
        <span class="material-symbols-outlined">query_stats</span>
        <span class="font-body-sm">Auditoría</span>
      </a>
      <button
        class="flex w-full items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg text-left"
        id="sidebar-reset-demo"
        type="button"
      >
        <span class="material-symbols-outlined">restart_alt</span>
        <span class="font-body-sm">Reiniciar Demo</span>
      </button>
      <div class="mt-4 px-4 flex items-center gap-3">
        <div class="w-8 h-8 rounded-full bg-surface-dim overflow-hidden">
          <img
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNAP0nJNLdVmzt3LzvmxqaQAHKixtFrll3BGFhdvZk_sqMoW2gGo5SY8Ojhm5xmed6frQ0_VlHSgdWwZecBtNw8yhlUfGb6njvAHK79XMvHTNJO_VEbFBsv6MexH6URWp6BlxM_uFKlT65hpspNUe4fbIxOuuJOsbI0NVsyWH6sqh59umfOYN5Xb4-rmuO48_Udwv7Qv1Z_LIux-f5cA4pB5GyRGSy4USxJvFJWO1pJuXQJ9OlNdBNfmihC9HRpTpn0BmPZjgj8uEX"
            alt="Encargado de Panadería"
          />
        </div>
        <div class="overflow-hidden">
          <p class="text-xs font-bold truncate">Encargado de Panadería</p>
          <p class="text-[10px] text-on-surface-variant truncate">Turno Manana</p>
        </div>
      </div>
    </div>
  `;
}

function renderHeader(options) {
  const badge = options.badge
    ? `
      <div class="flex items-center gap-2 bg-surface-container px-3 py-1 rounded-full">
        <span class="material-symbols-outlined text-sm">${options.badgeIcon || "schedule"}</span>
        <span class="text-xs font-bold text-on-surface">${escapeHtml(options.badge)}</span>
      </div>
    `
    : "";

  const secondaryActions = (options.secondaryActions || [])
    .map(
      (action) => `
        <button
          class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors"
          id="${escapeHtml(action.id)}"
          type="button"
          title="${escapeHtml(action.label)}"
        >${escapeHtml(action.icon)}</button>
      `,
    )
    .join("");

  const primaryAction = options.primaryAction
    ? `
      <button
        class="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-caps text-xs flex items-center gap-2 hover:scale-[0.98] transition-transform"
        id="${escapeHtml(options.primaryAction.id)}"
        type="button"
      >
        <span class="material-symbols-outlined text-sm">${escapeHtml(options.primaryAction.icon)}</span>
        ${escapeHtml(options.primaryAction.label)}
      </button>
    `
    : "";

  return `
    <div class="flex items-center gap-4">
      <h2 class="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">${escapeHtml(options.eyebrow)}</h2>
      <div class="h-4 w-[1px] bg-outline-variant"></div>
      ${badge}
    </div>
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-4 text-on-surface-variant">
        ${secondaryActions}
      </div>
      ${primaryAction}
    </div>
  `;
}

function mountShell(options) {
  ensureUiChrome();
  const sidebar = document.getElementById("sidebar");
  const header = document.getElementById("topbar");
  const pageTitle = document.getElementById("page-title");

  if (sidebar) {
    sidebar.innerHTML = renderSidebar(options.activePage);
  }

  if (header) {
    header.innerHTML = renderHeader(options.header);
  }

  if (pageTitle) {
    pageTitle.textContent = options.title || "Lanzarote";
  }

  const resetButton = document.getElementById("sidebar-reset-demo");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      resetState();
      window.location.reload();
    });
  }
}

function showToast(message, tone) {
  ensureUiChrome();
  const palette = {
    info: "border-secondary/20 bg-white text-on-surface",
    success: "border-on-tertiary-container/20 bg-white text-on-surface",
    warn: "border-error/20 bg-white text-on-surface",
  };
  const iconMap = {
    info: "info",
    success: "check_circle",
    warn: "warning",
  };
  const root = document.getElementById("demo-toast-root");
  const item = document.createElement("div");
  item.className = `pointer-events-auto rounded-2xl border px-4 py-3 shadow-xl transition-all ${palette[tone || "info"]}`;
  item.innerHTML = `
    <div class="flex items-start gap-3">
      <span class="material-symbols-outlined ${tone === "warn" ? "text-error" : tone === "success" ? "text-on-tertiary-container" : "text-secondary"}">${iconMap[tone || "info"]}</span>
      <div class="flex-1">
        <p class="text-xs font-label-caps uppercase tracking-widest text-on-surface-variant">Demo feedback</p>
        <p class="mt-1 text-sm text-on-surface">${escapeHtml(message)}</p>
      </div>
    </div>
  `;
  root.appendChild(item);
  window.setTimeout(() => {
    item.remove();
  }, 2600);
}

function openModal(options) {
  ensureUiChrome();
  const root = document.getElementById("demo-modal-root");
  const kicker = document.getElementById("demo-modal-kicker");
  const title = document.getElementById("demo-modal-title");
  const body = document.getElementById("demo-modal-body");
  const actions = document.getElementById("demo-modal-actions");

  kicker.textContent = options.kicker || "Demo Action";
  title.textContent = options.title || "Detalle";
  body.innerHTML = options.body || "";
  actions.innerHTML = (options.actions || [])
    .map(
      (action) => `
        <button
          class="${action.className || "rounded-lg border border-outline-variant px-4 py-2 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container"}"
          id="${escapeHtml(action.id)}"
          type="button"
        >${escapeHtml(action.label)}</button>
      `,
    )
    .join("");

  root.classList.remove("hidden");
  root.classList.add("flex");
}

function closeModal() {
  const root = document.getElementById("demo-modal-root");
  if (!root) {
    return;
  }
  root.classList.add("hidden");
  root.classList.remove("flex");
}

function channelBadge(channelId) {
  if (channelId === "meson") {
    return { label: "Front Store", className: "bg-on-tertiary-container text-white" };
  }
  if (channelId === "retiro") {
    return { label: "Wholesale", className: "bg-secondary text-white" };
  }
  return { label: "Route", className: "bg-primary text-white" };
}

window.LanzaroteState = {
  STORAGE_KEY,
  DEMO_DATE,
  getToday,
  getState,
  setState,
  seedState,
  resetState,
  calcularDelta,
  recalcularDashboard,
  registrarProduccionBatch,
  asignarACanal,
  finalizarAlocacion,
  registrarVenta,
  buildMetrics,
  formatCurrency,
  getProductMap,
  renderSidebar,
  renderHeader,
  mountShell,
  paymentMethods,
  pageMeta,
  products,
  channelSeeds,
  escapeHtml,
  getPendingForProduct,
  channelBadge,
  ensureUiChrome,
  showToast,
  openModal,
  closeModal,
};
