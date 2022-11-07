import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  textSize: string = 'Paragraph';
  fonts: string[] = [
    'Arial',
    'Courier New',
    'Georgia',
    'Helvetica',
    'Segoe UI',
    'Sans-Serif',
    'Times New Roman',
    'Impact',
  ];
  currentFont: string = this.fonts[0];
  color: string = '#000';
  bgColor: string = '#000';

  constructor() {}

  ngOnInit(): void {}

  changeTextSize(e: Event) {
    this.textSize = (e.target as HTMLElement).innerText;
  }

  changeFont(font: string) {
    this.currentFont = font;
  }

  changeColor(e: Event) {
    this.color = (e.target as HTMLInputElement).value;
  }

  changeBgColor(e: Event) {
    this.bgColor = (e.target as HTMLInputElement).value;
  }
}
