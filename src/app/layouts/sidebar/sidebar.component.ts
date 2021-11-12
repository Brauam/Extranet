import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';


interface FoodNode {
  name: string;
  icon: string;
  ruta?: string;
  children?: FoodNode[];
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  panelOpenState = false;
  model: FoodNode[] = [
    {
      name: 'Devoluciones de Mercaderia',
      icon: 'summarize',
      children: [
        { name: 'Solicitudes', icon: 'assignment', ruta: '/devoluciones/solicitudes' },
        { name: 'Segundo', icon: 'assignment', ruta: '/devoluciones/solicitudes' },
      ]
    }
  ];

  @Input() open: boolean = false;
  constructor() {
  }

  ngOnInit() {
  }


}
