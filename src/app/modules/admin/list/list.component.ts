import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { ActivatedRoute } from '@angular/router';

// declare function _clickDoc():any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(public adminService: AdminService, authService: AuthService, private activeRoute: ActivatedRoute) {
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
