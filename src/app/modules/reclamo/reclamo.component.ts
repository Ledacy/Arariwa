import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any ;
@Component({
  selector: 'app-reclamo',
  templateUrl: './reclamo.component.html',
  styleUrls: ['./reclamo.component.css']
})
export class ReclamoComponent implements OnInit {
  constructor(){
    // setTimeout(() => {HOMEINIT($);}, 50);
  }
  loadAPI!: Promise<any>;
  ngOnInit(): void {

  }
}
