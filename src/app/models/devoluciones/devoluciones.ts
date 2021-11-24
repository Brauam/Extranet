export interface ISolicitudes {
  idsolicitud: number;
  idcliente: number;
  numerooperacion: number;
  nombresolicitante: string;
  fechasolicitud: Date;
  ordencompra: string;
  fechaordencompra: Date;
  motivo: string;
  fecha_registro: Date;
  fecha_modificacion: Date;
  activo: boolean;
  pagado: boolean;
  pendientepago: boolean;
  Items: ISolicitudesDetalle[];
}

export interface ISolicitudesDetalle {
  iddetallesolicitud: number;
  idsolicitud: number;
  secuencia: number;
  descripcionarticulo: string;
  idmodelo: number;
  idunidadmedida: number;
  cantidad: number;
  activo: boolean;
}
