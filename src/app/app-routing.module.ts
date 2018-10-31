import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './body/home/home.component';
import {FeaturesComponent} from './body/features/features.component';
import {PricingComponent} from './body/pricing/pricing.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'pricing', component: PricingComponent},
  // // { path: 'hero/:id',      component: HeroDetailComponent },
  // // {
  // //   path: 'heroes',
  // //   component: HeroListComponent,
  // //   data: { title: 'Heroes List' }
  // // },
  // // { path: '',
  // //   redirectTo: '/heroes',
  // //   pathMatch: 'full'
  // // },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
