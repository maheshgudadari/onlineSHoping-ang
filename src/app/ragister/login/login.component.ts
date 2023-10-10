import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,) { }

  ngOnInit() {
    this.createForm();
   


  }
  createForm() {
    this.loginForm =this.fb.group({
      email:['', Validators.required],
      passward:['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted =true;
  }

}
