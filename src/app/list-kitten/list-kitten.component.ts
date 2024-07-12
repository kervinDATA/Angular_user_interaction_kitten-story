import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KittenService, Kitten } from '../service/kitten.service';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {
  kittens: Kitten[] = [];
  selectedKitten: Kitten | null = null;

  constructor(private kittenService: KittenService) {}

  ngOnInit(): void {
    this.kittens = this.kittenService.getKittens();
  }

  adoptKitten(kitten: Kitten): void {
    this.kittenService.adoptKitten(kitten);
    this.kittens = this.kittenService.getKittens(); // Update the local list after adoption
  }

  showDetails(kitten: Kitten): void {
    this.selectedKitten = kitten;
  }

  hideDetails(): void {
    this.selectedKitten = null;
  }
}