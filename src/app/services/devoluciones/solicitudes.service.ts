import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISolicitudes } from 'src/app/models/devoluciones/devoluciones';
import { environment } from 'src/environments/environment';
import { IReturn } from '../common/return';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  uri = environment.uri;
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<ISolicitudes[]>(this.uri+`Solicitudes`)
  }

  get(id:number){
    return this.http.get<ISolicitudes>(this.uri+`Solicitudes?id=${id}`)
  }

  post(item:ISolicitudes){
    return this.http.post<IReturn>(this.uri+`Solicitudes`,item)
  }

  put(item:ISolicitudes){
    return this.http.put<IReturn>(this.uri+`Solicitudes`,item)
  }
}
