import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

export const routes: Routes = [
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component }, 
];
