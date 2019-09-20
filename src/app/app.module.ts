import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeManagerComponent } from './cake-manager/cake-manager.component';
import { CakeComponent } from './cake/cake.component';
import { CakeService} from './services/cake-list.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CakeDialogComponent } from './cake-dialog/cake-dialog.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeManagerComponent,
    CakeComponent,
    CakeDialogComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule,
  ],
  entryComponents: [CakeDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
