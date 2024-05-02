import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NoleggioComponent } from './noleggio/noleggio.component';
import { AggiungiComponent } from './aggiungi/aggiungi.component';

import { MacchinaComponent } from './noleggio/macchina/macchina.component';
import { BarcaComponent } from './noleggio/barca/barca.component';
import { ItemNoleggio } from './noleggio/model/item.model';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NoleggioComponent,
    AggiungiComponent,

    MacchinaComponent,
    BarcaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
