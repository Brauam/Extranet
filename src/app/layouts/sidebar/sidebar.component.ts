import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';


interface FoodNode {
  name: string;
  icon:string;
  routa:string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Devoluciones',
    icon: 'phone',
    routa: 'devoluciones/solicitudes',
    children: [
      {name: 'Solicitudes',icon:'phone',routa:''},
      
    ]
  }, {
    name: 'Home',
    icon: 'phone',
    routa: 'home',
    children: [
      {
        name: 'Green',icon:'phone',routa:'',
        children: [
          
        ]
      }, {
        name: 'Orange',icon:'phone',routa:'',
        children: [
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  @Input() open : boolean = false;
  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;


  ngOnInit() {
  }


    
  

}
