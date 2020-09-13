import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  data1: number[] = [20, 1150, 50];
  label1: string[] = ['Label 1', 'Label 2', 'Label 3'];
}
