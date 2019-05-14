import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService,
      SharedService,
      UsuarioService, 
      SidebarService
    } from './services.index';
    
import { HttpClientModule } from '@angular/common/http';







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
    UsuarioService
  ]
})
export class ServiceModule { }
