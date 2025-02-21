import { Component, OnInit } from '@angular/core';
interface Componente{
  icon:string;
  name: string;
  redirectTo:string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
    componentes: Componente[]=[
      {
      icon:'american-football-outline',
      name:'Action-Sheet',
      redirectTo:'/action-sheet'
      },
     
      {
      icon:'checkmark-circle-outline',
      name:'Check',
      redirectTo:'/check'
      },
      {
      icon:'calendar-outline',
      name:'Datetime',
      redirectTo:'/datetime'
      },
       
      {
      icon:'beaker-outline',
      name:'Avatar',
      redirectTo:'/avatar'
      }, 
      {
      icon:'radio-button-off-outline',
      name:'Button',
      redirectTo:'/button'
      }, 
    ];
    
  constructor() { }

  ngOnInit() {
  }

}
