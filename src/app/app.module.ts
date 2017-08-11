import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePiePaginaComponent } from './home-pie-pagina/home-pie-pagina.component';
import { HomeContactanosComponent } from './home-contactanos/home-contactanos.component';
import { HomeNosotrosComponent } from './home-nosotros/home-nosotros.component';
import { HomeGaleriaComponent } from './home-galeria/home-galeria.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomePortadaComponent } from './home-portada/home-portada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePiePaginaComponent,
    HomeContactanosComponent,
    HomeNosotrosComponent,
    HomeGaleriaComponent,
    HomeLoginComponent,
    HomePortadaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
