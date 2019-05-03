import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-incrementador-grafica',
  templateUrl: './incrementador-grafica.component.html',
  styles: []
})
export class IncrementadorGraficaComponent implements OnInit {

  

  @Input('ChartLabels') public doughnutChartLabels: Label[] = [];
  @Input('ChartData') public doughnutChartData: MultiDataSet = [];
  @Input('ChartType') public doughnutChartType: string;

  

  constructor() { }

  ngOnInit() {
  }

}
