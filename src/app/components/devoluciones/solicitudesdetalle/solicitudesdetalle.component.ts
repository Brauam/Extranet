import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitudesdetalle',
  templateUrl: './solicitudesdetalle.component.html',
  styleUrls: ['./solicitudesdetalle.component.scss']
})
export class SolicitudesdetalleComponent implements OnInit {

  validarComprobanteFormGroup: FormGroup;
  SolicitudesFormGroup: FormGroup;
  SolicitudesdetalleFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.crearValidarComprobanteFormGroup();
    this.crearSolicitudesFormGroup();
    this.crearSolicitudesDetalleFormGroup();
  }

  crearValidarComprobanteFormGroup() {
    this.validarComprobanteFormGroup = this._formBuilder.group({
      tipocomprobante: new FormControl(''),
      seriecomprobante: new FormControl(),
      numerocomprobante: new FormControl(),
      serieguia: new FormControl(),
      numeroguia: new FormControl(),
    })
  }

  crearSolicitudesFormGroup() {
    this.SolicitudesFormGroup = this._formBuilder.group({
      seriecomprobante: new FormControl(''),
      numerocomprobante: new FormControl(''),
      serieguia: new FormControl(''),
      numeroguia: new FormControl(''),
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
