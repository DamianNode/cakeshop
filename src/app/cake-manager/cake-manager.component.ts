import { Component, OnInit } from '@angular/core';
import { CakeDialogComponent } from '../cake-dialog/cake-dialog.component';
import { MatDialog } from '@angular/material';
import { CakeService } from '../services/cake-list.service';
import {Cake, CakeAttrs} from '../models/cake';

@Component({
  selector: 'app-cake-manager',
  templateUrl: './cake-manager.component.html',
  styleUrls: ['./cake-manager.component.scss']
})
export class CakeManagerComponent implements OnInit {
  cakes: Cake[] = [];
  deleteCakeInfo = false;
  addCakeInfo = false;

  constructor(private cakeService: CakeService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadCakes();
  }

  loadCakes() {
    this.cakeService.getCakes().subscribe({
      next: (cakes) => this.cakes = cakes,
      error: () => alert('Nie udało się pobrać ciast')
    });
  }

  removeCake(id: number) {
    this.showDelete();
    this.cakeService.deleteCake(id).subscribe(
      () => this.loadCakes()
    );
  }

  editCake(id: number) {
    console.log('edit cake id', id);
    this.cakeService.getCake(id).subscribe(
      (data) => this.openDialog(data)
    );
  }

  createCake() {
    this.openDialog({});
  }

  openDialog(data?): void {
    const dialogRef = this.dialog.open(CakeDialogComponent, {
      panelClass: 'app-modal',
      data
    });

    dialogRef.componentInstance.newCake.subscribe((data: CakeAttrs) => {
      if (!data.id) {
        this.showAdd();
      }
      this.cakeService.saveCake(data).subscribe(
        () => this.loadCakes()
      );
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  showDelete() {
    this.deleteCakeInfo = true;
    setTimeout(() => {
      this.deleteCakeInfo = false;
    }, 2000);
  }

  showAdd() {
    this.addCakeInfo = true;
    setTimeout(() => {
      this.addCakeInfo = false;
    }, 2000);
  }
}

