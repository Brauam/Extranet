export interface ISolicitudes {
  idsolicitud: number;
  idcliente: number;
  idmotivo: number;
  idvendedor: number;
  numerooperacion: number;
  nombresolicitante: string;
  fechasolicitud: Date;
  ordencompra: string;
  fechaordencompra: Date;
  motivo: string;
  motivoNC: string;
  comprobante: string;
  guia: string;
  fecha_registro: Date;
  fecha_modificacion: Date;
  activo: boolean;
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
