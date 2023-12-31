import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RagisterComponent } from './ragister/ragister.component';


const routes: Routes = [
 
 {
    path:'login',
    component:LoginComponent
 },
 {
   path:'ragister',
   component:RagisterComponent
},
 {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ragisterRoutingModule { }