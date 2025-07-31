import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchoolDataService } from '../../services/school-data.service';
import { SchoolInfo } from '../../models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private schoolDataService = inject(SchoolDataService);
  private fb = inject(FormBuilder);
  
  schoolInfo: SchoolInfo = this.schoolDataService.getSchoolInfo();
  
  contactForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefone: [''],
    assunto: ['', [Validators.required]],
    mensagem: ['', [Validators.required]]
  });

  // Controle de estado do envio
  isSubmitted: boolean = false;
  isLoading: boolean = false;

  onSubmit(): void {
    if (this.contactForm.valid && !this.isSubmitted) {
      this.isLoading = true;
      
      // Simula o envio da mensagem
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.isLoading = false;
        this.isSubmitted = true;
        this.contactForm.reset();
      }, 1500); // Simula 1.5 segundos de envio
    } else if (!this.contactForm.valid) {
      // Marca todos os campos como tocados para mostrar erros
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  resetForm(): void {
    this.isSubmitted = false;
    this.contactForm.reset();
    // Marca todos os campos como não tocados
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.markAsUntouched();
    });
  }

  getWhatsAppLink(): string {
    const cleanNumber = this.schoolInfo.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${cleanNumber}`;
  }
}
