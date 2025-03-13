import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { StatusBadgeComponent } from '../../components/status-badge/status-badge.component';
import { TableComponent } from '../../components/table/table.component';
@Component({
  selector: 'app-admin-task',
  imports: [CommonModule, StatusBadgeComponent, TableComponent],
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

  //Datos del datatable
  data = [
    { title: 'Juan Pérez', description: 'asdfasfasdfsafsa fdasdf', status: 'pending' },
    { title: 'Juan Pérez', description: 'asdfasfasdfsafsa fdasdf', status: 'pending' },
    { title: 'Juan Pérez', description: 'asdfasfasdfsafsa fdasdf', status: 'pending' },
    { title: 'Juan Pérez', description: 'asdfasfasdfsafsa fdasdf', status: 'pending' },
  ];

  edit(row: any) {
    console.log('Editar:', row);
  }
}
