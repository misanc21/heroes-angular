import {RouterModule, Routes } from '@angular/router'
import {HomeComponent} from './components/home/home.component'
import {AboutComponent} from './components/about/about.component'
import {HeroesComponent} from './components/heroes/heroes.component'
import {HeroeComponent} from './components/heroe/heroe.component'
import {ResultadoBusquedaComponent} from './components/resultado-busqueda/resultado-busqueda.component'

const app_routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'heroes', component: HeroesComponent},
    {path:'heroe/:id', component: HeroeComponent},
    {path:'busqueda/:termino', component: ResultadoBusquedaComponent},
    {path:'**', pathMatch:'full', redirectTo:'home'}
]

export const app_routing = RouterModule.forRoot(app_routes) 