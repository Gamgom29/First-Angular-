import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgDisplay:boolean = false; 
  imgSrc:string = '';
  imgs:Array<string>=["./assets/poert1.png" , "./assets/port2.png" , "./assets/port3.png"];
  displayImg(i:number):void{
    if(this.imgDisplay == false){
      this.imgDisplay = true;
      this.imgSrc = this.imgs[i]; 
    }
    else {
      this.imgDisplay = false;
    }
  }
}
