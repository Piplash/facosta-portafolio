import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent  {

  trabajosUnoImgs = [
    {
      imageSrc:
        'assets/portafolio/UNAB1.png',
      imageAlt: 'UNAB1',
    },
    {
      imageSrc:
        'assets/portafolio/UNAB2.png',
      imageAlt: 'UNAB2',
    },
    {
      imageSrc:
        'assets/portafolio/UNAB3.png',
      imageAlt: 'UNAB3',
    },
    {
      imageSrc:
        'assets/portafolio/UNAB4.png',
      imageAlt: 'UNAB4',
    }
  ]

  trabajosUnoDesc = [
    {
      titulo: "Sitio de información Contact Center UNAB",
      subtitulo: "Proyecto para Universidad Nacional Andrés Bello",
      descripcion: `
                    Sitio desarrollado en Php y JavaScript, con Bootstrap y BBDD MySQL. Permite la mantención actualizada y centrada de información a través de un CRUD, y a la vez
                    su visualización para sus usuarios a través de datatables y búsquedas.`
    }
  ]

  trabajosDosImgs = [
    {
      imageSrc:
        'assets/portafolio/Landing1.png',
      imageAlt: 'Landing1',
    },
    {
      imageSrc:
        'assets/portafolio/Landing2.png',
      imageAlt: 'Landing2',
    }     
    ,
    {
      imageSrc:
        'assets/portafolio/Landing3.png',
      imageAlt: 'Landing3',
    }
  ]

  trabajosDosDesc = [
    {
      titulo: "Landing Page",
      subtitulo: "Landing Page de muestra",  
      descripcion: `
                    Landing page con Html, Bootstrap y CSS básico    
                    `,
      github: 'https://github.com/Piplash/Landing-Page'
    }
  ]

  trabajosTresImgs = [
    {
      imageSrc:
        'assets/portafolio/Carousel1.png',
      imageAlt: 'Carousel1',
    },
    {
      imageSrc:
        'assets/portafolio/Carousel2.png',
      imageAlt: 'Carousel2',
    }     
  ]

  trabajosTresDesc = [
    {
      titulo: "Tarjeta con Carousel",
      subtitulo: "Proyecto Personal",  
      descripcion: `
                    Tarjeta con título, subtítulo, descripción y carousel con opciones de autoslide, botones e indicadores. Modificado de un proyecto ya existente    
                    `,
      github: 'https://github.com/Piplash/Tarjeta-Con-Carousel'
    }
  ]

  trabajosCuatroImgs = [
    {
      imageSrc:
        'assets/portafolio/AsukaDaily1.png',
      imageAlt: 'Twitter-Bot1',
    },
    {
      imageSrc:
        'assets/portafolio/AsukaDaily2.png',
      imageAlt: 'Twitter-Bot2',
    },
    {
      imageSrc:
        'assets/portafolio/AsukaDaily3.png',
      imageAlt: 'Twitter-Bot3',
    }       
  ]

  trabajosCuatroDesc = [
    {
      titulo: "Twitter Bot",
      subtitulo: "Proyecto Personal",  
      descripcion: `
                    Bot de Twitter desarrollado en JavaScript y alojado en Heroku. Postea imágenes cada 5 horas y entrega un saludo especial los días Jueves    
                    `,
      github: 'https://github.com/Piplash/Asuka-Twitter-Bot'
    }
  ]

}
