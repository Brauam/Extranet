import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IComprobantes, IComprobantesDetalle, IMotivosNC } from 'src/app/models/intranet/comprobantes';
import { IReturn } from 'src/app/services/common/return';
import { ComprobantesService } from 'src/app/services/intranet/comprobantes.service';

@Component({
  selector: 'app-solicitudesdetalle',
  templateUrl: './solicitudesdetalle.component.html',
  styleUrls: ['./solicitudesdetalle.component.scss']
})
export class SolicitudesdetalleComponent implements OnInit {

  erroresValidacion = {
    errores: [
      { tipo: 'required', mensaje: 'El campo es requerido' },
      { tipo: 'pattern', mensaje: 'Ingresar numeros' },
    ]
  }

  @ViewChild('cantidaddev') cantidaddev: ElementRef;

  today = new Date();
  comprobantes: IComprobantes;
  comprobantesdetalle: IComprobantesDetalle[] = [];
  series: string[];
  motivos: IMotivosNC[];
  resValidacion: IReturn;
  validarComprobanteFormGroup: FormGroup;
  SolicitudesFormGroup: FormGroup;
  SolicitudesdetalleFormGroup: FormGroup;
  rowIndex:number;
  cantidaddevolucion:number;

  displayedColumns: string[] = ['descripcion', 'modelo', 'cantidadtotal', 'medida', 'cantidad'];

  constructor(private _formBuilder: FormBuilder,
    private comprobantesService: ComprobantesService) { }

  ngOnInit() {
    console.log(this.today);
    this.resValidacion = <IReturn>{};
    this.comprobantesService.SeriesComprobantes().subscribe(res => this.series = res)
    this.crearValidarComprobanteFormGroup();
    this.crearSolicitudesFormGroup();
    this.comprobantesService.MotivosNC().subscribe(res => this.motivos = res)
  }

  validarComprobante() {
    let serie = this.validarComprobanteFormGroup.controls.seriecomprobante.value;
    let numero = this.validarComprobanteFormGroup.controls.numerocomprobante.value;

    this.comprobantesService.ObtenerNumeroOperacion(serie, numero).subscribe(
      res => {
        this.resValidacion = res;
        console.log(res)
        if (+res.Code != 0) {

          this.comprobantesService.get(+res.Code).subscribe(
            result => {
              this.comprobantes = result;
              this.comprobantesdetalle = result.items;
              console.log(result);

              this.SolicitudesFormGroup.patchValue({
                idcliente: result.idcliente,
                idvendedor: result.idvendedor,
                ordencompra: result.pedido
              })


              this.comprobantesdetalle.forEach(element => {
                this.crearSolicitudesDetalleFormGroup();
                this.SolicitudesdetalleFormGroup.patchValue({
                  secuencia: element.secuencia,
                  codigo: element.codigo,
                  modelo: element.modelo,
                  descripcionarticulo: element.descripcion,
                  idmodelo : element.idmodelo,
                  idunidadmedida: element.idunidadmedida,
                  cantidad: element.cantidad,
                  cantidad_devolucion: element.cantidad,
                  medida: element.medida
                });
                const detalle = this.SolicitudesFormGroup.get('items') as FormArray;
                detalle.push(this.SolicitudesdetalleFormGroup);

              });

            }
          )
        } else {
          console.log(res.Message)
        }
      }
    )
  }

  SaveCantidad(index:number,event:any){
    this.rowIndex = index;
    let valor = event.target.value;
    (this.SolicitudesFormGroup.controls.items as FormArray).at(index).patchValue({ cantidad_devolucion: +valor });
    this.cantidaddev.nativeElement.focus();
  }

  crearValidarComprobanteFormGroup() {
    this.validarComprobanteFormGroup = this._formBuilder.group({
      seriecomprobante: new FormControl('', Validators.required),
      numerocomprobante: new FormControl('', Validators.compose([Validators.pattern('[0-9]*'), Validators.required, Validators.min(1)])),
    })
  }

  crearSolicitudesFormGroup() {
    this.SolicitudesFormGroup = this._formBuilder.group({
      idsolicitud: new FormControl(0),
      idcliente: new FormControl(0),
      idvendedor: new FormControl(0),
      numerooperacion: new FormControl(''),
      nombresolicitante: new FormControl(''),
      fechasolicitud: new FormControl(this.today),
      ordencompra: new FormControl(''),
      fechaordencompra: new FormControl(''),
      motivo: new FormControl(''),
      fecha_registro: new FormControl(''),
      fecha_modificacion: new FormControl(''),
      activo: new FormControl(true),
      idmotivo: new FormControl(1),
      pendientepago: new FormControl(false),
      items: this._formBuilder.array([], Validators.required),
    })
  }


  crearSolicitudesDetalleFormGroup() {
    this.SolicitudesdetalleFormGroup = this._formBuilder.group({
      iddetallesolicitud: new FormControl(0),
      idsolicitud: new FormControl(0),
      secuencia: new FormControl(0),
      codigo: new FormControl(''),
      descripcionarticulo: new FormControl(''),
      medida: new FormControl(''),
      modelo: new FormControl(0),
      idmodelo: new FormControl(''),
      idunidadmedida: new FormControl(0),
      cantidad: new FormControl(''),
      cantidad_devolucion: new FormControl(0),
      activo: new FormControl(true),
    })
  }

}
