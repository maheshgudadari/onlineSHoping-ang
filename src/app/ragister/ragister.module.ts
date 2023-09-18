import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ragisterRoutingModule } from './ragister-routing.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ragisterRoutingModule
  ]
})
export class RagisterModule { }
