import { Component, OnInit } from '@angular/core';
import { DotaapiService } from 'src/app/services/dotaapi.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
})
export class HeroPage implements OnInit {

heroes:any;
iconname=`skull-sharp`;  

  constructor(private obdotaapi:DotaapiService) { }

  ngOnInit() {
    this.heroes= this.obdotaapi.getdotaapi(`heroes`);
  }
}
