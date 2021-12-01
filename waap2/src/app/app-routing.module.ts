import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoriosParaCasaComponent } from './acessorios-para-casa/acessorios-para-casa.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { CapsulaComponent } from './capsula/capsula.component';
import { ModaIntimaComponent } from './moda-intima/moda-intima.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { RelogiosComponent } from './relogios/relogios.component';
import { RoupasFComponent } from './roupas-f/roupas-f.component';
import { RoupasIComponent } from './roupas-i/roupas-i.component';
import { RoupasMComponent } from './roupas-m/roupas-m.component';
import { SapatosAdultosComponent } from './sapatos-adultos/sapatos-adultos.component';
import { SapatosInfantisComponent } from './sapatos-infantis/sapatos-infantis.component';

const routes: Routes = [
  {path: 'capsula', component: CapsulaComponent},
  {path: 'acessorios', component: AcessoriosComponent},
  {path: 'acessorios-para-casa', component: AcessoriosParaCasaComponent},
  {path: 'moda-intima', component: ModaIntimaComponent},
  {path: 'perfumes', component: PerfumesComponent},
  {path: 'relogios', component: RelogiosComponent},
  {path: 'roupas-f', component: RoupasFComponent},
  {path: 'roupas-i', component: RoupasIComponent},
  {path: 'roupas-m', component: RoupasMComponent},
  {path: 'sapatos-adultos', component: SapatosAdultosComponent},
  {path: 'sapatos-infantis', component: SapatosInfantisComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
