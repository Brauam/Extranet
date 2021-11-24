import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { empty } from 'rxjs';
import { IComprobantes } from 'src/app/models/intranet/comprobantes';
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

  comprobantes: IComprobantes;
  series: string[];
  resValidacion: IReturn;
  validarComprobanteFormGroup: FormGroup;
  SolicitudesFormGroup: FormGroup;
  SolicitudesdetalleFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder,
    private comprobantesService: ComprobantesService) { }

  ngOnInit() {
    this.resValidacion = <IReturn>{};
    this.comprobantesService.SeriesComprobantes().subscribe(res => this.series = res)
    this.crearValidarComprobanteFormGroup();
    this.crearSolicitudesFormGroup();
    this.crearSolicitudesDetalleFormGroup();

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
              this.comprobantes = result,
                console.log(this.comprobantes)
            }
          )
        } else {
          console.log(res.Message)
        }
      }
    )
  }

  crearValidarComprobanteFormGroup() {
    this.validarComprobanteFormGroup = this._formBuilder.group({
      seriecomprobante: new FormControl(),
      numerocomprobante: new FormControl(),
    })
  }

  crearSolicitudesFormGroup() {
    this.SolicitudesFormGroup = this._formBuilder.group({
      seriecomprobante: new FormControl('', Validators.required),
      numerocomprobante: new FormControl('', Validators.compose([Validators.pattern('[0-9]*'), Validators.required, Validators.min(1)])),
    })
  }


  crearSolicitudesDetalleFormGroup() {
    this.SolicitudesdetalleFormGroup = this._formBuilder.group({
      seriecomprobante: new FormControl(''),
      numerocomprobante: new FormControl(''),
      serieguia: new FormControl(''),
      numeroguia: new FormControl(''),
    })
  }

}
