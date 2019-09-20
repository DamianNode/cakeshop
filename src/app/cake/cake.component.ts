import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cake } from '../models/cake';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {
  @Input() cake: Cake;
  @Output() removeCake = new EventEmitter<Cake>();
  @Output() editCake = new EventEmitter<Cake>();

  constructor() { }

  ngOnInit() {
  }

  remove(): void {
    this.removeCake.emit(this.cake);
  }

  edit(): void {
    this.editCake.emit(this.cake);
  }
}
