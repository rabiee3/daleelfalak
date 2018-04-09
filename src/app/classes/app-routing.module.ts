import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from '../views/home/home.component';
import { ContactComponent } from '../views/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Contact', component: ContactComponent}
  ,

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
 ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, ContactComponent];