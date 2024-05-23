import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

// declare function _clickDoc():any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class LoginComponent implements OnInit{
  constructor(public adminService: AdminService, public router: Router, private activeRoute: ActivatedRoute){
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // setTimeout(() => {
    //   _clickDoc();
    // }, 50);
  }
}
