import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friends-list';
  // create an array named friends and populate with some friends
  friends:string[] = ["Sean", "Ron", "Julie", "Phil"];
}
