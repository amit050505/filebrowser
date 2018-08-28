import { EditService } from './edit.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GridEditFormComponent } from './edit-form.component';
import { ViewDetailsComponent } from './view.component';
import { HttpModule } from '@angular/http';
import { AlteroneComponent } from './alterone/alterone.component';
import { DropDownListFilterComponent } from './dropdownlist-filter-component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {  FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'alterone', component: AlteroneComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GridEditFormComponent,
    ViewDetailsComponent,
    AlteroneComponent,
    DropDownListFilterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    DialogsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpModule,
    DropDownsModule
  ],
  providers: [EditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
