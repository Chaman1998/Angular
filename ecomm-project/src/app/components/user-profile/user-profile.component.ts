import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';


//we create a funtion for add  something before the input show
function formatName(value:string){
  return "Hi, "+value
}
// -------------------------------------------------------------
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent {
  // name = "Chaman Sarkar"
  // status = "Single"
  // salary = 40000
  // isBtnDisabled = true
  // placeHolder = "Insert text"
  // value = ""

  // onchange(e: Event) {
  //   const value = (e.target as HTMLInputElement).value  //Here we declear that the event is a HTML input type,
  //   //So that we fetch the value from Input box

  //   //for show the value in the Console log
  //   // console.log(value);

  //   //for show the value in the html on going type changes
  //   this.value = value
  // }

  //create users data
  // users = [
  //   {name: "chaman", isSingle: true, salary: 10000},
  //   {name: "nitish", isSingle: false, salary: 20000},
  //   {name: "koushik", isSingle: true, salary: 15000},
  // ]


  // ------------------------------Input Decorator------------------------------------
  // @Input({alias : "username"}) name = ""
  //fetch name from app.component.ts file where we user the name
  // but when we don't use 'userName' not use 'name' then we use 'alias' in @Input
  //after that we show data using 'name', because we declear that in @Input

  //also we call the function to add a string before the username like this
  @Input({alias : "username",transform:formatName}) name = "";  //here 'username' transform to 'name', and that 'name' we use
  @Input({transform:booleanAttribute}) isSingle!:boolean; //here string transfoem to boolean value
  @Input({transform:numberAttribute}) salary!:number; //here string transfoem to number value
  // ---------------------------------------------------------------------
}
