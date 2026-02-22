import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TartasComponent } from './pages/tartas/tartas';
import { CupcakesComponent } from './pages/cupcakes/cupcakes';
import { GalletasComponent } from './pages/galletas/galletas';
import { PastelesComponent } from './pages/pasteles/pasteles';
import { ContactoComponent } from './pages/contacto/contacto';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tartas', component: TartasComponent },
  { path: 'cupcakes', component: CupcakesComponent },
  { path: 'galletas', component: GalletasComponent },
  { path: 'pasteles', component: PastelesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];