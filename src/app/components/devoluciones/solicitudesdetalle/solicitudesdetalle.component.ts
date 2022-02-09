import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatHorizontalStepper, MatStepper, MatVerticalStepper } from '@angular/material/stepper';
import { ISolicitudes } from 'src/app/models/devoluciones/devoluciones';
import { IComprobantes, IComprobantesDetalle, IMotivosNC } from 'src/app/models/intranet/comprobantes';
import { IReturn } from 'src/app/services/common/return';
import { SolicitudesService } from 'src/app/services/devoluciones/solicitudes.service';
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
  @ViewChild('stepper') stepper: MatStepper;

  today = new Date();
  comprobantes: IComprobantes;
  comprobantesdetalle: IComprobantesDetalle[] = [];
  series: string[];
  motivos: IMotivosNC[];
  resValidacion: IReturn;
  validarComprobanteFormGroup: FormGroup;
  SolicitudesFormGroup: FormGroup;
  SolicitudesdetalleFormGroup: FormGroup;
  rowIndex: number;
  cantidaddevolucion: number;

  step1: boolean;
  step2: boolean;
  stepCon: boolean;
  smallScreen: boolean;
  isLinear: boolean;

  displayedColumns: string[] = ['descripcion', 'modelo', 'cantidadtotal', 'medida', 'cantidad'];

  constructor(private _formBuilder: FormBuilder,
    private comprobantesService: ComprobantesService,
    private solictudesService: SolicitudesService,
    private breakpointObserver: BreakpointObserver) {
      breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small
      ]).subscribe(result => {
        this.smallScreen = result.matches;
    });
    }

  ngOnInit() {
    this.step1 = false
    this.step2 = false
    this.stepCon = true

    this.resValidacion = <IReturn>{};
    this.comprobantesService.SeriesComprobantes().subscribe(res => this.series = res)
    this.crearValidarComprobanteFormGroup();
    this.crearSolicitudesFormGroup();
    this.comprobantesService.MotivosNC().subscribe(res => this.motivos = res)
  }


  resetear() {
    this.crearSolicitudesFormGroup();
    this.resValidacion = <IReturn>{};
    this.stepper.reset();
  }

  GuardarSolicitud() {
    let solicitud: ISolicitudes = this.SolicitudesFormGroup.getRawValue()
    this.solictudesService.post(solicitud).subscribe(
      res => {
        if (res.Success) {
          this.stepper.next();
        } else {
          console.log('Esta mal wachin  ')

        }
      }
    )
  }


  validarComprobante() {

    let serie = this.validarComprobanteFormGroup.controls.seriecomprobante.value;
    let numero = this.validarComprobanteFormGroup.controls.numerocomprobante.value;
    this.comprobantesService.ObtenerNumeroOperacion(serie, numero).subscribe(
      res => {
        this.resValidacion = res;
        if (+res.Code != 0) {

          this.comprobantesService.get(+res.Code).subscribe(
            result => {
              this.comprobantes = result;
              this.comprobantesdetalle = result.items;

              this.SolicitudesFormGroup.patchValue({
                idcliente: result.idcliente,
                idvendedor: result.idvendedor,
                ordencompra: result.pedido,
                numerooperacion: result.numerooperacion
              })

              this.comprobantesdetalle.forEach(element => {
                this.crearSolicitudesDetalleFormGroup();
                this.SolicitudesdetalleFormGroup.patchValue({
                  secuencia: element.secuencia,
                  codigo: element.codigo,
                  modelo: element.modelo,
                  descripcionarticulo: element.descripcion,
                  idmodelo: element.idmodelo,
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
          this.stepper._steps
          this.step1 = true;

          this.stepper.next();

        } else {
        }
      }
    )
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  SaveCantidad(index: number, valor: any) {
    (this.SolicitudesFormGroup.controls.items as FormArray).at(index).patchValue({ cantidad_devolucion: +valor });
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
      nombresolicitante: new FormControl('', Validators.required),
      fechasolicitud: new FormControl(this.today),
      ordencompra: new FormControl('', Validators.required),
      fechaordencompra: new FormControl(''),
      motivo: new FormControl('', Validators.required),
      fecha_registro: new FormControl(''),
      fecha_modificacion: new FormControl(''),
      activo: new FormControl(true),
      idmotivo: new FormControl(1, Validators.required),
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
