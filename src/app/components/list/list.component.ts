import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

@Input() obtenApi;
@Input() icon;

id:string
path:string

  constructor(private router1:Router) { }

  ngOnInit() {}

  showItem(item){
    let urlElements = item.url.split("/");
    console.log(urlElements);
    this.id= urlElements[urlElements.length];
    this.path= urlElements[urlElements.length];
    console.log(this.path);
    
    

  }

}
