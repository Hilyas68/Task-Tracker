import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TASKS} from '../../mock-taks';
import {Task} from '../../Task'; 
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task : Task = TASKS[0];
  @Input() faTimes = faTimes;
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task : Task){
    this.onDeleteTask.emit(task);
  }

}
