import { Component, OnInit, DoCheck } from '@angular/core';
import { Todo } from '../models/todo';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  list: Todo[] = [
    {id: 1, title: 'name', description: '123', dateStart: new Date(), dateEnd: null},
    {id: 2, title: 'name2', description: '123', dateStart: new Date(), dateEnd: null}
  ];

  done: Todo[] = [];
  title: string;
  title2: string;
  flag = false;
  flagDone = false;

  constructor() { }

  addToList() {
    const item: Todo = {
      id: length + 1,
      title: 'title' + (++length),
      description: 'description',
      dateStart: new Date(),
      dateEnd: null
    };
    this.list.push(item);
    console.log(this.list);
  }

  toggle() {
    this.flag = !this.flag;
    if (this.flag === false) {
      this.title = '';
    }
  }

  toggleDone() {
    this.flagDone = !this.flagDone;
    if (this.flagDone === false) {
      this.title2 = '';
    }
  }

  removeToList() {
    if (this.done.length > 0) {
      this.done.shift();
    }
  }
  updateToList(event: CdkDragDrop<string[]>) {
    if (event.container.id === 'cdk-drop-list-1') {
      this.done[event.currentIndex].dateEnd = new Date();
    } else {
      this.list[event.currentIndex].dateEnd = null;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      this.updateToList(event);
    }
  }

  ngOnInit(): void {
  }

}
