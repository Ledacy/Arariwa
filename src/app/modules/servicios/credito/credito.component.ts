import { Component, OnInit, Input } from '@angular/core';
// import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

// declare function _clickDoc():any;
@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit{
  constructor(public router: Router){
  }
  ngOnInit(): void {
  }
}
