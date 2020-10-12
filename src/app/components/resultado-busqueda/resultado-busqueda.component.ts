import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HeroesService} from '../../services/heroes.service'

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {

  resultado: any[] = []

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) { 

    this.activatedRoute.params.subscribe( params => {
      this.resultado = this._heroesService.buscarHeroes(params.termino)
      console.log(this.resultado)
    })
  }

  ngOnInit(): void {
  }

  goTo(id){
    this._heroesService.goToHeroe(id)
  }

}
