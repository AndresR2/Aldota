import { Component, OnInit } from '@angular/core';
import { DotaapiService } from 'src/app/services/dotaapi.service';

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.page.html',
  styleUrls: ['./hero-stats.page.scss'],
})
export class HeroStatsPage implements OnInit {
 
heroStats:any;
iconname= `stats-chart-sharp`; 

  constructor(private obtdotaapi:DotaapiService) { }

  ngOnInit() {
    this.heroStats= this.obtdotaapi.getdotaapi(`heroStats`)
  }

}
