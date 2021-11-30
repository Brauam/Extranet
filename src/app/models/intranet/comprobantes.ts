export interface IComprobantesDetalle{
    docnro: string;
    secuencia: number;
    fecha: Date;
    codigo: string;
    cantidad: number;
    idunidadmedida: number;
    idmodelo: number;
    unidad: string;
    modelo: string;
    medida: string;
    precio: number;
    parcial: number;
    docref: string;
    codigoalmacen: number;
    numerooperacion: number;
    porcdesc: number;
    grupo: string;
    cant: string;
    descripcion: string;
}

export interface IComprobantes {
    docnro:string;
    razon:string;
    idcliente:number;
    idvendedor:number;
    fecha:Date;
    pedido:string;
    subtotal:number;
    igv:number;
    total:number;
    tc:number;
    tipodoc:string;
    docref:string;
    cod_moneda:string;
    doc:string;
    gui:number;
    numerooperacion:number;
    almacen:number;
    vencimiento:Date;
    idtipo:number;
    mtoinafecto:number;
    doccierre:string;
    unidad:string;
    sucursal:string;
    direccion:string;
    descuento:number;
    items:IComprobantesDetalle[];
}


export interface IMotivosNC {
    idtipo:number;
    tipo:string;
}
