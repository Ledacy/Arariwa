import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any ;
@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css']
})
export class DenunciaComponent implements OnInit {
  @Input() ReclamoPage: boolean = true;
  constructor(){
    // setTimeout(() => {HOMEINIT($);}, 50);
  }
  loadAPI!: Promise<any>;
  ngOnInit(): void {

  }
}
