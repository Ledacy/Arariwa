import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Input,} from '@angular/core';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// @Directive({
//   selector: '[appSlide]'
// })
export class HeaderComponent implements OnInit {
  @Input() InicioPage: any;
  @Input() AgenciaPage: any;
  @Input() TestimoniosPage: any;
  @Input() ReclamoPage: any;
  @Input() HeaderLogin: any;
  @Input() EdcuacionPage: any;
  @Input() AdminPage: any;
  user: any = null;
  constructor(public authService: AuthService, private scroller: ViewportScroller,) {
  }
  move: any;
  ngOnInit(): void {
    console.log(this.authService.user);
    this.user = this.authService.user;
    // this.move = this.movePage;
  }
  movePage(el: HTMLElement) {
    if (this.InicioPage) {
    }
    else {
      el.scrollIntoView();
    }
  }
  // movePage(){
  //   this.scroller.scrollToAnchor("target");
  // }
  logout() {
    this.authService.logout();
  }
}
