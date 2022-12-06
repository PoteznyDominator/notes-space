import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() tag: string;
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  removeTag(): void {
    this.remove.emit();
  }
}
