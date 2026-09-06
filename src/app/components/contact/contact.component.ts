import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RevealDirective } from '../../directives/reveal.directive';

// Your Formspree form endpoint. Replace the ID if you ever create a new form.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvkobojz';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  form: FormGroup;
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  // Edit these to update your contact details across the section.
  email = 'codingala@gmail.com';
  whatsapp = '923217177534'; // international format, no + or spaces, used for the wa.me link
  whatsappDisplay = '0321 7177534';
  github = 'https://github.com/creativity-with-arslan';
  linkedin = 'https://www.linkedin.com/in/arslan-ali-b9b831392';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'sending';
    this.http.post(FORMSPREE_ENDPOINT, this.form.value, {
      headers: { Accept: 'application/json' },
    }).subscribe({
      next: () => {
        this.status = 'success';
        this.form.reset();
      },
      error: () => {
        this.status = 'error';
      },
    });
  }
}
