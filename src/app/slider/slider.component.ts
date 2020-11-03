import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images = ['../assets/Heading1.png', '../assets/Heading2.png', '../assets/Heading3.png'];

  constructor() { }

  ngOnInit() {
  }


}
