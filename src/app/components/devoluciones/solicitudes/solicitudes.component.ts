import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'sssymbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  sssymbol:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , sssymbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' , sssymbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' , sssymbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , sssymbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' , sssymbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' , sssymbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , sssymbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' , sssymbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' , sssymbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' , sssymbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' , sssymbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' , sssymbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' , sssymbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' , sssymbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' , sssymbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' , sssymbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' , sssymbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' , sssymbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' , sssymbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' , sssymbol: 'Ca' },
];
