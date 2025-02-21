import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  public actionSheetButtons=[
    {text:'Delete',
    role: 'destructive',
    data: {
      action: 'delete'
    },
  },
  {
    text: 'Share',
    data: {
      action: 'share',
    },
  },
  {
    text: 'Cancel',
    role: 'cancel',
    data: {
      action: 'cancel',
    },
  },
  ];
    constructor() { }
  
    ngOnInit() {
    }
  public actionSheet=[
    {
    text: 'delete',
    role: 'destructive',
    data: {
      action: 'delete'
    },
    },
  ];
  public actionSh=[
    {text:'Delete',
    role: 'destructive',
    data: {
      action: 'delete'
    },
  },
  {
    text: 'Share',
    data: {
      action: 'share',
    },
  },
  
  ];
  public actionShee=[
    {
      text: 'Borrar',
      role: 'destructive',
      data: {
        action: 'delete',
      }
    },
    {
      text: 'buscar',
      data: {
        action: 'share',
      },
    },
  ]
}
