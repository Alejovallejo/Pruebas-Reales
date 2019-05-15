import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PagesComponent } from '../pages/pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';





@NgModule({
    declarations: [

    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
 
    ],
    imports :[
        RouterModule,
        CommonModule,
        PipesModule
    ],


    exports: [

        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent

    ]
})


export class SharedModule{}