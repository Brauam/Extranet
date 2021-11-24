export interface IComprobantesDetalle{
    DocNro: string;
    Secuencia: number;
    Fecha: Date;
    Codigo: string;
    Cantidad: number;
    Unidad: string;
    Precio: number;
    Parcial: number;
    DocRef: string;
    Codigoalmacen: number;
    NumeroOperacion: number;
    PorcDesc: number;
    Grupo: string;
    Cant: string;
    Descripcion: string;
}

export interface IComprobantes {
    DocNro:string;
    idCliente:number;
    idVendedor:number;
    Fecha:Date;
    Pedido:string;
    SubTotal:number;
    IGV:number;
    ImpAd:number;
    Total:number;
    TC:number;
    Tipodoc:string;
    DocRef:string;
    Cod_Moneda:string;
    doc:string;
    gui:number;
    NumeroOperacion:number;
    Almacen:number;
    Vencimiento:Date;
    IdTipo:number;
    MtoInafecto:number;
    DocCierre:string;
    Sucursal:string;
    Direccion:string;
    Descuento:number;
    Items:IComprobantesDetalle[];
}
