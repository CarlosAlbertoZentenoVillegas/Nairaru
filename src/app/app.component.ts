import { Component } from '@angular/core';

import { HomePiePaginaComponent } from './home-pie-pagina/home-pie-pagina.component';
import { HomeContactanosComponent } from './home-contactanos/home-contactanos.component';
import { HomeNosotrosComponent } from './home-nosotros/home-nosotros.component';
import { HomeGaleriaComponent } from './home-galeria/home-galeria.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomePortadaComponent } from './home-portada/home-portada.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
