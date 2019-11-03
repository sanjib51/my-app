import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ HomeComponent } from './home/home.component';
import{ DisplaywordComponent } from './displayword/displayword.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'displayword',component:DisplaywordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
