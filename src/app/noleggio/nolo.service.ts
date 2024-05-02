import { Injectable } from '@angular/core';
import { ItemNoleggio } from './model/item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoloService {
  URL_BARCA: string = 'http://localhost:3000/barca';
  URL_AUTO: string = 'http://localhost:3000/auto';

  barchePrenotate: ItemNoleggio[] = [];
  autoPrenotate: ItemNoleggio[] = [];

  constructor(private http: HttpClient) {}

  getBarche() {
    return this.http.get<ItemNoleggio[]>(this.URL_BARCA);
  }

  getAuto() {
    return this.http.get<ItemNoleggio[]>(this.URL_AUTO);
  }

  postItem(url: string, item: ItemNoleggio){
    return this.http.post<ItemNoleggio>(url,item).subscribe(
      
        response => {
          console.log('Risposta:', response);
          // Gestisci la risposta qui
        },
        error => {
          console.error('Errore:', error);
          // Gestisci l'errore qui
        }
    )
    
  }
}
