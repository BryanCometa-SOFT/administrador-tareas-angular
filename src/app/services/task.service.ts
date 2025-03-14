import { inject, Injectable, signal } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Task } from '../interfaces/task.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { Firestore, collection, addDoc, collectionData, doc, getDoc, updateDoc, query, where, deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskCollection;  

  constructor(private firestore: Firestore) {
    this.taskCollection = collection(this.firestore, 'tasks'); 
  }

  // Obtener todas las tareas
  getTasks(): Observable<Task[]> {
    return collectionData(this.taskCollection, { idField: 'id' }) as Observable<Task[]>;
  }

  // Agregar una tarea
  addTask(task: Task) {
    console.log("addTask")

    // Elimino el campo id para evitar errores con firebase
    delete task.id; // Eliminar el campo `id`

    return addDoc(this.taskCollection, task);
  }

 // Actualizar una tarea (título, descripción y estado)
  updateTask(task: Task) {
    console.log("updateTask")
    const taskDoc = doc(this.firestore, `tasks/${task.id}`);
    return updateDoc(taskDoc, { 
      title: task.title, 
      description: task.description, 
      status: task.status 
    }); 
  }

  // Actualizar el `status` de una tarea
  updateTaskStatus(id: string, status: string) {
    const taskDoc = doc(this.firestore, `tasks/${id}`);
    return updateDoc(taskDoc, { status }); // Actualiza el campo `status`
  }

  // Eliminar una tarea
  deleteTask(id: string) {
    const taskDoc = doc(this.firestore, `tasks/${id}`);
    return deleteDoc(taskDoc);
  }
}
