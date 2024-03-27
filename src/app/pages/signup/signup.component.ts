import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signupForm = this.formBuilder.group({
      Name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // Get the form values
      const formData = this.signupForm.value;

      // Fetch existing data from local storage or initialize an empty array
      let dataArray = JSON.parse(localStorage.getItem('data') || '[]');

      // Push the new form data to the array
      dataArray.push(formData);

      // Convert the array back to a string and store it in local storage
      localStorage.setItem('data', JSON.stringify(dataArray));

      // Reset the form
      this.signupForm.reset();
    }
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(group: FormGroup | null): { [s: string]: boolean } | null {
    if (group === null) {
      return null;
    }

    const password = group.get('password')!.value;
    const confirmPassword = group.get('confirmPassword')!.value;
    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }
}
