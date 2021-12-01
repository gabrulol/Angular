import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoupasMComponent } from './roupas-m/roupas-m.component';
import { RoupasFComponent } from './roupas-f/roupas-f.component';
import { RoupasIComponent } from './roupas-i/roupas-i.component';
import { SapatosAdultosComponent } from './sapatos-adultos/sapatos-adultos.component';
import { SapatosInfantisComponent } from './sapatos-infantis/sapatos-infantis.component';
import { ModaIntimaComponent } from './moda-intima/moda-intima.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { RelogiosComponent } from './relogios/relogios.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { AcessoriosParaCasaComponent } from './acessorios-para-casa/acessorios-para-casa.component';
import { CapsulaComponent } from './capsula/capsula.component';

@NgModule({
  declarations: [
    AppComponent,
    RoupasMComponent,
    RoupasFComponent,
    RoupasIComponent,
    SapatosAdultosComponent,
    SapatosInfantisComponent,
    ModaIntimaComponent,
    AcessoriosComponent,
    RelogiosComponent,
    PerfumesComponent,
    AcessoriosParaCasaComponent,
    CapsulaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
