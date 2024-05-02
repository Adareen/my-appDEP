import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AggiungiComponent } from './aggiungi/aggiungi.component';
import { NoleggioComponent } from './noleggio/noleggio.component';
import { BarcaComponent } from './noleggio/barca/barca.component';
import { MacchinaComponent } from './noleggio/macchina/macchina.component';

const routes: Routes = [
  {path: 'noleggio', component:NoleggioComponent, children: [{path: 'barche', component: BarcaComponent}, {path: 'auto', component:MacchinaComponent}], },
  {path: '', component:HomeComponent},
  {path: 'aggiungi',component:AggiungiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
