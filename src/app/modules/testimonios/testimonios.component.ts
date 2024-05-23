import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any ;

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent implements OnInit {
  @Input() TestimoniosPage: boolean = true;

  ngOnInit(): void {
    $('#video-1').prop('muted', true);
  }
}
