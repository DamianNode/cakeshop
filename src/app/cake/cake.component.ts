import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeService } from '../services/cake-list.service';
import { CakeDialogComponent} from '../cake-dialog/cake-dialog.component';
import { MatDialog} from '@angular/material';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {
  @Input() cake: Cake;
  @Output() removeCake = new EventEmitter<Cake>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  remove(): void {
    this.removeCake.emit(this.cake);
  }

  openDialog(): void {
    this.dialog.open(CakeDialogComponent, {
      panelClass: 'app-modal',
      data: this.cake,
    });
  }
}
