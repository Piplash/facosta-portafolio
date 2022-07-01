import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styles: [
    `
    /*CONTENEDOR DE FXLAYOUR*/
      .container-fxLayout{
        margin-top: 20px;
        margin-bottom: 30px;
        font-size: 15px;
      }

    /*Tamaño foto perfil*/
      .imagenPerfil{
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%; 
      }

    /*Fotos encuéntrame*/
      .imagenEncuentrame{
        margin-left: 10px;
        margin-right: 10px;
        max-width: 100%;
        max-height: 100%;
      }
      
    /*ESTILOS IMAGEN Y DESCRIPCIÓN - SECCIÓN SOBRE MI*/
      .sobre-mi-img{
        text-align: center;
      }

      .encuentrame{
        height: 50px;
      }

      .sobre-mi-desc{       
        margin: 5%;
      }   
    
    /*ESTILOS DATOS ADICIONALES*/
      .lista-informacion{
        max-width: 100%;
      }
    `
  ]
})

export class SobreMiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //LÓGICA MAPBOX. NECESITA TOKEN DE API ALMACENADO EN ENVIROMENTS, UN CONTENEDOR "mpaxbox" Y SE AJUSTAN CONFIGURACIONES ADICIONALES
    
    (mapboxgl as any).accessToken = environment.mapboxToken;

    var map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -70.743687388299, -34.17532875660385],
      zoom: 15,
      minZoom: 14,
      maxZoom: 16
    });

  }

}
