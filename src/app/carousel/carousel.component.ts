import { Component, Input, OnInit } from '@angular/core';

interface carouselImages{
  imageSrc: string,
  imageAlt: string
}

interface tarjetas{
  titulo: string;
  subtitulo: string;
  descripcion: string;
  github?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images   : carouselImages[]  = []; //Obtiene imágenes del carousel
  @Input() tarjetas : tarjetas[]        = []; //Obtiene datos de cada tarjeta
  @Input() indicators     = true;   //Indicadores de índice
  @Input() controls       = true;   //Muestra botones
  @Input() autoSlide      = false;  //Deslizamiento automático
  @Input() slideInterval  = 5000;   //Cambia automáticamente cada 5 segundos

  selectedIndex = 0;

  ngOnInit(): void {
    //Si autoSlide true
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  //Clicks cada X cantidad de segundos, de acuerdo a slideInterval.
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  //Función para cambiar el selectedIndex declara al inicio, de acuerdo al click que se haya hecho por lado del html
  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  //Función para imagen anterior
  onPrevClick(): void {
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length -1
    } else {
      this.selectedIndex--;
    }
  }

  //Función para siguiente imagen
  onNextClick(): void {
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0
    } else {
      this.selectedIndex++;
    }
  }
}
