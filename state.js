const STORAGE_KEY = "lanzarote_state";
const DEMO_DATE = "2026-07-08";
const LAST_SEED_DATE = "2026-07-07";

const currencyFormatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

const dateFormatter = new Intl.DateTimeFormat("es-CL", {
  day: "2-digit",
  month: "short",
});

const paymentMethods = ["Efectivo", "POS", "Transferencia"];
const commercialPaymentStatuses = ["Pagado", "Pendiente", "Vencido"];
const deliveryStatuses = ["Pendiente de armar", "Cargada", "En Ruta", "Entregada"];

const products = [
  {
    id: "marraqueta",
    nombre: "Marraqueta Tradicional",
    recetaId: "MQ-001",
    rendimientoEsperado: 450,
    toleranciaPct: 3,
    unidad: "unidades",
    precioUnitario: 790,
    descripcion: "Alta rotacion de mostrador y despacho temprano.",
    equipo: "Horno A",
    recetaInsumos: [
      { insumoId: "harina", cantidad: 54 },
      { insumoId: "levadura", cantidad: 1.4 },
      { insumoId: "sal", cantidad: 0.8 },
    ],
  },
  {
    id: "hallulla",
    nombre: "Hallulla Especial",
    recetaId: "HL-204",
    rendimientoEsperado: 320,
    toleranciaPct: 4,
    unidad: "unidades",
    precioUnitario: 990,
    descripcion: "Formato retail con buena salida en retiro comercial.",
    equipo: "Horno B",
    recetaInsumos: [
      { insumoId: "harina", cantidad: 43 },
      { insumoId: "levadura", cantidad: 1.1 },
      { insumoId: "sal", cantidad: 0.7 },
      { insumoId: "azucar", cantidad: 0.6 },
    ],
  },
  {
    id: "baguette",
    nombre: "Baguette Tradicional",
    recetaId: "BG-122",
    rendimientoEsperado: 180,
    toleranciaPct: 3,
    unidad: "unidades",
    precioUnitario: 1490,
    descripcion: "Pan premium para cafeterias, hoteleria y vitrina.",
    equipo: "Laminadora Norte",
    recetaInsumos: [
      { insumoId: "harina", cantidad: 33 },
      { insumoId: "levadura", cantidad: 0.9 },
      { insumoId: "sal", cantidad: 0.5 },
    ],
  },
  {
    id: "croissant",
    nombre: "Croissant Mantequilla",
    recetaId: "CR-018",
    rendimientoEsperado: 240,
    toleranciaPct: 5,
    unidad: "unidades",
    precioUnitario: 1290,
    descripcion: "Laminado de alta demanda para delivery matinal.",
    equipo: "Horno C",
    recetaInsumos: [
      { insumoId: "harina", cantidad: 28 },
      { insumoId: "levadura", cantidad: 0.8 },
      { insumoId: "azucar", cantidad: 2.4 },
      { insumoId: "sal", cantidad: 0.4 },
    ],
  },
  {
    id: "campagne",
    nombre: "Focaccia Rosmarino",
    recetaId: "FC-077",
    rendimientoEsperado: 120,
    toleranciaPct: 4,
    unidad: "unidades",
    precioUnitario: 3890,
    descripcion: "Ticket alto para retiro comercial y hoteleria.",
    equipo: "Fermentador 2",
    recetaInsumos: [
      { insumoId: "harina", cantidad: 24 },
      { insumoId: "levadura", cantidad: 0.7 },
      { insumoId: "sal", cantidad: 0.6 },
      { insumoId: "azucar", cantidad: 0.3 },
    ],
  },
];

const channelSeeds = [
  { id: "meson", nombre: "Mesón", capacidadBase: 260 },
  { id: "retiro", nombre: "Retiro Comercial", capacidadBase: 220 },
  { id: "delivery", nombre: "Delivery", capacidadBase: 240 },
];

const insumoSeeds = [
  {
    id: "harina",
    nombre: "Harina Refinada",
    unidad: "kg",
    capacidad: 500,
    minimo: 150,
    stock: 0,
    proveedorHabitual: "Molinos del Sur S.A.",
    precioReferencia: 920,
  },
  {
    id: "azucar",
    nombre: "Azúcar Morena",
    unidad: "kg",
    capacidad: 120,
    minimo: 25,
    stock: 0,
    proveedorHabitual: "Distribuidora Central",
    precioReferencia: 1180,
  },
  {
    id: "levadura",
    nombre: "Levadura Activa",
    unidad: "kg",
    capacidad: 40,
    minimo: 8,
    stock: 0,
    proveedorHabitual: "Importaciones Bio",
    precioReferencia: 5600,
  },
  {
    id: "sal",
    nombre: "Sal Industrial",
    unidad: "kg",
    capacidad: 30,
    minimo: 6,
    stock: 0,
    proveedorHabitual: "Distribuidora Central",
    precioReferencia: 620,
  },
];

const commercialCustomers = [
  { id: "aromos", nombre: "Minimarket Los Aromos", saldo: 0, diasVencimiento: 0 },
  { id: "rincon", nombre: "Café Rincón del Centro", saldo: 184000, diasVencimiento: 9 },
  { id: "forestalsur", nombre: "Casino Empresa ForestalSur", saldo: 415000, diasVencimiento: 34 },
  { id: "teresa", nombre: "Colegio Santa Teresa", saldo: 286000, diasVencimiento: 18 },
  { id: "alerces", nombre: "Hotel Boutique Los Alerces", saldo: 0, diasVencimiento: 0 },
];

const pageMeta = {
  dashboard: { href: "index.html", label: "Dashboard", icon: "dashboard" },
  insumos: { href: "insumos.html", label: "Inventarios", icon: "inventory_2" },
  recetas: { href: "recetas.html", label: "Recetas", icon: "menu_book" },
  production: { href: "production.html", label: "Producción", icon: "bakery_dining" },
  distribution: { href: "distribution.html", label: "Distribución", icon: "local_shipping" },
  sales: { href: "sales.html", label: "Ventas", icon: "payments" },
  config: { href: "config.html", label: "Configuración", icon: "tune" },
};

const BRAND_COMPANY = "";
const BRAND_SOLUTION = "Panadator";

const seedActions = [
  {
    type: "REGISTRAR_COMPRA_INSUMO",
    payload: {
      id: "purchase-1",
      fecha: "2026-07-06",
      proveedor: "Molinos del Sur S.A.",
      insumoId: "harina",
      cantidad: 290,
      precioUnitario: 920,
      documento: "FAC-10081",
      autoRecibir: true,
    },
  },
  {
    type: "REGISTRAR_COMPRA_INSUMO",
    payload: {
      id: "purchase-2",
      fecha: "2026-07-06",
      proveedor: "Distribuidora Central",
      insumoId: "azucar",
      cantidad: 58,
      precioUnitario: 1180,
      documento: "FAC-22014",
      autoRecibir: true,
    },
  },
  {
    type: "REGISTRAR_COMPRA_INSUMO",
    payload: {
      id: "purchase-3",
      fecha: "2026-07-06",
      proveedor: "Importaciones Bio",
      insumoId: "levadura",
      cantidad: 19,
      precioUnitario: 5600,
      documento: "FAC-88101",
      autoRecibir: true,
    },
  },
  {
    type: "REGISTRAR_COMPRA_INSUMO",
    payload: {
      id: "purchase-4",
      fecha: "2026-07-06",
      proveedor: "Distribuidora Central",
      insumoId: "sal",
      cantidad: 14,
      precioUnitario: 620,
      documento: "FAC-22015",
      autoRecibir: true,
    },
  },
  {
    type: "REGISTRAR_PRODUCCION",
    payload: {
      id: "seed-turno-1",
      fecha: LAST_SEED_DATE,
      turno: "Mañana",
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
      turno: "Mañana",
      productoId: "hallulla",
      cantidadPlan: 320,
      cantidadReal: 330,
      merma: 10,
      notas: "Sobreproducción controlada para pedidos retail.",
    },
  },
  {
    type: "REGISTRAR_PRODUCCION",
    payload: {
      id: "seed-turno-3",
      fecha: LAST_SEED_DATE,
      turno: "Mañana",
      productoId: "baguette",
      cantidadPlan: 180,
      cantidadReal: 174,
      merma: 4,
      notas: "Ajuste de bandejas antes de vitrina premium.",
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
      notas: "Refuerzo para delivery de media tarde.",
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
      notas: "Salida premium estable.",
    },
  },
  { type: "ASIGNAR_A_CANAL", payload: { productoId: "marraqueta", canalId: "meson", cantidad: 120 } },
  { type: "ASIGNAR_A_CANAL", payload: { productoId: "hallulla", canalId: "meson", cantidad: 70 } },
  { type: "ASIGNAR_A_CANAL", payload: { productoId: "baguette", canalId: "meson", cantidad: 45 } },
  { type: "ASIGNAR_A_CANAL", payload: { productoId: "hallulla", canalId: "retiro", cantidad: 88 } },
  { type: "ASIGNAR_A_CANAL", payload: { productoId: "campagne", canalId: "retiro", cantidad: 24 } },
  { type: "FINALIZAR_ALOCACION" },
  {
    type: "CREAR_PEDIDO_DELIVERY",
    payload: {
      id: "delivery-1",
      productoId: "croissant",
      cantidad: 60,
      cliente: "Café Rincón del Centro",
      ruta: "Centro - Costanera",
      vehiculo: "Furgón LG-21",
      chofer: "Rafael Muñoz",
      etaMin: 45,
      paradasTotales: 4,
      estado: "En Ruta",
      paradasCompletadas: 2,
      cargaCerrada: true,
    },
  },
  {
    type: "CREAR_PEDIDO_DELIVERY",
    payload: {
      id: "delivery-2",
      productoId: "marraqueta",
      cantidad: 42,
      cliente: "Hotel Boutique Los Alerces",
      ruta: "Hotelera Oriente",
      vehiculo: "Camión JQ-88",
      chofer: "Valentina Rojas",
      etaMin: 70,
      paradasTotales: 5,
      estado: "Cargada",
      paradasCompletadas: 0,
      cargaCerrada: false,
    },
  },
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
      estadoPago: "Pagado",
    },
  },
  {
    type: "REGISTRAR_VENTA",
    payload: {
      id: "sale-2",
      canalId: "delivery",
      productoId: "croissant",
      cantidad: 18,
      medioPago: "POS",
      monto: 23220,
      timestamp: "2026-07-07T09:15:00",
      estadoPago: "Pagado",
    },
  },
  {
    type: "REGISTRAR_VENTA",
    payload: {
      id: "sale-3",
      canalId: "retiro",
      productoId: "hallulla",
      cantidad: 36,
      medioPago: "Transferencia",
      monto: 35640,
      timestamp: "2026-07-07T10:45:00",
      clienteComercialId: "teresa",
      estadoPago: "Pendiente",
      fechaVencimiento: "2026-07-19",
    },
  },
  {
    type: "REGISTRAR_VENTA",
    payload: {
      id: "sale-4",
      canalId: "retiro",
      productoId: "campagne",
      cantidad: 8,
      medioPago: "Transferencia",
      monto: 31120,
      timestamp: "2026-07-07T11:20:00",
      clienteComercialId: "forestalsur",
      estadoPago: "Vencido",
      fechaVencimiento: "2026-06-18",
    },
  },
];

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function mergeCatalog(baseItems, candidateItems) {
  if (!Array.isArray(candidateItems) || !candidateItems.length) {
    return baseItems;
  }

  return baseItems.map((baseItem) => {
    const candidate = candidateItems.find((item) => item.id === baseItem.id);
    return candidate ? { ...baseItem, ...candidate } : baseItem;
  });
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

function roundTwo(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}

function touchState(state) {
  return {
    ...state,
    updatedAt: nowIso(),
  };
}

function addDays(baseDate, days) {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function daysPastDue(dateString) {
  if (!dateString) {
    return 0;
  }
  const due = new Date(dateString);
  const today = new Date(DEMO_DATE);
  const diff = Math.floor((today - due) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

function createBaseState() {
  return {
    productos: deepClone(products),
    turnos: [],
    ordenesProduccion: [],
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
    insumos: deepClone(insumoSeeds),
    recepcionesPendientes: [],
    comprasInsumos: [],
    clientesComerciales: deepClone(commercialCustomers),
    pedidosDelivery: [],
    ventas: [],
    devoluciones: [],
    asignacionesPendientes: [],
    reservasProductoTerminado: [],
    slaCumplimiento: 100,
    alertas: [],
    updatedAt: nowIso(),
  };
}

function normalizeState(candidate) {
  const base = createBaseState();

  if (!candidate || typeof candidate !== "object") {
    return base;
  }

  return {
    ...base,
    ...candidate,
    productos: mergeCatalog(base.productos, candidate.productos),
    turnos: Array.isArray(candidate.turnos) ? candidate.turnos : base.turnos,
    ordenesProduccion: Array.isArray(candidate.ordenesProduccion) ? candidate.ordenesProduccion : base.ordenesProduccion,
    stockTerminado: Array.isArray(candidate.stockTerminado) ? candidate.stockTerminado : base.stockTerminado,
    canales: mergeCatalog(base.canales, candidate.canales),
    insumos: mergeCatalog(base.insumos, candidate.insumos),
    recepcionesPendientes: Array.isArray(candidate.recepcionesPendientes)
      ? candidate.recepcionesPendientes
      : base.recepcionesPendientes,
    comprasInsumos: Array.isArray(candidate.comprasInsumos) ? candidate.comprasInsumos : base.comprasInsumos,
    clientesComerciales: mergeCatalog(base.clientesComerciales, candidate.clientesComerciales),
    pedidosDelivery: Array.isArray(candidate.pedidosDelivery) ? candidate.pedidosDelivery : base.pedidosDelivery,
    ventas: Array.isArray(candidate.ventas) ? candidate.ventas : base.ventas,
    devoluciones: Array.isArray(candidate.devoluciones) ? candidate.devoluciones : base.devoluciones,
    asignacionesPendientes: Array.isArray(candidate.asignacionesPendientes)
      ? candidate.asignacionesPendientes
      : base.asignacionesPendientes,
    reservasProductoTerminado: Array.isArray(candidate.reservasProductoTerminado)
      ? candidate.reservasProductoTerminado
      : base.reservasProductoTerminado,
    alertas: Array.isArray(candidate.alertas) ? candidate.alertas : base.alertas,
  };
}

function getProductMap(state) {
  return state.productos.reduce((accumulator, producto) => {
    accumulator[producto.id] = producto;
    return accumulator;
  }, {});
}

function getIngredientMap(state) {
  return state.insumos.reduce((accumulator, insumo) => {
    accumulator[insumo.id] = insumo;
    return accumulator;
  }, {});
}

function getCustomerMap(state) {
  return state.clientesComerciales.reduce((accumulator, customer) => {
    accumulator[customer.id] = customer;
    return accumulator;
  }, {});
}

function getShiftRank(shift) {
  if (shift === "Mañana") {
    return 0;
  }
  if (shift === "Tarde") {
    return 1;
  }
  return 2;
}

function compareLotsOldestFirst(left, right) {
  const leftDate = new Date(left.fecha || DEMO_DATE).getTime();
  const rightDate = new Date(right.fecha || DEMO_DATE).getTime();
  if (leftDate !== rightDate) {
    return leftDate - rightDate;
  }
  const shiftDelta = getShiftRank(left.turno) - getShiftRank(right.turno);
  if (shiftDelta !== 0) {
    return shiftDelta;
  }
  return left.id.localeCompare(right.id);
}

function buildFinishedLotBases(state) {
  const productMap = getProductMap(state);
  const orderMap = state.ordenesProduccion.reduce((accumulator, order) => {
    accumulator[order.id] = order;
    return accumulator;
  }, {});

  return state.turnos
    .map((turno) => {
      const output = Math.max(0, turno.cantidadReal - turno.merma);
      if (output <= 0) {
        return null;
      }
      const order = turno.orderId ? orderMap[turno.orderId] : null;
      const product = productMap[turno.productoId];
      return {
        id: turno.orderId ? `lote-${turno.orderId}` : `lote-${turno.id}`,
        turnoId: turno.id,
        orderId: turno.orderId || "",
        productoId: turno.productoId,
        productoNombre: product ? product.nombre : "Producto",
        recetaId: product ? product.recetaId : "",
        fecha: turno.fecha,
        turno: turno.turno,
        responsable: turno.responsable || order?.responsable || "",
        equipo: turno.equipo || order?.equipo || product?.equipo || "",
        cantidadOriginal: output,
        cantidadReal: turno.cantidadReal,
        merma: turno.merma,
        rendimientoPct: turno.cantidadPlan > 0 ? Math.round((output / turno.cantidadPlan) * 100) : 0,
      };
    })
    .filter(Boolean)
    .sort(compareLotsOldestFirst);
}

function allocateAcrossLots(lots, productoId, quantity, decorate) {
  let remaining = toInteger(quantity);
  if (remaining <= 0) {
    return [];
  }

  const matches = lots
    .filter((lot) => lot.productoId === productoId && lot.remaining > 0)
    .sort(compareLotsOldestFirst);

  const allocations = [];
  matches.forEach((lot) => {
    if (remaining <= 0) {
      return;
    }
    const taken = Math.min(lot.remaining, remaining);
    if (taken <= 0) {
      return;
    }
    lot.remaining -= taken;
    remaining -= taken;
    allocations.push({
      loteId: lot.id,
      productoId,
      cantidad: taken,
      ...(decorate ? decorate(lot, taken) : {}),
    });
  });

  return allocations;
}

function buildBootstrapReservations(state) {
  const lots = buildFinishedLotBases(state).map((lot) => ({ ...lot, remaining: lot.cantidadOriginal }));
  const bootstrapped = [];
  let reservationSerial = 0;

  state.canales
    .filter((canal) => canal.id !== "delivery")
    .forEach((canal) => {
      canal.stock.forEach((item) => {
        bootstrapped.push(
          ...allocateAcrossLots(lots, item.productoId, item.cantidad, (lot, taken) => ({
            id: `bootstrap-${canal.id}-${lot.id}-${++reservationSerial}`,
            canalId: canal.id,
            cantidad: taken,
            createdAt: nowIso(),
            referenciaId: "",
            origen: "bootstrap",
          })),
        );
      });
    });

  state.pedidosDelivery.forEach((pedido) => {
    bootstrapped.push(
      ...allocateAcrossLots(lots, pedido.productoId, pedido.cantidad, (lot, taken) => ({
        id: `bootstrap-delivery-${pedido.id}-${lot.id}-${++reservationSerial}`,
        canalId: "delivery",
        cantidad: taken,
        createdAt: pedido.createdAt || nowIso(),
        referenciaId: pedido.id,
        origen: "bootstrap",
      })),
    );
  });

  return bootstrapped;
}

function ensureReservationState(state) {
  if (Array.isArray(state.reservasProductoTerminado) && state.reservasProductoTerminado.length) {
    return state;
  }

  const assignedUnits = state.stockTerminado.reduce((sum, item) => sum + item.cantidadAsignada, 0);
  if (!assignedUnits) {
    return { ...state, reservasProductoTerminado: [] };
  }

  return {
    ...state,
    reservasProductoTerminado: buildBootstrapReservations(state),
  };
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

function getPendingForProduct(state, productoId) {
  return state.asignacionesPendientes
    .filter((item) => item.productoId === productoId)
    .reduce((sum, item) => sum + item.cantidad, 0);
}

function buildFinishedLots(state) {
  const lotBases = buildFinishedLotBases(state);
  const confirmedByLot = state.reservasProductoTerminado.reduce((accumulator, item) => {
    accumulator[item.loteId] = (accumulator[item.loteId] || 0) + toInteger(item.cantidad);
    return accumulator;
  }, {});
  const pendingAssigned = {};
  const productLotPool = lotBases
    .map((lot) => ({
      ...lot,
      remaining: Math.max(0, lot.cantidadOriginal - (confirmedByLot[lot.id] || 0)),
    }))
    .sort(compareLotsOldestFirst);

  state.asignacionesPendientes.forEach((item) => {
    if (item.loteId) {
      pendingAssigned[item.loteId] = (pendingAssigned[item.loteId] || 0) + toInteger(item.cantidad);
      const lot = productLotPool.find((candidate) => candidate.id === item.loteId);
      if (lot) {
        lot.remaining = Math.max(0, lot.remaining - toInteger(item.cantidad));
      }
      return;
    }

    allocateAcrossLots(productLotPool, item.productoId, item.cantidad, (lot, taken) => {
      pendingAssigned[lot.id] = (pendingAssigned[lot.id] || 0) + taken;
      return {};
    });
  });

  return lotBases
    .map((lot) => {
      const confirmado = confirmedByLot[lot.id] || 0;
      const pendiente = pendingAssigned[lot.id] || 0;
      return {
        ...lot,
        cantidadConfirmada: confirmado,
        cantidadPendiente: pendiente,
        cantidadDisponible: Math.max(0, lot.cantidadOriginal - confirmado - pendiente),
      };
    })
    .sort((left, right) => {
      const rightDate = new Date(right.fecha || DEMO_DATE).getTime();
      const leftDate = new Date(left.fecha || DEMO_DATE).getTime();
      if (rightDate !== leftDate) {
        return rightDate - leftDate;
      }
      const shiftDelta = getShiftRank(right.turno) - getShiftRank(left.turno);
      if (shiftDelta !== 0) {
        return shiftDelta;
      }
      return right.id.localeCompare(left.id);
    });
}

function getLotMap(state) {
  return buildFinishedLots(state).reduce((accumulator, lot) => {
    accumulator[lot.id] = lot;
    return accumulator;
  }, {});
}

function consumeReservations(reservations, payload) {
  let remaining = toInteger(payload.cantidad);
  if (remaining <= 0) {
    return reservations;
  }

  const matches = reservations
    .filter((item) => item.productoId === payload.productoId && item.canalId === payload.canalId)
    .sort((left, right) => {
      const leftDate = new Date(left.createdAt || nowIso()).getTime();
      const rightDate = new Date(right.createdAt || nowIso()).getTime();
      if (leftDate !== rightDate) {
        return leftDate - rightDate;
      }
      return left.id.localeCompare(right.id);
    });

  const byId = reservations.reduce((accumulator, item) => {
    accumulator[item.id] = item;
    return accumulator;
  }, {});

  matches.forEach((item) => {
    if (remaining <= 0) {
      return;
    }
    const current = byId[item.id];
    if (!current) {
      return;
    }
    const taken = Math.min(current.cantidad, remaining);
    remaining -= taken;
    if (taken >= current.cantidad) {
      delete byId[item.id];
      return;
    }
    byId[item.id] = { ...current, cantidad: current.cantidad - taken };
  });

  return Object.values(byId);
}

function estimateIngredientsForProduction(state, payload) {
  const producto = state.productos.find((item) => item.id === payload.productoId);
  if (!producto) {
    return [];
  }
  const factor = producto.rendimientoEsperado > 0 ? toPositiveNumber(payload.cantidadReal) / producto.rendimientoEsperado : 0;
  return producto.recetaInsumos.map((item) => ({
    insumoId: item.insumoId,
    cantidad: roundTwo(item.cantidad * factor),
  }));
}

function resolveProductionConsumption(state, payload) {
  if (Array.isArray(payload.consumoInsumos) && payload.consumoInsumos.length) {
    return payload.consumoInsumos
      .map((item) => ({
        insumoId: item.insumoId,
        cantidad: roundTwo(item.cantidad),
      }))
      .filter((item) => item.insumoId && item.cantidad > 0);
  }

  return estimateIngredientsForProduction(state, payload);
}

function canFinalizeProductionEntries(entries, state) {
  const demand = {};

  entries.forEach((entry) => {
    resolveProductionConsumption(state, entry).forEach((item) => {
      demand[item.insumoId] = roundTwo((demand[item.insumoId] || 0) + item.cantidad);
    });
  });

  return Object.entries(demand).map(([insumoId, cantidad]) => {
    const insumo = state.insumos.find((item) => item.id === insumoId);
    const disponible = insumo ? insumo.stock : 0;
    return {
      insumoId,
      cantidad,
      disponible,
      suficiente: disponible >= cantidad,
    };
  });
}

function calcularDelta(esperado, real) {
  const expectedValue = Number(esperado) || 0;
  const realValue = Number(real) || 0;
  const pct = expectedValue === 0 ? 0 : ((realValue - expectedValue) / expectedValue) * 100;

  if (pct < -5) {
    return {
      pct,
      estado: "alerta",
      label: "Crítico",
      colorClass: "text-error",
      fillClass: "bg-error",
      toneClass: "bg-error-container text-on-error-container",
    };
  }

  if (pct > 2) {
    return {
      pct,
      estado: "excedente",
      label: "Sobre meta",
      colorClass: "text-on-tertiary-container",
      fillClass: "bg-on-tertiary-container",
      toneClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    };
  }

  return {
    pct,
    estado: "optimo",
    label: "En rango",
    colorClass: "text-secondary",
    fillClass: "bg-secondary",
    toneClass: "bg-secondary-fixed text-on-secondary-fixed",
  };
}

function buildProductionTurn(payload, existingTurns) {
  const expected = toPositiveNumber(payload.cantidadPlan);
  const real = toPositiveNumber(payload.cantidadReal);
  const merma = Math.min(toPositiveNumber(payload.merma), real);
  const desviacionPct = expected === 0 ? 0 : ((real - expected) / expected) * 100;

  return {
    id: payload.id || `turno-${existingTurns.length + 1}`,
    orderId: payload.orderId || "",
    fecha: payload.fecha || getToday(),
    turno: payload.turno || "Mañana",
    productoId: payload.productoId,
    responsable: payload.responsable || "",
    equipo: payload.equipo || "",
    cantidadPlan: expected,
    cantidadReal: real,
    merma,
    desviacionPct,
    notas: payload.notas || "",
    consumoInsumos: [],
  };
}

function buildProductionOrder(payload, state) {
  return {
    id: payload.id || `orden-${state.ordenesProduccion.length + 1}`,
    fecha: payload.fecha || getToday(),
    turno: payload.turno || "Mañana",
    productoId: payload.productoId,
    cantidadPlan: toPositiveNumber(payload.cantidadPlan),
    responsable: payload.responsable || "Jefe de producción",
    equipo: payload.equipo || "Equipo principal",
    notas: payload.notas || "",
    estado: "Activa",
    createdAt: payload.createdAt || nowIso(),
    closedAt: "",
    cantidadReal: 0,
    merma: 0,
  };
}

function applyCreateProductionOrder(state, payload) {
  if (!payload.productoId || toPositiveNumber(payload.cantidadPlan) <= 0) {
    return state;
  }

  const product = state.productos.find((item) => item.id === payload.productoId);
  if (!product) {
    return state;
  }

  const duplicatedActiveOrder = state.ordenesProduccion.find(
    (item) =>
      item.estado === "Activa" &&
      item.productoId === payload.productoId &&
      item.fecha === (payload.fecha || getToday()) &&
      item.turno === (payload.turno || "Mañana"),
  );
  if (duplicatedActiveOrder) {
    return state;
  }

  return touchState({
    ...state,
    ordenesProduccion: [...state.ordenesProduccion, buildProductionOrder(payload, state)],
  });
}

function buildPendingReception(payload, state) {
  const quantity = roundTwo(payload.cantidad);
  const price = roundTwo(payload.precioUnitario);
  return {
    id: payload.id || `recepcion-${state.recepcionesPendientes.length + 1}`,
    fechaDocumento: payload.fecha || getToday(),
    fechaCreacion: payload.fechaCreacion || nowIso(),
    proveedor: payload.proveedor || "Sin proveedor",
    insumoId: payload.insumoId,
    cantidadSolicitada: quantity,
    precioUnitario: price,
    totalSolicitado: roundTwo(quantity * price),
    documento: payload.documento || "",
    origen: payload.origen || "Manual",
    observacion: payload.observacion || "",
  };
}

function applyReceptionValidation(state, payload) {
  const pending = state.recepcionesPendientes.find((item) => item.id === payload.id);
  if (!pending) {
    return state;
  }

  const requestedQty = roundTwo(pending.cantidadSolicitada);
  const requestedTotal = roundTwo(pending.totalSolicitado || (requestedQty * pending.precioUnitario));
  const requestedPrice = requestedQty > 0 ? requestedTotal / requestedQty : pending.precioUnitario;
  const isDifference = payload.recepcionEstado === "Con diferencia";
  const receivedQty = isDifference
    ? roundTwo(Math.min(requestedQty, Math.max(0, Number(payload.cantidadRecibida || 0))))
    : requestedQty;

  if (receivedQty <= 0 && !isDifference) {
    return state;
  }

  const differenceQty = roundTwo(Math.max(0, requestedQty - receivedQty));
  const receptionStatus = differenceQty > 0 ? "Con diferencia" : "Conforme";
  const receivedTotal = roundTwo(receivedQty * requestedPrice);

  return touchState({
    ...state,
    insumos: state.insumos.map((insumo) =>
      insumo.id === pending.insumoId ? { ...insumo, stock: roundTwo(insumo.stock + receivedQty) } : insumo,
    ),
    recepcionesPendientes: state.recepcionesPendientes.filter((item) => item.id !== pending.id),
    comprasInsumos: [
      ...state.comprasInsumos,
      {
        id: `compra-${state.comprasInsumos.length + 1}`,
        solicitudId: pending.id,
        fecha: payload.fechaRecepcion || getToday(),
        fechaDocumento: pending.fechaDocumento,
        proveedor: pending.proveedor,
        insumoId: pending.insumoId,
        cantidad: receivedQty,
        cantidadSolicitada: requestedQty,
        diferencia: differenceQty,
        precioUnitario: requestedPrice,
        total: receivedTotal,
        totalSolicitado: requestedTotal,
        documento: pending.documento || "",
        origen: pending.origen || "Manual",
        estadoRecepcion: receptionStatus,
        evidencia: payload.evidencia || "",
        observacion: payload.observacion || pending.observacion || "",
      },
    ],
  });
}

function applyPurchase(state, payload) {
  const quantity = roundTwo(payload.cantidad);
  const price = roundTwo(payload.precioUnitario);
  if (quantity <= 0 || price <= 0) {
    return state;
  }

  const pending = buildPendingReception(payload, state);
  if (payload.autoRecibir) {
    return applyReceptionValidation(
      {
        ...state,
        recepcionesPendientes: [...state.recepcionesPendientes, pending],
      },
      {
        id: pending.id,
        recepcionEstado: "Conforme",
        cantidadRecibida: quantity,
        fechaRecepcion: payload.fecha || getToday(),
        observacion: payload.observacion || "",
      },
    );
  }

  return touchState({
    ...state,
    recepcionesPendientes: [...state.recepcionesPendientes, pending],
  });
}

function applyProduction(state, payload) {
  const nextTurn = buildProductionTurn(payload, state.turnos);
  const consumption = resolveProductionConsumption(state, payload);

  const enough = consumption.every((item) => {
    const insumo = state.insumos.find((candidate) => candidate.id === item.insumoId);
    return insumo && insumo.stock >= item.cantidad;
  });

  if (!enough) {
    return state;
  }

  const output = Math.max(0, nextTurn.cantidadReal - nextTurn.merma);
  nextTurn.consumoInsumos = consumption;

  return touchState({
    ...state,
    turnos: [...state.turnos, nextTurn],
    ordenesProduccion: state.ordenesProduccion.map((order) =>
      order.id !== payload.orderId
        ? order
        : {
            ...order,
            estado: "Cerrada",
            closedAt: nowIso(),
            cantidadReal: nextTurn.cantidadReal,
            merma: nextTurn.merma,
          },
    ),
    stockTerminado: state.stockTerminado.map((stock) =>
      stock.productoId === nextTurn.productoId
        ? { ...stock, cantidadDisponible: stock.cantidadDisponible + output }
        : stock,
    ),
    insumos: state.insumos.map((insumo) => {
      const used = consumption.find((item) => item.insumoId === insumo.id);
      return used ? { ...insumo, stock: roundTwo(Math.max(0, insumo.stock - used.cantidad)) } : insumo;
    }),
  });
}

function applyPendingAllocation(state, payload) {
  const quantity = toInteger(payload.cantidad);
  if (quantity <= 0 || payload.canalId === "delivery") {
    return state;
  }

  const stockRecord = state.stockTerminado.find((item) => item.productoId === payload.productoId);
  if (!stockRecord) {
    return state;
  }

  const lotMap = getLotMap(state);
  const selectedLot = payload.loteId ? lotMap[payload.loteId] : null;
  const available = selectedLot
    ? selectedLot.productoId === payload.productoId
      ? selectedLot.cantidadDisponible
      : 0
    : Math.max(0, stockRecord.cantidadDisponible - getPendingForProduct(state, payload.productoId));
  if (quantity > available) {
    return state;
  }

  const existing = state.asignacionesPendientes.find(
    (item) =>
      item.productoId === payload.productoId &&
      item.canalId === payload.canalId &&
      (item.loteId || "") === (payload.loteId || ""),
  );

  const asignacionesPendientes = existing
    ? state.asignacionesPendientes.map((item) =>
        item.productoId === payload.productoId &&
        item.canalId === payload.canalId &&
        (item.loteId || "") === (payload.loteId || "")
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
          loteId: payload.loteId || "",
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

  const lots = buildFinishedLotBases(state).map((lot) => ({
    ...lot,
    remaining: Math.max(
      0,
      lot.cantidadOriginal -
        state.reservasProductoTerminado
          .filter((item) => item.loteId === lot.id)
          .reduce((sum, item) => sum + toInteger(item.cantidad), 0),
    ),
  }));

  const groupedByProduct = state.asignacionesPendientes.reduce((accumulator, item) => {
    accumulator[item.productoId] = (accumulator[item.productoId] || 0) + item.cantidad;
    return accumulator;
  }, {});

  const newReservations = [];
  let reservationSerial = state.reservasProductoTerminado.length;
  state.asignacionesPendientes.forEach((item) => {
    if (item.loteId) {
      const lot = lots.find((candidate) => candidate.id === item.loteId);
      if (lot) {
        lot.remaining = Math.max(0, lot.remaining - toInteger(item.cantidad));
      }
      newReservations.push({
        id: `reserva-${++reservationSerial}`,
        loteId: item.loteId,
        productoId: item.productoId,
        canalId: item.canalId,
        cantidad: toInteger(item.cantidad),
        createdAt: nowIso(),
        referenciaId: "",
        origen: "manual",
      });
      return;
    }

    newReservations.push(
      ...allocateAcrossLots(lots, item.productoId, item.cantidad, (lot, taken) => ({
        id: `reserva-${++reservationSerial}`,
        canalId: item.canalId,
        cantidad: taken,
        createdAt: nowIso(),
        referenciaId: "",
        origen: "manual",
      })),
    );
  });

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
    reservasProductoTerminado: [...state.reservasProductoTerminado, ...newReservations],
  });
}

function applyCreateDeliveryOrder(state, payload) {
  const quantity = toInteger(payload.cantidad);
  if (
    quantity <= 0 ||
    !payload.productoId ||
    !payload.cliente ||
    !payload.ruta ||
    !payload.vehiculo ||
    !payload.chofer
  ) {
    return state;
  }

  const stockRecord = state.stockTerminado.find((item) => item.productoId === payload.productoId);
  const lotMap = getLotMap(state);
  const selectedLot = payload.loteId ? lotMap[payload.loteId] : null;
  const available = selectedLot
    ? selectedLot.productoId === payload.productoId
      ? selectedLot.cantidadDisponible
      : 0
    : stockRecord
      ? stockRecord.cantidadDisponible
      : 0;
  if (!stockRecord || quantity > available) {
    return state;
  }

  const estado = deliveryStatuses.includes(payload.estado) ? payload.estado : deliveryStatuses[0];
  const deliveryId = payload.id || `delivery-${state.pedidosDelivery.length + 1}`;
  const pedidosDelivery = [
    ...state.pedidosDelivery,
    {
      id: deliveryId,
      productoId: payload.productoId,
      cantidad: quantity,
      loteId: payload.loteId || "",
      cliente: payload.cliente,
      ruta: payload.ruta,
      vehiculo: payload.vehiculo,
      chofer: payload.chofer,
      etaMin: toInteger(payload.etaMin) || 45,
      paradasTotales: toInteger(payload.paradasTotales) || 4,
      paradasCompletadas: Math.min(toInteger(payload.paradasCompletadas), toInteger(payload.paradasTotales) || 4),
      estado,
      cargaCerrada: Boolean(payload.cargaCerrada),
      createdAt: payload.createdAt || nowIso(),
    },
  ];

  const canales = recalculateCapacities(
    state.canales.map((canal) =>
      canal.id !== "delivery"
        ? canal
        : {
            ...canal,
            stock: upsertChannelStock(canal.stock, payload.productoId, (current) => current + quantity),
          },
    ),
  );

  const stockTerminado = state.stockTerminado.map((stock) =>
    stock.productoId !== payload.productoId
      ? stock
      : {
          ...stock,
          cantidadDisponible: Math.max(0, stock.cantidadDisponible - quantity),
          cantidadAsignada: stock.cantidadAsignada + quantity,
        },
  );
  let reservationSerial = state.reservasProductoTerminado.length;
  const deliveryLots = buildFinishedLots(state).map((lot) => ({
    ...lot,
    remaining: lot.cantidadDisponible,
  }));

  return touchState({
    ...state,
    pedidosDelivery,
    canales,
    stockTerminado,
    reservasProductoTerminado: [
      ...state.reservasProductoTerminado,
      ...(payload.loteId
        ? [
            {
              id: `reserva-${++reservationSerial}`,
              loteId: payload.loteId,
              productoId: payload.productoId,
              canalId: "delivery",
              cantidad: quantity,
              createdAt: nowIso(),
              referenciaId: deliveryId,
              origen: "delivery",
            },
          ]
        : allocateAcrossLots(
            deliveryLots,
            payload.productoId,
            quantity,
            (lot, taken) => ({
              id: `reserva-${++reservationSerial}`,
              canalId: "delivery",
              cantidad: taken,
              createdAt: nowIso(),
              referenciaId: deliveryId,
              origen: "delivery",
            }),
          )),
    ],
  });
}

function applyAdvanceDeliveryStatus(state, payload) {
  const pedido = state.pedidosDelivery.find((item) => item.id === payload.id);
  if (!pedido) {
    return state;
  }

  const currentIndex = deliveryStatuses.indexOf(pedido.estado);
  const nextIndex = Math.min(deliveryStatuses.length - 1, currentIndex + 1);
  const nextStatus = deliveryStatuses[nextIndex];

  return touchState({
    ...state,
    pedidosDelivery: state.pedidosDelivery.map((item) =>
      item.id !== payload.id
        ? item
        : {
            ...item,
            estado: nextStatus,
            paradasCompletadas:
              nextStatus === "En Ruta"
                ? Math.min(item.paradasTotales, Math.max(item.paradasCompletadas, 1))
                : nextStatus === "Entregada"
                  ? item.paradasTotales
                  : item.paradasCompletadas,
          },
    ),
  });
}

function applyCloseDeliveryLoad(state, payload) {
  return touchState({
    ...state,
    pedidosDelivery: state.pedidosDelivery.map((item) =>
      item.id === payload.id ? { ...item, cargaCerrada: true } : item,
    ),
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
  const isCommercial = payload.canalId === "retiro" && payload.clienteComercialId;
  const estadoPago = isCommercial
    ? commercialPaymentStatuses.includes(payload.estadoPago)
      ? payload.estadoPago
      : "Pendiente"
    : "Pagado";

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

  const clientesComerciales = state.clientesComerciales.map((customer) => {
    if (!isCommercial || customer.id !== payload.clienteComercialId) {
      return customer;
    }

    if (estadoPago === "Pagado") {
      return customer;
    }

    const extraDays = estadoPago === "Vencido" ? Math.max(30, payload.diasVencimiento || 35) : 12;
    return {
      ...customer,
      saldo: roundTwo(customer.saldo + monto),
      diasVencimiento: Math.max(customer.diasVencimiento || 0, extraDays),
    };
  });

  return touchState({
    ...state,
    canales,
    stockTerminado,
    clientesComerciales,
    reservasProductoTerminado: consumeReservations(state.reservasProductoTerminado, payload),
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
        clienteComercialId: payload.clienteComercialId || "",
        estadoPago,
        fechaVencimiento: isCommercial
          ? payload.fechaVencimiento || addDays(payload.timestamp || `${DEMO_DATE}T12:00:00`, estadoPago === "Vencido" ? -10 : 12)
          : "",
      },
    ],
  });
}

function applyReturn(state, payload) {
  const quantity = toInteger(payload.cantidad);
  if (quantity <= 0) {
    return state;
  }

  return touchState({
    ...state,
    devoluciones: [
      ...state.devoluciones,
      {
        id: payload.id || `devolucion-${state.devoluciones.length + 1}`,
        fecha: payload.fecha || getToday(),
        productoId: payload.productoId,
        cantidad: quantity,
        motivo: payload.motivo || "Sin motivo",
      },
    ],
  });
}

function deriveAlerts(state) {
  const eventTimestamp = state.updatedAt || nowIso();
  const productMap = getProductMap(state);

  const turnAlerts = state.turnos
    .filter((turno) => Math.abs(turno.desviacionPct) > 5)
    .map((turno) => ({
      id: `alert-turno-${turno.id}`,
      tipo: "producción",
      mensaje: `${productMap[turno.productoId]?.nombre || "Producto"} quedó ${turno.desviacionPct < 0 ? "bajo" : "sobre"} el rendimiento esperado.`,
      severidad: turno.desviacionPct < 0 ? "alta" : "media",
      timestamp: turno.fecha,
    }));

  const stockAlerts = state.insumos
    .filter((insumo) => insumo.stock <= insumo.minimo)
    .map((insumo) => ({
      id: `alert-insumo-${insumo.id}`,
      tipo: "insumos",
      mensaje: `${insumo.nombre} quedó en ${roundTwo(insumo.stock)} ${insumo.unidad}. Requiere reposición.`,
      severidad: insumo.stock <= insumo.minimo * 0.6 ? "alta" : "media",
      timestamp: eventTimestamp,
    }));

  const pendingAllocation = state.asignacionesPendientes.length
    ? [
        {
          id: "alert-pending-allocation",
          tipo: "distribución",
          mensaje: `Hay ${state.asignacionesPendientes.length} asignaciones pendientes por confirmar.`,
          severidad: "baja",
          timestamp: eventTimestamp,
        },
      ]
    : [];

  const pendingReceptionAlerts = state.recepcionesPendientes.length
    ? [
        {
          id: "alert-pending-receptions",
          tipo: "recepción",
          mensaje: `${state.recepcionesPendientes.length} compras siguen pendientes de recepción física.`,
          severidad: state.recepcionesPendientes.length >= 3 ? "media" : "baja",
          timestamp: eventTimestamp,
        },
      ]
    : [];

  const activeProductionOrders = state.ordenesProduccion
    .filter((order) => order.estado === "Activa")
    .map((order) => ({
      id: `alert-orden-${order.id}`,
      tipo: "producción",
      mensaje: `${productMap[order.productoId]?.nombre || "Producto"} sigue con orden activa en ${order.turno.toLowerCase()}.`,
      severidad: "baja",
      timestamp: order.fecha,
    }));

  const overdueClients = state.clientesComerciales
    .filter((customer) => customer.saldo > 0 && customer.diasVencimiento >= 30)
    .map((customer) => ({
      id: `alert-cliente-${customer.id}`,
      tipo: "cobranzas",
      mensaje: `${customer.nombre} mantiene saldo vencido por ${formatCurrency(customer.saldo)}.`,
      severidad: "alta",
      timestamp: eventTimestamp,
    }));

  const deliveryAlerts = state.pedidosDelivery
    .filter((pedido) => pedido.estado !== "Entregada" && !pedido.cargaCerrada)
    .slice(0, 2)
    .map((pedido) => ({
      id: `alert-delivery-${pedido.id}`,
      tipo: "delivery",
      mensaje: `${pedido.cliente} sigue sin cierre de carga en ruta ${pedido.ruta}.`,
      severidad: pedido.estado === "En Ruta" ? "media" : "baja",
      timestamp: eventTimestamp,
    }));

  return [...turnAlerts, ...stockAlerts, ...pendingReceptionAlerts, ...pendingAllocation, ...overdueClients, ...deliveryAlerts, ...activeProductionOrders];
}

function deriveSla(state, alerts) {
  const checks = Math.max(
    1,
    state.turnos.length + state.canales.length + state.ventas.length + state.comprasInsumos.length + state.pedidosDelivery.length,
  );
  const scoreFromAlerts = alerts.reduce((score, alert) => {
    if (alert.severidad === "alta") {
      return score - 8;
    }
    if (alert.severidad === "media") {
      return score - 4;
    }
    return score - 2;
  }, 100);
  const activityBoost = Math.min(6, checks / 4);
  return Math.max(72, Math.min(100, Math.round(scoreFromAlerts + activityBoost)));
}

function deriveState(state) {
  const hydratedState = ensureReservationState(state);
  const canales = recalculateCapacities(hydratedState.canales);
  const nextState = { ...hydratedState, canales };
  const alertas = deriveAlerts(nextState);
  const slaCumplimiento = deriveSla(nextState, alertas);
  return { ...nextState, alertas, slaCumplimiento };
}

function operationReducer(state, action) {
  switch (action.type) {
    case "REGISTRAR_COMPRA_INSUMO":
      return deriveState(applyPurchase(state, action.payload));
    case "VALIDAR_RECEPCION_INSUMO":
      return deriveState(applyReceptionValidation(state, action.payload));
    case "CREAR_ORDEN_PRODUCCION":
      return deriveState(applyCreateProductionOrder(state, action.payload));
    case "REGISTRAR_PRODUCCION":
      return deriveState(applyProduction(state, action.payload));
    case "ASIGNAR_A_CANAL":
      return deriveState(applyPendingAllocation(state, action.payload));
    case "FINALIZAR_ALOCACION":
      return deriveState(applyFinalizeAllocation(state));
    case "CREAR_PEDIDO_DELIVERY":
      return deriveState(applyCreateDeliveryOrder(state, action.payload));
    case "AVANZAR_ESTADO_DELIVERY":
      return deriveState(applyAdvanceDeliveryStatus(state, action.payload));
    case "CERRAR_CARGA_DELIVERY":
      return deriveState(applyCloseDeliveryLoad(state, action.payload));
    case "REGISTRAR_VENTA":
      return deriveState(applySale(state, action.payload));
    case "REGISTRAR_DEVOLUCION":
      return deriveState(applyReturn(state, action.payload));
    default:
      return state;
  }
}

function seedState() {
  return seedActions.reduce((currentState, action) => operationReducer(currentState, action), deriveState(createBaseState()));
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

function registrarCompraInsumo(payload) {
  const nextState = operationReducer(getState(), { type: "REGISTRAR_COMPRA_INSUMO", payload });
  return setState(nextState);
}

function registrarRecepcionInsumo(payload) {
  const nextState = operationReducer(getState(), { type: "VALIDAR_RECEPCION_INSUMO", payload });
  return setState(nextState);
}

function crearOrdenProduccion(payload) {
  const nextState = operationReducer(getState(), { type: "CREAR_ORDEN_PRODUCCION", payload });
  return setState(nextState);
}

function registrarProduccionBatch(entries) {
  const evaluation = canFinalizeProductionEntries(entries, getState());
  if (evaluation.some((item) => !item.suficiente)) {
    return getState();
  }

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

function crearPedidoDelivery(payload) {
  const nextState = operationReducer(getState(), { type: "CREAR_PEDIDO_DELIVERY", payload });
  return setState(nextState);
}

function avanzarEstadoDelivery(id) {
  const nextState = operationReducer(getState(), { type: "AVANZAR_ESTADO_DELIVERY", payload: { id } });
  return setState(nextState);
}

function cerrarCargaDelivery(id) {
  const nextState = operationReducer(getState(), { type: "CERRAR_CARGA_DELIVERY", payload: { id } });
  return setState(nextState);
}

function registrarVenta(payload) {
  const nextState = operationReducer(getState(), { type: "REGISTRAR_VENTA", payload });
  return setState(nextState);
}

function registrarDevolucion(payload) {
  const nextState = operationReducer(getState(), { type: "REGISTRAR_DEVOLUCION", payload });
  return setState(nextState);
}

function getInsumoStatus(insumo) {
  const ratio = insumo.capacidad ? insumo.stock / insumo.capacidad : 0;
  if (insumo.stock <= insumo.minimo * 0.7) {
    return {
      label: "Crítico",
      toneClass: "bg-error-container text-on-error-container",
      barClass: "bg-error",
    };
  }
  if (insumo.stock <= insumo.minimo * 1.2 || ratio < 0.5) {
    return {
      label: "Reposición",
      toneClass: "bg-secondary-fixed text-on-secondary-fixed",
      barClass: "bg-secondary",
    };
  }
  return {
    label: "Óptimo",
    toneClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    barClass: "bg-on-tertiary-container",
  };
}

function getCustomerStatus(customer) {
  if (customer.saldo <= 0) {
    return {
      label: "Al corriente",
      toneClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    };
  }
  if (customer.diasVencimiento >= 30) {
    return {
      label: "Vencido",
      toneClass: "bg-error-container text-on-error-container",
    };
  }
  if (customer.diasVencimiento >= 10) {
    return {
      label: "Por vencer",
      toneClass: "bg-secondary-fixed text-on-secondary-fixed",
    };
  }
  return {
    label: "Pendiente",
    toneClass: "bg-surface-container text-on-surface-variant",
  };
}

function buildMetrics(state) {
  const totalProduced = state.turnos.reduce((sum, turno) => sum + Math.max(0, turno.cantidadReal - turno.merma), 0);
  const totalPlanned = state.turnos.reduce((sum, turno) => sum + turno.cantidadPlan, 0);
  const activeProductionOrders = state.ordenesProduccion.filter((order) => order.estado === "Activa");
  const totalWaste = state.turnos.reduce((sum, turno) => sum + turno.merma, 0);
  const totalReturns = state.devoluciones.reduce((sum, devolucion) => sum + devolucion.cantidad, 0);
  const assignedUnits = state.stockTerminado.reduce((sum, item) => sum + item.cantidadAsignada, 0);
  const availableUnits = state.stockTerminado.reduce((sum, item) => sum + item.cantidadDisponible, 0);
  const totalSoldUnits = state.ventas.reduce((sum, venta) => sum + venta.cantidad, 0);
  const totalSoldAmount = state.ventas.reduce((sum, venta) => sum + venta.monto, 0);
  const totalPurchases = state.comprasInsumos.reduce((sum, compra) => sum + compra.total, 0);
  const pendingPurchaseAmount = state.recepcionesPendientes.reduce((sum, item) => sum + (item.totalSolicitado || 0), 0);
  const unsoldUnits = state.canales.reduce(
    (sum, canal) => sum + canal.stock.reduce((channelSum, item) => channelSum + item.cantidad, 0),
    0,
  );
  const conciliationGap = Math.abs(totalProduced - (availableUnits + unsoldUnits + totalSoldUnits));
  const conciliationPct = totalProduced === 0 ? 100 : Math.max(0, Math.round(100 - (conciliationGap / totalProduced) * 100));
  const productionAccuracy = totalPlanned === 0 ? 100 : Math.min(100, Math.round((totalProduced / totalPlanned) * 100));
  const lowStockCount = state.insumos.filter((insumo) => insumo.stock <= insumo.minimo).length;
  const finishedCriticalCount = state.stockTerminado.filter((item) => {
    const product = state.productos.find((candidate) => candidate.id === item.productoId);
    const minimumFinished = Math.max(12, Math.round((product?.rendimientoEsperado || 0) * 0.08));
    return item.cantidadDisponible <= minimumFinished;
  }).length;
  const overdueReceivables = state.clientesComerciales
    .filter((customer) => customer.saldo > 0 && customer.diasVencimiento >= 30)
    .reduce((sum, customer) => sum + customer.saldo, 0);
  const totalReceivables = state.clientesComerciales.reduce((sum, customer) => sum + customer.saldo, 0);
  const expectedCollections = state.clientesComerciales
    .filter((customer) => customer.saldo > 0)
    .reduce((sum, customer) => sum + customer.saldo, 0);
  const realCollections = state.ventas
    .filter((venta) => venta.canalId === "retiro" && venta.estadoPago === "Pagado")
    .reduce((sum, venta) => sum + venta.monto, 0);
  const expectedRendition = state.ventas
    .filter((venta) => venta.estadoPago === "Pagado")
    .reduce((sum, venta) => sum + venta.monto, 0);
  const renderedAmount = state.ventas
    .filter((venta) => venta.estadoPago === "Pagado" && venta.canalId !== "delivery")
    .reduce((sum, venta) => sum + venta.monto, 0);
  const soldByChannel = state.canales.reduce((accumulator, canal) => {
    const channelSales = state.ventas.filter((venta) => venta.canalId === canal.id);
    accumulator[canal.id] = {
      units: channelSales.reduce((sum, venta) => sum + venta.cantidad, 0),
      revenue: channelSales.reduce((sum, venta) => sum + venta.monto, 0),
    };
    return accumulator;
  }, {});

  const productMap = getProductMap(state);
  const soldByProduct = state.productos.reduce((accumulator, product) => {
    const productSales = state.ventas.filter((venta) => venta.productoId === product.id);
    accumulator[product.id] = {
      units: productSales.reduce((sum, venta) => sum + venta.cantidad, 0),
      revenue: productSales.reduce((sum, venta) => sum + venta.monto, 0),
    };
    return accumulator;
  }, {});
  const mesonChannel = state.canales.find((channel) => channel.id === "meson");
  const showcaseUnits = (mesonChannel?.stock || []).reduce((sum, item) => sum + item.cantidad, 0);
  const loadedOrders = state.pedidosDelivery.filter((pedido) => pedido.cargaCerrada || ["En Ruta", "Entregada"].includes(pedido.estado));
  const loadedUnits = loadedOrders.reduce((sum, pedido) => sum + pedido.cantidad, 0);
  const deliveredOrders = state.pedidosDelivery.filter((pedido) => pedido.estado === "Entregada");
  const deliveredUnits = deliveredOrders.reduce((sum, pedido) => sum + pedido.cantidad, 0);
  const routeDifferenceUnits = Math.max(0, loadedUnits - deliveredUnits - totalReturns);
  const actualConsumption = state.turnos.reduce(
    (sum, turn) => sum + (turn.consumoInsumos || []).reduce((turnSum, item) => turnSum + item.cantidad, 0),
    0,
  );
  const standardConsumption = state.turnos.reduce((sum, turn) => {
    const standard = estimateIngredientsForProduction(state, {
      productoId: turn.productoId,
      cantidadReal: turn.cantidadPlan,
    }).reduce((turnSum, item) => turnSum + item.cantidad, 0);
    return sum + standard;
  }, 0);
  const consumptionDeviationPct =
    standardConsumption === 0 ? 0 : Math.round((((actualConsumption - standardConsumption) / standardConsumption) * 100) * 10) / 10;
  const recipeYieldByProduct = state.productos
    .map((product) => {
      const turns = state.turnos.filter((turn) => turn.productoId === product.id);
      const expected = turns.reduce((sum, turn) => sum + turn.cantidadPlan, 0);
      const actual = turns.reduce((sum, turn) => sum + Math.max(0, turn.cantidadReal - turn.merma), 0);
      const pct = expected > 0 ? Math.round((actual / expected) * 100) : 0;
      return {
        productoId: product.id,
        producto: product.nombre,
        expected,
        actual,
        pct,
      };
    })
    .sort((a, b) => b.pct - a.pct);
  const productMix = Object.entries(soldByProduct)
    .map(([productoId, values]) => ({
      productoId,
      producto: productMap[productoId]?.nombre || productoId,
      units: values.units,
      revenue: values.revenue,
      sharePct: totalSoldUnits === 0 ? 0 : Math.round((values.units / totalSoldUnits) * 100),
    }))
    .filter((item) => item.units > 0)
    .sort((a, b) => b.units - a.units);
  const effectiveCollectionsPct = expectedCollections === 0 ? 100 : Math.round((realCollections / expectedCollections) * 100);
  const renditionDifferenceAmount = Math.max(0, expectedRendition - renderedAmount);
  const pendingClosures =
    state.asignacionesPendientes.length +
    state.pedidosDelivery.filter((pedido) => !pedido.cargaCerrada).length +
    (state.turnos.some((turno) => turno.fecha === getToday()) ? 0 : 1);
  const closedGaps = state.turnos.filter((turno) => Math.abs(turno.desviacionPct) <= 5).length + state.pedidosDelivery.filter((pedido) => pedido.cargaCerrada).length;
  const openGaps = state.alertas.filter((alert) => alert.severidad !== "baja").length + pendingClosures;
  const closedGapPct = closedGaps + openGaps === 0 ? 100 : Math.round((closedGaps / (closedGaps + openGaps)) * 100);
  const totalProcessWaste = totalWaste + totalReturns + showcaseUnits + routeDifferenceUnits;
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
        estado: delta.estado === "alerta" ? "Revisión" : "OK",
        variacion: `${turno.desviacionPct > 0 ? "+" : ""}${turno.desviacionPct.toFixed(1)}%`,
      };
    });

  return {
    totalProduced,
    totalPlanned,
    activeProductionOrders: activeProductionOrders.length,
    totalWaste,
    totalSoldUnits,
    totalSoldAmount,
    totalPurchases,
    pendingPurchaseAmount,
    assignedUnits,
    availableUnits,
    unsoldUnits,
    lowStockCount,
    finishedCriticalCount,
    totalReceivables,
    overdueReceivables,
    expectedCollections,
    realCollections,
    expectedRendition,
    renderedAmount,
    openDeliveryOrders: state.pedidosDelivery.filter((pedido) => pedido.estado !== "Entregada").length,
    conciliationPct,
    productionAccuracy,
    soldByChannel,
    soldByProduct,
    recipeYieldByProduct,
    productMix,
    actualConsumption,
    standardConsumption,
    consumptionDeviationPct,
    totalReturns,
    showcaseUnits,
    routeDifferenceUnits,
    totalProcessWaste,
    deliveryCompliancePct: loadedOrders.length === 0 ? 0 : Math.round((deliveredOrders.length / loadedOrders.length) * 100),
    effectiveCollectionsPct,
    renditionDifferenceAmount,
    criticalStockCount: lowStockCount + finishedCriticalCount,
    pendingReceptionCount: state.recepcionesPendientes.length,
    pendingClosures,
    closedGaps,
    openGaps,
    closedGapPct,
    recentConciliations,
    statusLabel: state.alertas.some((alert) => alert.severidad === "alta") ? "Hay desvíos" : "Todo cuadra",
    formattedSoldAmount: currencyFormatter.format(totalSoldAmount),
    formattedPurchases: currencyFormatter.format(totalPurchases),
    formattedReceivables: currencyFormatter.format(totalReceivables),
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

function formatShortDate(value) {
  if (!value) {
    return "";
  }
  return dateFormatter.format(new Date(value));
}

function ensureUiChrome() {
  let toastRoot = document.getElementById("demo-toast-root");
  if (!toastRoot) {
    toastRoot = document.createElement("div");
    toastRoot.id = "demo-toast-root";
    toastRoot.className =
      "fixed top-5 right-5 z-[150] flex w-[360px] max-w-[calc(100vw-32px)] flex-col gap-3 pointer-events-none";
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
            <p class="text-label-caps text-on-surface-variant" id="demo-modal-kicker">Demo Action</p>
            <h3 class="mt-2 text-headline-md font-semibold text-primary" id="demo-modal-title"></h3>
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

function renderSidebar(activePage, sidebarSubmenu, openSubmenuPage) {
  const navItems = Object.entries(pageMeta)
    .map(([key, item]) => {
      const active = key === activePage;
      const submenu = sidebarSubmenu && sidebarSubmenu.parentPage === key ? sidebarSubmenu : null;
      const activeSubitem = submenu ? submenu.items.find((subitem) => subitem.id === submenu.activeId) || submenu.items[0] : null;
      const submenuOpen = openSubmenuPage === key;
      const classes = active
        ? "group flex w-full items-center gap-3 rounded-2xl border border-[#2f57d3]/15 bg-[linear-gradient(135deg,rgba(58,92,229,0.12),rgba(255,255,255,0.96))] px-3 py-3 font-semibold text-[#2646b7] shadow-[0_16px_30px_rgba(47,87,211,0.14)] sm:min-w-max sm:px-4"
        : "group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-[#59637c] transition-colors hover:bg-[#f3f6ff] hover:text-[#2646b7] sm:min-w-max sm:px-4";

      if (!submenu) {
        return `
          <a class="${classes}" href="${item.href}">
            <span class="flex h-9 w-9 items-center justify-center rounded-xl ${active ? "bg-white text-[#2646b7] shadow-sm" : "bg-[#f5f7ff] text-[#64708b] group-hover:bg-white group-hover:text-[#2646b7]"}">
              <span class="material-symbols-outlined text-[20px]">${item.icon}</span>
            </span>
            <span class="text-body-md">${item.label}</span>
          </a>
        `;
      }

      const submenuItems = submenu.items
        .map((subitem) => {
          const subitemActive = subitem.id === submenu.activeId;
          return `
            <a
              class="flex items-start gap-3 rounded-2xl border px-3 py-3 transition-colors ${
                subitemActive
                  ? "border-[#dce4ff] bg-[#f4f7ff] text-[#2341ae]"
                  : "border-transparent bg-white text-[#5a6781] hover:border-[#dce4ff] hover:bg-[#f9fbff] hover:text-[#2341ae]"
              }"
              href="${escapeHtml(subitem.href)}"
            >
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${subitemActive ? "bg-white text-[#2341ae]" : "bg-[#f4f7ff] text-[#6b7896]"}">
                <span class="material-symbols-outlined text-[18px]">${escapeHtml(subitem.icon)}</span>
              </span>
              <span class="min-w-0">
                <span class="block text-body-md font-semibold">${escapeHtml(subitem.label)}</span>
                <span class="mt-1 block text-body-sm ${subitemActive ? "text-[#60719a]" : "text-[#7a879f]"}">${escapeHtml(subitem.helper || "")}</span>
              </span>
            </a>
          `;
        })
        .join("");

      return `
        <div class="relative">
          <button
            aria-expanded="${submenuOpen ? "true" : "false"}"
            class="${classes} justify-between text-left"
            id="sidebar-submenu-trigger-${escapeHtml(key)}"
            type="button"
          >
            <span class="flex min-w-0 items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-xl ${active ? "bg-white text-[#2646b7] shadow-sm" : "bg-[#f5f7ff] text-[#64708b] group-hover:bg-white group-hover:text-[#2646b7]"}">
                <span class="material-symbols-outlined text-[20px]">${item.icon}</span>
              </span>
              <span class="min-w-0">
                <span class="block text-body-md">${item.label}</span>
                <span class="mt-0.5 block truncate text-body-sm ${active ? "text-[#60719a]" : "text-[#7a879f]"}">${escapeHtml(activeSubitem ? activeSubitem.label : "Abrir submenú")}</span>
              </span>
            </span>
            <span class="material-symbols-outlined text-[18px] text-[#6a7a98] transition-transform ${submenuOpen ? "rotate-180" : ""}">chevron_right</span>
          </button>

          <div class="${submenuOpen ? "mt-2 sm:mt-0" : "hidden"} sm:absolute sm:left-[calc(100%+14px)] sm:top-0 sm:z-40 sm:w-[296px]">
            <div class="rounded-[26px] border border-[#d9e0ef] bg-white/98 p-3 shadow-[0_22px_48px_rgba(37,70,183,0.16)] backdrop-blur">
              <div class="mb-3 flex items-center justify-between gap-3 px-2 py-1">
                <div>
                  <p class="text-label-caps text-[#7181a3]">Submenú</p>
                  <p class="mt-1 text-body-md font-semibold text-[#2341ae]">${escapeHtml(item.label)}</p>
                </div>
                <a class="inline-flex items-center gap-1 rounded-full border border-[#dce4ff] bg-[#f8faff] px-3 py-1 text-body-sm font-medium text-[#3556c5]" href="${escapeHtml(item.href)}">
                  <span class="material-symbols-outlined text-[16px]">home_storage</span>
                  Ir al módulo
                </a>
              </div>
              <div class="max-h-[calc(100vh-180px)] space-y-2 overflow-y-auto pr-1">
                ${submenuItems}
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="flex h-full min-h-0 flex-col rounded-[24px] border border-[#d9c29a] bg-[radial-gradient(circle_at_top_left,_rgba(255,215,153,0.4),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(213,227,253,0.5),_transparent_34%),linear-gradient(180deg,rgba(255,252,246,0.98),rgba(248,243,233,0.96))] p-3 shadow-[0_18px_42px_rgba(140,96,31,0.12)] backdrop-blur sm:rounded-[28px] sm:p-5">
      <div class="flex items-center justify-between gap-3">
        <div class="min-w-0">
          <div class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#b46b00,#f1b33f)] text-white shadow-[0_12px_24px_rgba(180,107,0,0.28)] md:h-11 md:w-11">
              <span class="material-symbols-outlined text-[20px]">bakery_dining</span>
            </div>
            <div class="min-w-0">
              ${BRAND_COMPANY ? `<p class="truncate text-label-caps text-[#9d6400]">${escapeHtml(BRAND_COMPANY)}</p>` : `<p class="truncate text-label-caps text-[#9d6400]">Suite panadera</p>`}
              <h1 class="truncate font-display-lg text-[22px] leading-none text-[#6a4320] sm:text-[24px] md:text-[34px]">${escapeHtml(BRAND_SOLUTION)}</h1>
            </div>
          </div>
          <p class="mt-2 hidden text-label-caps uppercase tracking-[0.16em] text-[#9a8567] sm:block">Operación Panadera</p>
        </div>
        <div class="flex shrink-0 flex-col items-end gap-2">
          <span class="rounded-full border border-[#ffb52f]/30 bg-[#fff4d8] px-3 py-1 text-label-caps text-[#9c6400]">Modo demo</span>
          <span class="hidden rounded-full bg-[#fff1d5] px-3 py-1 text-label-caps text-[#9c6400] md:inline-flex">Suite panadera</span>
        </div>
      </div>

      <nav class="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-1 sm:space-y-2">
        ${navItems}
      </nav>

      <div class="mt-auto hidden gap-2 border-t border-[#e3e9fb] pt-6 md:grid">
        <a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-[#5d6781] transition-colors hover:bg-[#f3f6ff] hover:text-[#2646b7]" href="dashboard.html">
          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f5f7ff]">
            <span class="material-symbols-outlined text-[20px]">query_stats</span>
          </span>
          <span class="text-body-md">Audit Trail</span>
        </a>
        <button class="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-[#5d6781] transition-colors hover:bg-[#f3f6ff] hover:text-[#2646b7]" id="sidebar-reset-demo" type="button">
          <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f5f7ff]">
            <span class="material-symbols-outlined text-[20px]">restart_alt</span>
          </span>
          <span class="text-body-md">Reset Demo</span>
        </button>
      </div>

      <div class="mt-5 hidden rounded-3xl border border-[#ead7b2] bg-[linear-gradient(180deg,#fffdfa,#fff4df)] p-4 sm:mt-6 sm:block">
        <div class="flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#b46b00,#f1b33f)] text-white shadow-[0_12px_24px_rgba(180,107,0,0.28)]">
            <span class="material-symbols-outlined text-[20px]">storefront</span>
          </div>
          <div class="min-w-0">
            <p class="truncate text-body-md font-semibold text-[#6a4320]">${escapeHtml(BRAND_SOLUTION)}</p>
            <p class="truncate text-body-sm text-[#9a8567]">Operación panadera</p>
          </div>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-2">
          <div class="rounded-2xl bg-white px-3 py-3">
            <p class="text-label-caps text-[#7a86a4]">Modo</p>
            <p class="mt-1 text-body-md font-semibold text-[#2341ae]">Demo</p>
          </div>
          <div class="rounded-2xl bg-white px-3 py-3">
            <p class="text-label-caps text-[#7a86a4]">Solución</p>
            <p class="mt-1 text-body-md font-semibold text-[#2341ae]">${escapeHtml(BRAND_SOLUTION)}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderHeader(options) {
  const badge = options.badge
    ? `
      <div class="inline-flex items-center gap-2 rounded-full border border-[#dce4ff] bg-[#f5f7ff] px-3 py-1 shadow-sm">
        <span class="material-symbols-outlined text-sm text-[#3556c5]">${options.badgeIcon || "schedule"}</span>
        <span class="text-body-sm font-medium text-[#2341ae]">${escapeHtml(options.badge)}</span>
      </div>
    `
    : "";

  const secondaryActions = (options.secondaryActions || [])
    .map(
      (action) => `
        <button
          class="flex h-9 w-9 items-center justify-center rounded-2xl border border-[#dce4ff] bg-white text-[#58708f] transition-colors hover:border-[#2f57d3]/20 hover:bg-[#f4f7ff] hover:text-[#2646b7]"
          id="${escapeHtml(action.id)}"
          type="button"
          title="${escapeHtml(action.label)}"
        ><span class="material-symbols-outlined text-[20px]">${escapeHtml(action.icon)}</span></button>
      `,
    )
    .join("");

  const primaryAction = options.primaryAction
    ? `
      <button
        class="flex items-center gap-2 rounded-2xl bg-[#ffb72b] px-4 py-2 text-body-sm font-semibold text-[#2341ae] shadow-[0_14px_28px_rgba(255,183,43,0.24)] transition-colors hover:bg-[#ffca67]"
        id="${escapeHtml(options.primaryAction.id)}"
        type="button"
      >
        <span class="material-symbols-outlined text-sm">${escapeHtml(options.primaryAction.icon)}</span>
        ${escapeHtml(options.primaryAction.label)}
      </button>
    `
    : "";

  return `
    <div class="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div class="min-w-0">
        <div class="flex flex-wrap items-center gap-2.5">
          <h2 class="text-label-caps text-[#6f7fa1] uppercase tracking-[0.16em]">${escapeHtml(options.eyebrow)}</h2>
          <div class="hidden h-4 w-px bg-[#d8e0f6] sm:block"></div>
          ${badge}
        </div>
        <p class="mt-1.5 truncate text-[18px] font-semibold tracking-[-0.02em] text-[#2341ae] sm:text-[22px] md:text-[26px]">${escapeHtml(options.pageTitle || "Lanzarote")}</p>
        <p class="mt-1 text-body-sm text-[#9a8567]">${escapeHtml(BRAND_SOLUTION)}</p>
      </div>
      <div class="flex items-center justify-between gap-2 sm:justify-end">
        <div class="flex items-center gap-2 text-on-surface-variant">
          ${secondaryActions}
        </div>
        ${primaryAction}
      </div>
    </div>
  `;
}

function applyViewportShellLayout() {
  document.body.classList.add("h-screen", "overflow-hidden");

  const sidebarHost = document.getElementById("sidebar");
  if (sidebarHost) {
    sidebarHost.classList.add("h-full", "overflow-visible");
  }

  const main = document.querySelector("main");
  if (main) {
    main.classList.add("flex", "h-screen", "flex-col", "overflow-hidden");
  }

  const header = document.getElementById("topbar");
  if (header) {
    header.classList.add("shrink-0");
    const contentRoot = header.nextElementSibling;
    if (contentRoot) {
      contentRoot.classList.add("flex-1", "min-h-0", "overflow-hidden");
    }
  }
}

function mountShell(options) {
  ensureUiChrome();
  applyViewportShellLayout();
  const sidebar = document.getElementById("sidebar");
  const header = document.getElementById("topbar");
  let openSubmenuPage = null;

  const paintSidebar = () => {
    if (!sidebar) {
      return;
    }

    sidebar.innerHTML = renderSidebar(options.activePage, options.sidebarSubmenu, openSubmenuPage);

    const submenuPage = options.sidebarSubmenu && options.sidebarSubmenu.parentPage;
    if (submenuPage) {
      const trigger = document.getElementById(`sidebar-submenu-trigger-${submenuPage}`);
      if (trigger) {
        trigger.addEventListener("click", () => {
          openSubmenuPage = openSubmenuPage === submenuPage ? null : submenuPage;
          paintSidebar();
        });
      }
    }

    const resetButton = document.getElementById("sidebar-reset-demo");
    if (resetButton) {
      resetButton.addEventListener("click", () => {
        resetState();
        window.location.reload();
      });
    }
  };

  paintSidebar();

  if (header) {
    header.innerHTML = renderHeader({ ...options.header, pageTitle: options.title });
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
        <p class="text-label-caps text-on-surface-variant">Feedback</p>
        <p class="mt-1 text-body-md text-on-surface">${escapeHtml(message)}</p>
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
    return { label: "Mesón", className: "bg-tertiary-fixed text-on-tertiary-fixed" };
  }
  if (channelId === "retiro") {
    return { label: "Comercial", className: "bg-secondary-fixed text-on-secondary-fixed" };
  }
  return { label: "Despacho", className: "bg-primary text-white" };
}

window.LanzaroteState = {
  STORAGE_KEY,
  DEMO_DATE,
  paymentMethods,
  pageMeta,
  products,
  channelSeeds,
  commercialPaymentStatuses,
  deliveryStatuses,
  getToday,
  getState,
  setState,
  seedState,
  resetState,
  getProductMap,
  getIngredientMap,
  getCustomerMap,
  getFinishedLots: buildFinishedLots,
  getPendingForProduct,
  estimateIngredientsForProduction,
  canFinalizeProductionEntries,
  calcularDelta,
  recalcularDashboard,
  registrarCompraInsumo,
  registrarRecepcionInsumo,
  crearOrdenProduccion,
  registrarProduccionBatch,
  asignarACanal,
  finalizarAlocacion,
  crearPedidoDelivery,
  avanzarEstadoDelivery,
  cerrarCargaDelivery,
  registrarVenta,
  registrarDevolucion,
  getInsumoStatus,
  getCustomerStatus,
  buildMetrics,
  formatCurrency,
  formatShortDate,
  renderSidebar,
  renderHeader,
  mountShell,
  escapeHtml,
  channelBadge,
  ensureUiChrome,
  showToast,
  openModal,
  closeModal,
};
