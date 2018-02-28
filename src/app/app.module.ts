import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule, MatToolbar, MatToolbarModule, MatButtonModule, 
  MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from "@angular/router";

import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { LinksComponent } from './links.component';
import { HomeComponent } from './home.component';
import { NotificacoesComponent } from './notificacoes.component';
import { UsuariosComponent } from './usuarios.component';
import { BackupComponent } from './backup.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    AppComponent, LinksComponent, HomeComponent, NotificacoesComponent, UsuariosComponent, BackupComponent, LoginComponent
  ],
  imports: [
    RouterModule,
    routing,
    BrowserModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }