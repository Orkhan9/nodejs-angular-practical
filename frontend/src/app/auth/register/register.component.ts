import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoading=false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onRegister(form:NgForm){
    if(form.invalid) return;
    this.isLoading=true;
    this.authService.createUser(form.value.email,form.value.password)
  }

}
