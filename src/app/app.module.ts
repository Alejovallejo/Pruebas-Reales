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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './services/settigns/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './services/services.index';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    SettingsService,
    LoginGuardGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
