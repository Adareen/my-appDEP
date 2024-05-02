import { Component } from '@angular/core';
import { NoloService } from '../noleggio/nolo.service';
import { ItemNoleggio } from '../noleggio/model/item.model';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrl: './aggiungi.component.css'
})
export class AggiungiComponent {

  constructor(private noloServ:NoloService){}

  newItem: ItemNoleggio;
  marcaItem: string;
  modelloItem: string;
  disponibilitaItem: boolean=true;
  prezzoItem: number;


  url:string='';


  selezionato:string;

  // cambia il mio url indirizzandomi per la corretta post
  onSelezioneCambiata(evento: any) {
    this.selezionato = evento.target.value;
    if (this.selezionato === 'barca') {
      this.url='http://localhost:3000/barca';
    } else if (this.selezionato === 'auto') {
      this.url='http://localhost:3000/auto';
    }

    return this.url;
  }

  inviaRichiesta() {

    console.log(this.url);
    
    this.newItem={
      marca: this.marcaItem,
      modello: this.modelloItem,
      disponibilita: this.disponibilitaItem,
      prezzo: Number(this.prezzoItem)
    }

    console.log(this.newItem);
    

    this.noloServ.postItem(this.url, this.newItem );
  }

 
}
