import { Component } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component{
  public labels1: string[] = ['Pan', 'Tacos', 'Refrescos'];
  public data1 = [
    [10, 15, 50]
  ];
}
