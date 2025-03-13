import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  imports: [],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.css'
})
export class StatusBadgeComponent {
  //Defino unicamente los tipos que puede ser usados
  @Input() type: 'pending' | 'complete' | 'reject' = 'pending';

  //Permite obtener el background color en cuestión que tendra el badge
  getBackgroudColor() {
    
    //Defino los tipos de colores
    const colors = {
      pending: 'bg-orange-200',
      complete: 'bg-green-200',
      reject: 'bg-red-200',
    };

    //Accedo a la clave segun el tipo seleccionado del usuario
    return `${colors[this.type]}`;
  }

  //Permite obtener el color del texto cuestión que tendra el badge
  getTextColor() {
    //Defino los tipos de colores
    const textColors = {
      pending: 'text-orange-900',
      complete: 'text-green-900',
      reject: 'text-red-900',
    };

    //Accedo a la clave segun el tipo seleccionado del usuario
    return `${textColors[this.type]}`;
  }

  //Permite obtener el texto en base al tipo de estado
  getText() {
    //Defino los textos
    const text = {
      pending: 'Pendiente',
      complete: 'Completo',
      reject: 'Rechazado',
    };

    //Accedo a la clave segun el tipo seleccionado del usuario
    return `${text[this.type]}`;
  }
}
