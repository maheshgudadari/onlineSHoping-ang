import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ragisterRoutingModule } from './ragister-routing.module';
import { RagisterComponent } from './ragister/ragister.component';
import { ReactiveFormsModule } from  '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RagisterComponent],
  imports: [
    CommonModule,
    ragisterRoutingModule,
    ReactiveFormsModule
  ]
})
export class RagisterModule { }
