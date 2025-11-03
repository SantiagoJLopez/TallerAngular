import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service'

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.html',
  styleUrl: './series-list.css',
})
export class SeriesList implements OnInit {
    seasonsAverage: number = 0;
    series: Series[] = [];
    selectedSerie: Series | null = null;

    showSerieDetail(serie: Series): void {
      this.selectedSerie = serie;
    }

    constructor(private seriesService: SeriesService) {}

    getSeries(): void {
    this.seriesService.getSeries().subscribe((series) => {this.series = series;});
  }

    getSeasonsAverage() {
    let sum: number = 0;
    this.series.forEach(serie => {
      sum += serie.temporadas;
    });
    this.seasonsAverage = sum / this.series.length;
  }
    ngOnInit(): void {}
};

