import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService,
      SharedService,
      UsuarioService, 
      SidebarService,
      SubirArchivoService
    } from './services.index';

import { HttpClientModule } from '@angular/common/http';
import { ModealUploadService } from '../components/modal-upload/modal-upload.service';








@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    SubirArchivoService,
    ModealUploadService
  ]
})
export class ServiceModule { }
