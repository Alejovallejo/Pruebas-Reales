import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { APP_ROUTES } from './app.routes';

//Modulos
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { RegisterComponent } from './login/register.component';
import { SharedModule } from './shared/shared.module';

import { FormsModule } from '@angular/forms';
import { SettingsService } from './services/settigns/settings.service';
import * as fs from 'file-system';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    SharedModule,
    FormsModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
