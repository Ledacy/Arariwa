import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  title = 'Curso de Angular 2 - victorroblesweb.es';
  @Input() EdcuacionPage: boolean = true;
  constructor() {
  }
  public mostrarTitulo(){
    console.log("funciona");
   // Usamos jQuery con normalidad
    $(".title").slideToggle();
  }
  ngOnInit(): void {
  }
  movePage(el: HTMLElement) {
    el.scrollIntoView();
  }
}
