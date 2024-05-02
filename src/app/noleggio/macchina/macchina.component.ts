import { Component, Input, OnInit,  } from '@angular/core';
import { ItemNoleggio } from '../model/item.model';
import { NoloService } from '../nolo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css'
})
export class MacchinaComponent implements OnInit {


  toggleDisp(indice: number) {
    this.listaAuto[indice].disponibilita =
      !this.listaAuto[indice].disponibilita;
    console.log(this.listaAuto[indice].disponibilita + ' indice ' + indice);

    this.http
      .patch('http://localhost:3000/auto/' + indice, { disponibilita: false })
      .subscribe((res) => {
        console.log(res);
      });


    this.noloServ.autoPrenotate.push(this.listaAuto[indice]);

    for (const auto of this.noloServ.autoPrenotate) {
      console.log(auto.marca);
      
    }
    
  }

  constructor(public noloServ:NoloService, public http:HttpClient)
  {
    // super(macchina.marca,macchina.modello, macchina.disponibilita);
  }
 


 listaAuto:ItemNoleggio[];

  ngOnInit(): void {
      this.noloServ.getAuto().subscribe(a=>{this.listaAuto=a});
      console.log(this.listaAuto);
      

     
  }





}
