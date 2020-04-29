import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  title: string;
  description: string;

  constructor() { }

  @Output() addData = new EventEmitter<string>();

  change() {
    this.addData.emit(this.title + ' ' + this.description);
  }

  ngOnInit(): void {
  }

}
