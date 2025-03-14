import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//interfaces
import { Task } from '../../interfaces/task.model';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Input() task: Task | null = null; // Recibe una tarea para editarla
  @Output() taskSaved = new EventEmitter<Task>(); // Emite evento al padre

  //Form
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    //Configuración del validador de formulario
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    //Restablezco el formulario
    this.taskForm.reset();

    if (changes['task'] && this.task) {
      this.taskForm.patchValue(this.task); // Carga los datos si se edita
    }
  }

  // Metodo que se ejecuta al enviar el formulario
  submitForm() {
    //Valido el formulario
    if (this.taskForm.valid) {
      //Construyo el json
      const newTask: Task = { 
        id: this.task?.id, 
        status: this.task && this.task.status ? this.task.status : "pending",
        ...this.taskForm.value 
      };

      //Emito la respuesta al componente padre
      this.taskSaved.emit(newTask);

      //Restablezco el formulario
      this.taskForm.reset();
    }
  }
}
