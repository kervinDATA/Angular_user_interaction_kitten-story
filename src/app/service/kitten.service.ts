import { Injectable } from '@angular/core';

export interface Kitten {
  name: string;
  breed: string;
  birthDate: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class KittenService {
  private kittens: Kitten[] = [];
  private adoptedKittens: Kitten[] = [];

  constructor() {}

  getKittens(): Kitten[] {
    return this.kittens;
  }

  getAdoptedKittens(): Kitten[] {
    return this.adoptedKittens;
  }

  addKitten(kitten: Kitten): void {
    this.kittens.push(kitten);
  }

  adoptKitten(kitten: Kitten): void {
    this.kittens = this.kittens.filter(k => k !== kitten);
    this.adoptedKittens.push(kitten);
  }
}

