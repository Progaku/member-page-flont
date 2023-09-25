import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.scss']
})
export class FormLabelComponent {
  @Input({ required: true }) for = '';
}
