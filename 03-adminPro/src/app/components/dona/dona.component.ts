import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet, Colors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.sass'],
})
export class DonaComponent {
  // Doughnutgit
  @Input() title: string = 'Ingresar Titulo';

  @Input('label') doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];

  @Input('data') doughnutChartData: MultiDataSet = [[350, 450, 100]];
  public doughnutChartType: ChartType = 'doughnut';

  public color: Colors[] = [
    {
      backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
    },
  ];
}
