import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  //Recibe las cabeceras de mi tabla
  @Input() headers: { key: string; label: string; isSlot?: boolean }[] = [];

  //Recibe las data de mis cabeceras
  @Input() data: any[] = [];

  // Captura los slots personalizados con los nuevos nombres
  @ContentChild('slot_status') slot_status!: TemplateRef<any>;
  @ContentChild('slot_action') slot_action!: TemplateRef<any>;

  // Retorna el slot correspondiente según el key
  getSlot(key: string): TemplateRef<any> | null {
    return (this as any)['slot_' + key] || null;
  }
}
