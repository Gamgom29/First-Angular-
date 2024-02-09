import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  labelCheck:boolean = false;
  nameIn:string = '';
  ageIn:string = '';
  emailIn:string = '';
  passIn:string = '';
}
