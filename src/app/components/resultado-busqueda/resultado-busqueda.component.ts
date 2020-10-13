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
  termino = ''

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) { 

    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino
      this.resultado = this._heroesService.buscarHeroes(params.termino)
    })
  }

  ngOnInit(): void {
  }

}
