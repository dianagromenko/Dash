import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from "@angular/router";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WidingComponent } from './widing/widing.component';
import { LoveComponent } from './love/love.component';
import { FamilyComponent } from './family/family.component';
import { OneComponent } from './one/one.component';
import { FotobookComponent } from './fotobook/fotobook.component';
import { FotoboxComponent } from './fotobox/fotobox.component';
import { FotoholstComponent } from './fotoholst/fotoholst.component';
import { PalaroidComponent } from './palaroid/palaroid.component';
import { GetmerridComponent } from './getmerrid/getmerrid.component';
import { StyleComponent } from './style/style.component';
import { ChildrenComponent } from './children/children.component';
import { IamComponent } from './iam/iam.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  {path:'portfolio', component:PortfolioComponent},
  {path:'widing', component:WidingComponent},
  {path:'love', component:LoveComponent},
  {path:'family', component:FamilyComponent},
  {path:'one', component:OneComponent},
  {path:'fotobook', component:FotobookComponent},
  {path:'fotobox', component:FotoboxComponent},
  {path:'fotoholst', component:FotoholstComponent},
  {path:'palaroid', component:PalaroidComponent},
  {path:'getmerrid', component:GetmerridComponent},
  {path:'style', component:StyleComponent},
  {path:'children', component:ChildrenComponent},
  {path:'iam', component:IamComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
