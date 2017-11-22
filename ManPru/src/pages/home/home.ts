import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';

import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: any[] = [];

  constructor(public navCtrl: NavController, public tasksService: TasksServiceProvider, public alertCtrl: AlertController,) {

  }

  // Ionic's or Angular's triggers
  ionViewDidLoad(){
    this.getAllTasks();
  }

  // public methods
  deleteTask(task: any, index){
    this.tasksService.delete(task)
      .then(response => {
        console.log( response );
        this.tasks.splice(index, 1);
      })
      .catch( error => {
        console.error( error );
      })
  }

  getAllTasks(){
    this.tasksService.getAll()
      .then(tasks => {
        console.log(tasks);
        this.tasks = tasks;
      })
      .catch( error => {
        console.error( error );
      })
  }

  openAlertNewTask(){
    let alert = this.alertCtrl.create({
      title: 'Crear tarea',
      message: 'escribe el nombre de la tarea',
      inputs: [
        {
          name: 'title',
          placeholder: 'Digitar nueva tarea.',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () =>{
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data)=>{
            data.completed = false;
            this.tasksService.create(data)
              .then(response => {
                this.tasks.unshift( data );
              })
              .catch( error => {
                console.error( error );
              })
          }
        }
      ]
    });
    alert.present();
  }

  updateTask(task, index){
    task = Object.assign({}, task);
    task.completed = !task.completed;
    this.tasksService.update(task)
      .then( response => {
        this.tasks[index] = task;
      })
      .catch( error => {
        console.error( error );
      })
  }

}
