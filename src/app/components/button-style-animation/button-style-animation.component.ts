import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-style-animation',
  templateUrl: './button-style-animation.component.html',
  styleUrls: ['./button-style-animation.component.scss']
})
export class ButtonStyleAnimationComponent implements OnInit {

  buttonClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  onButtonClick(){
    this.buttonClicked = !this.buttonClicked;
  }
}
