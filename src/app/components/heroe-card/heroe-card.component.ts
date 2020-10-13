import { Component, OnInit, Input } from '@angular/core';
import {HeroesService} from '../../services/heroes.service'

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:any = {}

  constructor(private _heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  goTo(id){
    this._heroesService.goToHeroe(id)
  }

}
