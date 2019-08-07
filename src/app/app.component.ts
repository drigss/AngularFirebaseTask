import { Task } from './models/taks.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(
    private db: AngularFirestore) {

  }


  ngOnInit(): void {
  this.tasks$ = this.db.collection<Task>('/tasks').valueChanges();
}
}
