import { Component, OnInit } from '@angular/core';
import { ItemNoleggio } from '../model/item.model';
import { NoloService } from '../nolo.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-barca',
  templateUrl: './barca.component.html',
  styleUrl: './barca.component.css',
})
export class BarcaComponent implements OnInit {
  toggleDisp(indice: number) {
    this.listaBarche[indice].disponibilita =
      !this.listaBarche[indice].disponibilita;
    console.log(this.listaBarche[indice].disponibilita + ' indice ' + indice);

    this.http
      .patch('http://localhost:3000/barca/' + indice, { disponibilita: false })
      .subscribe((res) => {
        console.log(res);
      });


    this.noloServ.barchePrenotate.push(this.listaBarche[indice]);

    for (const barca of this.noloServ.barchePrenotate) {
      console.log(barca.marca);
      
    }
    
  }
  

  constructor(public noloServ: NoloService, public http: HttpClient) {
    // super(macchina.marca,macchina.modello, macchina.disponibilita);
  }

  //barchePrenotate: ItemNoleggio[] = [];

  listaBarche: ItemNoleggio[];

  barchePrenotate=this.noloServ.barchePrenotate;


 



  
  

  ngOnInit(): void {
    this.noloServ.getBarche().subscribe((a) => {
      this.listaBarche = a;
    });
    console.log(this.listaBarche);

  }
}
