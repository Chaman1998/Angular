import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name = "Chaman Sarkar"
  status = "Single"
  salary = 40000
  isBtnDisabled = true
  placeHolder = "Insert text"
  value = ""

  onchange(e: Event) {
    const value = (e.target as HTMLInputElement).value  //Here we declear that the event is a HTML input type,
    //So that we fetch the value from Input box

    //for show the value in the Console log
    // console.log(value);

    //for show the value in the html on going type changes
    this.value = value
  }

  //create users data
  users = [
    {name: "chaman", isSingle: true, salary: 10000},
    {name: "nitish", isSingle: false, salary: 20000},
    {name: "koushik", isSingle: true, salary: 15000},
  ]
}
