import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

// declare function _clickDoc():any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() HeaderLogin: boolean = false;
  constructor(public adminService: AdminService, public router: Router, private activeRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    const navTabs = document.querySelectorAll("#nav-tabs > a");
    navTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        navTabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        tab.classList.add("active");
      });
    });
  }
}
