import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  color: string = '#000';
  bgColor: string = '#000';

  constructor() {}

  ngOnInit(): void {}

  changeColor(e: Event) {
    this.color = (e.target as HTMLInputElement).value;
  }

  changeBgColor(e: Event) {
    this.bgColor = (e.target as HTMLInputElement).value;
  }
}
