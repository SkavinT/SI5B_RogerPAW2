import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Fixed typo: changed 'styleUrl' to 'styleUrls'
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted: boolean = false;
  executeState: string = "";
  showSpinner = false;
  private registerSub: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]] // Fixed missing comma
    });
  }
  onsSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.showSpinner = true;
    this.executeState = "Loading...";
    // Add your code here
  }
}