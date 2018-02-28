import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) matMenuTriggerFor: MatMenuTrigger;
  title = 'facebook';
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  foods = [
    {value: 'sebraeHomolog', viewValue: 'Sebrae Homolog'},
    {value: 'empretex', viewValue: 'Empretec'}
  ];
  selected2: any;
  constructor(){
    this.selected2 = 'sebraeHomolog';
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'}
];

