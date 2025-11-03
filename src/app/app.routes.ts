import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Clients } from './components/clients/clients';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'prodotti', component: Products },
  { path: 'clienti', component: Clients },
  { path: 'contatti', component: Contact },
  { path: '**', redirectTo: '' }
];
