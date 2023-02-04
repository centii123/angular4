import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit { //implements es para decir que es hija de la interface oninit

    constructor(){}

    ngOnInit(): void {
      
    }
}
