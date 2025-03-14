import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

//Interfaces
import { Task } from '../../interfaces/task.model';

//Services
import { TaskService } from '../../services/task.service';

//Componentes
import { StatusBadgeComponent } from '../../components/status-badge/status-badge.component';
import { TableComponent } from '../../components/table/table.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { TaskFormComponent } from '../../components/task-form/task-form.component';

@Component({
  selector: 'app-admin-task',
  imports: [FormsModule , CommonModule, StatusBadgeComponent, TableComponent, ModalComponent, TaskFormComponent],
  templateUrl: './admin-task.component.html',
  styleUrl: './admin-task.component.css'
})
export class AdminTaskComponent {
  
  //Headers del datatable
  headers = [
    { key: 'title', label: 'Título' },
    { key: 'description', label: 'Descripción' },
    { key: 'status', label: 'Estado', isSlot: true }, // Usa slot
    { key: 'action', label: 'Acciones', isSlot: true } // Usa slot
  ];

  searchTerm: string = '';

  //Datos del datatable
  data: Task[] = []; // Se llenará con los datos de Firestore

  //Controla la apertura de la modal
  isModalOpen: boolean = false;

  selectedTask: Task | null = null; //Tarea seleccionada para editar

  constructor(private taskService:TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  // Permite obtener todas las tareas
  getTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.data = tasks.reverse();
    });
  }

  //Permite abrir el formulario reactivo para crear o editar la tarea
  openModalFormTask(row = null){
    //Destruyo el formulario o cargo la información de la fila
    this.selectedTask = row;

    //Abro la modal
    this.isModalOpen = true;
  }

  //Si se cierra la modal 
  closeModal(){
    this.isModalOpen = false;

    //se destruye la información de la selección de la tarea
    this.selectedTask = null;
  }
  
  managementTask(task: Task){
    //Si existe el id de la tarea es una edición
    if (task.id) {
      this.editTask(task);
    }else{
      this.saveTask(task);
    }
  }

  // Maneja el guardado de tareas (nueva)
  saveTask(task: Task) {
    //Si no crea la tarea
    this.taskService.addTask(task).then(() => {
      this.selectedTask = null; //  Reiniciar el formulario
      this.getTasks(); // Actualizar la lista
      this.isModalOpen = false;
    });
  }

   // Maneja la edición de tareas 
  editTask(task: Task){
    this.taskService.updateTask(task).then(() => {
      this.selectedTask = null; // Reiniciar el formulario
      this.getTasks(); // Actualizar la lista
      this.isModalOpen = false;
    });
  }

  //Permite completar la tarea
  approvedTask(id: string){
    this.taskService.updateTaskStatus(id, 'complete').then(() => {
      console.log('Tarea completada');
      this.getTasks();
    });
  }

  //Permite la eliminación de la tarea
  deleteTask(id: string){
    this.taskService.deleteTask(id).then(() => {
      console.log('Tarea eliminada');
      this.getTasks();
    });
  }

  //Implementación de filtrado
  filteredData() {
    //Estados
    const text = {
      pending: 'Pendiente',
      complete: 'Completo',
      reject: 'Rechazado',
    };    

    if (!this.searchTerm) {
      return this.data;
    }
    const lowerSearch = this.searchTerm.toLowerCase();
  
    return this.data.filter((item: any) =>
      Object.entries(item).some(([key, value]) => {
        if (typeof value === 'string') {
          const translatedValue = text[value as keyof typeof text] || value; // Traducción si existe
          return (
            value.toLowerCase().includes(lowerSearch) || // Búsqueda en inglés
            translatedValue.toLowerCase().includes(lowerSearch) // Búsqueda en español
          );
        }
        return false;
      })
    );
  }
  
}
