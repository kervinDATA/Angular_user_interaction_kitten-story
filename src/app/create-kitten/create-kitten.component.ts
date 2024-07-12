import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KittenService, Kitten } from '../service/kitten.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css'
})
export class CreateKittenComponent {
  kittenForm: FormGroup;

  constructor(private fb: FormBuilder, private kittenService: KittenService) {
    this.kittenForm = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      birthDate: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.kittenForm.valid) {
      const newKitten: Kitten = this.kittenForm.value;
      this.kittenService.addKitten(newKitten);
      this.kittenForm.reset();
    }
  }
}
