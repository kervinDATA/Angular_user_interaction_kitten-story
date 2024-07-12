import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateKittenComponent, ListKittenComponent, UserKittenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kitten-story';
}
