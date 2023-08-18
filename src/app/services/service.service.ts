import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get('https://code.highcharts.com/mapdata/countries/us/custom/us-small.topo.json')
  }

  getPopulation() {
    return this.http.get('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/us-population-density.json')
  }
}
