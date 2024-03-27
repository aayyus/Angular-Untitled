import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent {
  settingForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    @Inject(DataService) private dataService: DataService
    ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.settingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
      bio: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.settingForm.valid) {
      const formData = this.settingForm.value;

      this.dataService.saveData(formData).subscribe(
        (response: any) => {
          console.log('Data saved successfully!', response);
          this.settingForm.reset();
          this.router.navigate(['/dashboard']);
        },
        (error: any) => {
          console.error('Failed to save data:', error);
        }
      );
    }
  }
}
