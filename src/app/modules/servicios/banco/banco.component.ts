import { Component, OnInit, Input } from '@angular/core';
// import { AuthService } from '../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

// declare function _clickDoc():any;
@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit{
  constructor(public router: Router){
  }
  ngOnInit(): void {
  }
}
