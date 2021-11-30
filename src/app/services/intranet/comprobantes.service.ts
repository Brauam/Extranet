import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComprobantes, IMotivosNC } from 'src/app/models/intranet/comprobantes';
import { environment } from 'src/environments/environment';
import { IReturn } from '../common/return';

@Injectable({
  providedIn: 'root'
})
export class ComprobantesService {

  uri = environment.uri;
  constructor(private http: HttpClient) { }

  get(numerooperacion:number) {
    return this.http.get<IComprobantes>(this.uri+`Comprobantes?numerooperacion=${numerooperacion}`)
  }

  ObtenerNumeroOperacion(serie:string,numero:string) {
    return this.http.get<IReturn>(this.uri+`ObtenerNumeroOperacion?serie=${serie}&numero=${numero}`)
  }

  SeriesComprobantes() {
    return this.http.get<string[]>(this.uri+`SeriesComprobantes`)
  }

  MotivosNC() {
    return this.http.get<IMotivosNC[]>(this.uri+`MotivosNC`)
  }


}
