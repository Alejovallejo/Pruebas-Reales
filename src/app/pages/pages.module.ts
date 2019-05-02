import { NgModule } from "@angular/core";
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';

//Rutas
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports: [
        SharedModule,
        CommonModule,
        PAGES_ROUTES
    ]

})

export class PagesModule{}