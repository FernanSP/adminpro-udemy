import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styles: [ './nopagefound.component.css'
  ]
})
export class NopagefoundComponent{

  year = new Date().getFullYear();
}
