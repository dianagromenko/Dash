import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WidingComponent } from './widing/widing.component';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoveComponent } from './love/love.component';
import { FamilyComponent } from './family/family.component';
import { OneComponent } from './one/one.component';
import { FotobookComponent } from './fotobook/fotobook.component';
import { FotoboxComponent } from './fotobox/fotobox.component';
import { CarouselModule } from 'ngx-bootstrap';
import { FotoholstComponent } from './fotoholst/fotoholst.component';
import { PalaroidComponent } from './palaroid/palaroid.component';
import { GetmerridComponent } from './getmerrid/getmerrid.component';
import { StyleComponent } from './style/style.component';
import { ChildrenComponent } from './children/children.component';
import { IamComponent } from './iam/iam.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from "./email.service";


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    WidingComponent,
    LoveComponent,
    FamilyComponent,
    OneComponent,
    FotobookComponent,
    FotoboxComponent,
    FotoholstComponent,
    PalaroidComponent,
    GetmerridComponent,
    StyleComponent,
    ChildrenComponent,
    IamComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
