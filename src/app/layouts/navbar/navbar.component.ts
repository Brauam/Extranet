import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();

  ngOnInit() {
  }

  toggle() {
    this.newItemEvent.emit();
  }

  constructor() {
  }


}
