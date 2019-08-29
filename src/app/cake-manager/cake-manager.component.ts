import { Component, OnInit } from '@angular/core';
import { CakeDialogComponent } from '../cake-dialog/cake-dialog.component';
import { MatDialog } from '@angular/material';
import { CakeService } from '../services/cake-list.service';
import { Cake} from '../models/cake';

@Component({
  selector: 'app-cake-manager',
  templateUrl: './cake-manager.component.html',
  styleUrls: ['./cake-manager.component.scss']
})
export class CakeManagerComponent implements OnInit {
  cakes: Cake[] = [];

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
    this.cakeService.deleteCake(id).subscribe(
      data => this.loadCakes()
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CakeDialogComponent, {
      panelClass: 'app-modal'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}

