import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;

      // Fetch signup data from local storage
      const signupData = JSON.parse(localStorage.getItem('data') || '[]');

      // Find the matching signup data for the provided email
      const user = signupData.find((userData: any) => userData.email === email);

      // Check if user exists and password matches
      if (user && user.password === password) {
        alert('Login successful!');
        this.router.navigate(['/dashboard']);

        // Add your login logic here (e.g., navigate to dashboard)
      } else {
        alert('Invalid email or password!');
      }
    }
  }
}
