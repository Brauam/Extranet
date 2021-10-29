import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  destroyed = new Subject<void>();
  vars: MatDrawerMode;
  open: boolean = true;
  vMode: string;
  constructor(breakpointObs: BreakpointObserver) {
    breakpointObs.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).pipe(takeUntil(this.destroyed)).subscribe(
      res => {
        if (res.matches) {
          this.vars = 'over'    
        } else {
          this.vars = 'side'              
        }
      }
    )
  }

  addItem() {
    this.open = !this.open
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
