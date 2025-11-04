import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Clients } from './components/clients/clients';
import { Contact } from './components/contact/contact';
import { Auth } from './components/auth/auth';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'auth', component: Auth },
  { path: '', component: Home, canActivate: [authGuard] },
  { path: 'prodotti', component: Products, canActivate: [authGuard] },
  { path: 'clienti', component: Clients, canActivate: [authGuard] },
  { path: 'contatti', component: Contact, canActivate: [authGuard] },
  { path: '**', redirectTo: 'auth' }
];
