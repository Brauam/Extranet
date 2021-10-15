import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  open : boolean = false;
  constructor() { }

  addItem() {
    this.open = (this.open = !this.open)
  }

  ngOnInit() {
  }

}
