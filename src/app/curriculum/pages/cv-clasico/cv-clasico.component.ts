import { Component } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-cv-clasico',
  templateUrl: './cv-clasico.component.html',
  styles: [
  ]
})
export class CvClasicoComponent {
  title = 'CV Felipe Acosta';
  public page = 1;
  public pageLabel!: string;
}
