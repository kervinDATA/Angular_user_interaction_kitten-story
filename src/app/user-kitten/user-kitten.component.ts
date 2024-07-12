import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KittenService, Kitten } from '../service/kitten.service';


@Component({
  selector: 'app-user-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css'
})
export class UserKittenComponent implements OnInit {
  adoptedKittens: Kitten[] = [];
  adoptedKitten: Kitten | null = null;

  constructor(private kittenService: KittenService) {}

  ngOnInit(): void {
    this.adoptedKittens = this.kittenService.getAdoptedKittens();
  }

  showDetails(kitten: Kitten): void {
    this.adoptedKitten = kitten;
  }

  hideDetails(): void {
    this.adoptedKitten = null;
  }
}
