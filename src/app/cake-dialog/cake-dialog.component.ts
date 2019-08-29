import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';
import { CakeService } from '../services/cake-list.service';

@Component({
  selector: 'app-cake-dialog',
  templateUrl: './cake-dialog.component.html',
  styleUrls: ['./cake-dialog.component.scss']
})
export class CakeDialogComponent implements OnInit {
  form: FormGroup;
  numbersOption: number[] = [4, 8, 12];
  selectedFile?: File;

  constructor(public dialogRef: MatDialogRef<CakeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private cakeService: CakeService) { }

  ngOnInit() {
    if (this.data) {
      this.form = new FormGroup({
        id: new FormControl(this.data.id),
        name: new FormControl(this.data.name),
        imageUrl: new FormControl(this.data.imageUrl),
        description: new FormControl(this.data.description),
        numberOfPortion: new FormControl(this.data.numberOfPortion),
        cakePrice: new FormControl(this.data.cakePrice),
        portionPrice: new FormControl(this.data.portionPrice)
      });
    } else {
      this.form = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        imageUrl: new FormControl(),
        description: new FormControl(),
        numberOfPortion: new FormControl(),
        cakePrice: new FormControl(),
        portionPrice: new FormControl()
      });
    }
  }

  save() {
    this.dialogRef.close();
    this.cakeService.getCakes();
  }

  saveData() {
    const cakeAttrs = this.form.value;
    this.cakeService.saveCake(cakeAttrs).subscribe(
      () => this.save(),
      () => alert('Nie udało się zapisać pilota!')
    );
  }

  onFileChanged(file) {
    this.selectedFile = file.target.files[0].name;
  }
}
