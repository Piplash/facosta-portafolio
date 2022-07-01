import { Component, OnInit } from '@angular/core';
import { NavBarItems } from '../../../../interfaces/nav-bar-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    /*Tamaño máximo del loego*/
    img{
      height: 50px;
      padding-left: 10px;
      padding-top: 10px;
    }

    /*Altura de la navbar*/
    .navbar{
      height: 80px;
    }

    /*Estilos para el contenedor del cuerpo de la página. Dentro de este div se encuentra el router-outlet*/
    .container{
      margin-top: 2%;
      margin-left: 15%;
      margin-right: 15%;
      padding-bottom: 50px;
    }

    .footer{
      position: fixed;
      width: 100%;
      height: 50px;
      bottom:0;
      background-color: #f5f5f5;
      color: #555555;
      text-align: center;
    }

    .footer-contenido{
      padding-top: 15px;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  //Array de tipo NavBarItems[] que contiene los items de la navbar en home.component.html. La gracia de agregar acá es hacerlo reutilizable.
  navItems: NavBarItems[] = [
    {
      label: 'Sobre mi',
      link : 'sobre-mi'
    },
    {
      label: 'Estudios y Conocimientos',
      link : 'estudios'
    },
    {
      label: 'Experiencia Laboral',
      link : 'experiencia-laboral'
    },
    {
      label: 'Portafolio',
      link : 'portafolio'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
