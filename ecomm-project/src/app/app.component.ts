import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecomm-project';

  // we create this data set. Now we fetch this data to the HTML page
  users = [
    { name: "chaman", isSingle: true, salary: 10000 },
    { name: "nitish", isSingle: false, salary: 20000 },
    { name: "koushik", isSingle: true, salary: 15000 },
  ]

  recevedData(e:string){
    console.log(e);
    
  }
}
