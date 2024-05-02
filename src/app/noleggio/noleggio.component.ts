import { Component, OnInit } from '@angular/core';
import { ItemNoleggio } from './model/item.model';
import { NoloService } from './nolo.service';

@Component({
  selector: 'app-noleggio',
  templateUrl: './noleggio.component.html',
  styleUrl: './noleggio.component.css'
})
export class NoleggioComponent  implements OnInit{

  listaBarche: ItemNoleggio[];
  listaAuto: ItemNoleggio[];

  constructor(private noloService: NoloService){}

  barchePrenotate:ItemNoleggio[]=this.noloService.barchePrenotate;
  autoPrenotate:ItemNoleggio[]=this.noloService.autoPrenotate;

  






  ngOnInit(): void {
      this.noloService.getAuto().subscribe(a=>{
        this.listaAuto=a;
      });

      this.noloService.getBarche().subscribe(b=>{
        this.listaBarche=b
      });



  }

  // manca onAddAuto e onAddBarca


}
