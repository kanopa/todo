import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  list: Todo[] = [];

  done: Todo[] = [];

  constructor() { }

  addToList() {
    const item: Todo = {
      id: length + 1,
      title: 'title',
      description: 'description',
      dateStart: new Date(),
      dateEnd: null
    };
    this.list.push(item);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnInit(): void {
  }

}
