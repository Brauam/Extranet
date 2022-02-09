import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ISolicitudes } from 'src/app/models/devoluciones/devoluciones';
import { SolicitudesService } from 'src/app/services/devoluciones/solicitudes.service';




@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit, AfterViewInit {

  solicitudes:ISolicitudes[];
  displayedColumns: string[] = ['motivoNC', 'comprobante', 'guia', 'fechasolicitud'];
  ngAfterViewInit() {
  }
  constructor(private solicitudService: SolicitudesService) { }


  ngOnInit() {
    this.Listar()
  }


  Listar(){
    this.solicitudService.getAll().subscribe(
      res => {
        this.solicitudes = res;
    })
  }

}
