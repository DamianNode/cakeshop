import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cake } from '../models/cake';

@Component({
  selector: 'app-cake-dialog',
  templateUrl: './cake-dialog.component.html',
  styleUrls: ['./cake-dialog.component.scss']
})
export class CakeDialogComponent implements OnInit {
  form: FormGroup;
  numbersOption: number[] = [4, 8, 12];
  selectedFile?: string;
  @Output() newCake = new EventEmitter<Cake>();

  constructor(public dialogRef: MatDialogRef<CakeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
      this.form = new FormGroup({
        id: new FormControl(this.data.id),
        name: new FormControl(this.data.name, [Validators.required]),
        imageUrl: new FormControl(this.data.imageUrl),
        description: new FormControl(this.data.description),
        numberOfPortion: new FormControl(this.data.numberOfPortion, [Validators.required]),
        cakePrice: new FormControl(this.data.cakePrice, [Validators.required]),
        portionPrice: new FormControl({value: 0, disabled: true}, [Validators.required])
      });
  }

  save() {
    this.dialogRef.close();
  }

  saveData() {
    const cakeAttrs = this.form.value;
    cakeAttrs.imageUrl = this.selectedFile;
    this.newCake.emit(cakeAttrs);
    this.save();
  }

  onFileChanged(file) {
    this.selectedFile = `assets/${file.target.files[0].name}`;
  }
}
